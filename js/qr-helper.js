/**
 * Varabond QR Code Generator & Native <dialog> Light-Dismiss Helper
 * Pure client-side ISO/IEC 18004 QR Code (Byte mode, ECC Level L, Versions 1..10)
 * + modern-web-guidance <dialog closedby="any"> fallback
 */
(function () {
  const EXP = new Uint8Array(512);
  const LOG = new Uint8Array(256);
  (function initGF() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      EXP[i] = x;
      LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) {
      EXP[i] = EXP[i - 255];
    }
  })();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return EXP[LOG[a] + LOG[b]];
  }

  function rsGeneratorPoly(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i++) {
      const next = new Array(poly.length + 1).fill(0);
      const factor = EXP[i];
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], factor);
      }
      poly = next;
    }
    return poly;
  }

  function rsEncode(data, ecLen) {
    const gen = rsGeneratorPoly(ecLen);
    const msg = new Uint8Array(data.length + ecLen);
    msg.set(data, 0);
    for (let i = 0; i < data.length; i++) {
      const coef = msg[i];
      if (coef !== 0) {
        for (let j = 0; j < gen.length; j++) {
          msg[i + j] ^= gfMul(gen[j], coef);
        }
      }
    }
    return msg.slice(data.length);
  }

  // Version 1..10 specs for ECC Level L: [totalDataBytes, ecBytesPerBlock, numBlocksGroup1, dataBytesGroup1, numBlocksGroup2, dataBytesGroup2]
  const VERSION_SPECS_L = [
    null,
    [19, 7, 1, 19, 0, 0],
    [34, 10, 1, 34, 0, 0],
    [55, 15, 1, 55, 0, 0],
    [80, 20, 1, 80, 0, 0],
    [108, 26, 1, 108, 0, 0],
    [136, 18, 2, 68, 0, 0],
    [156, 20, 2, 78, 0, 0],
    [194, 24, 2, 97, 0, 0],
    [232, 30, 2, 116, 0, 0],
    [274, 18, 2, 68, 2, 69]
  ];

  const ALIGNMENT_POS = [
    null,
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50]
  ];

  function pickVersion(byteLen) {
    for (let v = 1; v <= 10; v++) {
      const cap = VERSION_SPECS_L[v][0];
      const headerBits = v <= 9 ? 4 + 8 : 4 + 16;
      const maxBytes = Math.floor((cap * 8 - headerBits) / 8);
      if (byteLen <= maxBytes) return v;
    }
    return 10;
  }

  function encodeDataBits(bytes, version) {
    const totalDataBytes = VERSION_SPECS_L[version][0];
    const bits = [];
    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i--) {
        bits.push((val >>> i) & 1);
      }
    };

    // Byte mode indicator (0100)
    pushBits(0b0100, 4);
    pushBits(bytes.length, version <= 9 ? 8 : 16);
    for (let i = 0; i < bytes.length; i++) {
      pushBits(bytes[i], 8);
    }

    const maxBits = totalDataBytes * 8;
    const terminator = Math.min(4, maxBits - bits.length);
    pushBits(0, terminator);

    while (bits.length % 8 !== 0) {
      bits.push(0);
    }

    const dataCodewords = new Uint8Array(totalDataBytes);
    const byteCount = bits.length / 8;
    for (let i = 0; i < byteCount; i++) {
      let b = 0;
      for (let j = 0; j < 8; j++) {
        b = (b << 1) | bits[i * 8 + j];
      }
      dataCodewords[i] = b;
    }

    const padBytes = [0xec, 0x11];
    for (let i = byteCount; i < totalDataBytes; i++) {
      dataCodewords[i] = padBytes[(i - byteCount) % 2];
    }

    return dataCodewords;
  }

  function interleaveCodewords(dataCodewords, version) {
    const [, ecLen, g1Blocks, g1Data, g2Blocks, g2Data] = VERSION_SPECS_L[version];
    const dataBlocks = [];
    const ecBlocks = [];
    let offset = 0;

    for (let i = 0; i < g1Blocks; i++) {
      const block = dataCodewords.slice(offset, offset + g1Data);
      offset += g1Data;
      dataBlocks.push(block);
      ecBlocks.push(rsEncode(block, ecLen));
    }
    for (let i = 0; i < g2Blocks; i++) {
      const block = dataCodewords.slice(offset, offset + g2Data);
      offset += g2Data;
      dataBlocks.push(block);
      ecBlocks.push(rsEncode(block, ecLen));
    }

    const result = [];
    const maxDataLen = Math.max(g1Data, g2Data);
    for (let i = 0; i < maxDataLen; i++) {
      for (let b = 0; b < dataBlocks.length; b++) {
        if (i < dataBlocks[b].length) {
          result.push(dataBlocks[b][i]);
        }
      }
    }
    for (let i = 0; i < ecLen; i++) {
      for (let b = 0; b < ecBlocks.length; b++) {
        result.push(ecBlocks[b][i]);
      }
    }
    return result;
  }

  function generateMatrix(text) {
    const rawBytes = new TextEncoder().encode(text);
    const version = pickVersion(rawBytes.length);
    const maxCap = VERSION_SPECS_L[version][0] - (version <= 9 ? 2 : 3);
    const bytes = rawBytes.length > maxCap ? rawBytes.slice(0, maxCap) : rawBytes;
    const size = version * 4 + 17;

    const modules = Array.from({ length: size }, () => new Array(size).fill(false));
    const isFunction = Array.from({ length: size }, () => new Array(size).fill(false));

    const setFunctionModule = (r, c, dark) => {
      if (r < 0 || r >= size || c < 0 || c >= size) return;
      modules[r][c] = dark;
      isFunction[r][c] = true;
    };

    const drawFinder = (row, col) => {
      for (let dr = -1; dr <= 7; dr++) {
        for (let dc = -1; dc <= 7; dc++) {
          const r = row + dr;
          const c = col + dc;
          const inOuter = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
          const onBorder = dr === 0 || dr === 6 || dc === 0 || dc === 6;
          const inInner = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
          setFunctionModule(r, c, inOuter && (onBorder || inInner));
        }
      }
    };

    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      setFunctionModule(6, i, i % 2 === 0);
      setFunctionModule(i, 6, i % 2 === 0);
    }

    // Alignment patterns
    const align = ALIGNMENT_POS[version];
    for (let i = 0; i < align.length; i++) {
      for (let j = 0; j < align.length; j++) {
        if (
          (i === 0 && j === 0) ||
          (i === 0 && j === align.length - 1) ||
          (i === align.length - 1 && j === 0)
        ) {
          continue;
        }
        const cr = align[i];
        const cc = align[j];
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const dark = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
            setFunctionModule(cr + dr, cc + dc, dark);
          }
        }
      }
    }

    // Dark module & reserve format info areas
    setFunctionModule(size - 8, 8, true);
    for (let i = 0; i < 9; i++) {
      if (!isFunction[8][i]) setFunctionModule(8, i, false);
      if (!isFunction[i][8]) setFunctionModule(i, 8, false);
    }
    for (let i = 0; i < 8; i++) {
      if (!isFunction[8][size - 1 - i]) setFunctionModule(8, size - 1 - i, false);
      if (!isFunction[size - 1 - i][8]) setFunctionModule(size - 1 - i, 8, false);
    }

    // Place data bits
    const dataCw = encodeDataBits(bytes, version);
    const allCw = interleaveCodewords(dataCw, version);
    const allBits = [];
    for (let i = 0; i < allCw.length; i++) {
      for (let b = 7; b >= 0; b--) {
        allBits.push((allCw[i] >>> b) & 1);
      }
    }

    let bitIdx = 0;
    let upward = true;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) {
        const r = upward ? size - 1 - vert : vert;
        for (let j = 0; j < 2; j++) {
          const c = right - j;
          if (!isFunction[r][c]) {
            const dark = bitIdx < allBits.length ? allBits[bitIdx] === 1 : false;
            modules[r][c] = dark;
            bitIdx++;
          }
        }
      }
      upward = !upward;
    }

    // Apply Mask 0: (r + c) % 2 === 0
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!isFunction[r][c] && (r + c) % 2 === 0) {
          modules[r][c] = !modules[r][c];
        }
      }
    }

    // Format info for ECC Level L (01) + Mask 0 (000) -> precomputed BCH bits: 0x77c4
    const formatBits = 0x77c4;
    const getBit = (idx) => ((formatBits >>> idx) & 1) === 1;

    for (let i = 0; i <= 5; i++) setFunctionModule(8, i, getBit(i));
    setFunctionModule(8, 7, getBit(6));
    setFunctionModule(8, 8, getBit(7));
    setFunctionModule(7, 8, getBit(8));
    for (let i = 9; i < 15; i++) setFunctionModule(14 - i, 8, getBit(i));

    for (let i = 0; i < 8; i++) setFunctionModule(8, size - 1 - i, getBit(i));
    for (let i = 8; i < 15; i++) setFunctionModule(size - 15 + i, 8, getBit(i));
    setFunctionModule(size - 8, 8, true);

    return modules;
  }

  function renderSvg(text, ariaLabel) {
    const matrix = generateMatrix(text);
    const size = matrix.length;
    const quiet = 3;
    const viewSize = size + quiet * 2;
    let pathData = '';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (matrix[r][c]) {
          pathData += `M${c + quiet},${r + quiet}h1v1h-1z`;
        }
      }
    }
    const safeLabel = (ariaLabel || 'QR Code').replace(/"/g, '&quot;');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="crispEdges" role="img" aria-label="${safeLabel}"><rect width="${viewSize}" height="${viewSize}" rx="2" fill="#FFFDF8"/><path d="${pathData}" fill="#0F172A"/></svg>`;
  }

  function setupDialogLightDismiss(dialog) {
    if (!dialog) return;
    // Fallback for browsers without native closedby="any" support
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (e) => {
        if (e.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const clickedOutside =
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom;
        if (clickedOutside) {
          dialog.close();
        }
      });
    }
  }

  window.VarabondQR = {
    generateMatrix,
    renderSvg,
    setupDialogLightDismiss
  };
})();

