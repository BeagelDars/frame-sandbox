import LZString from 'lz-string';

export const compressData = (data) => {
  try {
    const jsonStr = JSON.stringify(data);
    return LZString.compressToEncodedURIComponent(jsonStr);
  } catch (e) {
    console.error('Compression failed', e);
    return null;
  }
};

export const decompressData = (compressed) => {
  try {
    const jsonStr = LZString.decompressFromEncodedURIComponent(compressed);
    if (!jsonStr) return null;
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error('Decompression failed', e);
    return null;
  }
};

export const buildCombinedHtml = ({ html = '', css = '', js = '', title = 'Site' }) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || 'Untitled Site'}</title>
  <style>
${css}
  </style>
</head>
<body>
${html}
  <script>
    // Safe console forwarder to parent
    (function() {
      const origLog = console.log;
      const origError = console.error;
      const origWarn = console.warn;
      const origInfo = console.info;
      
      function send(type, args) {
        try {
          const serialized = Array.from(args).map(arg => {
            if (typeof arg === 'object' && arg !== null) {
              try { return JSON.stringify(arg); } catch(e) { return String(arg); }
            }
            return String(arg);
          }).join(' ');
          window.parent.postMessage({ type: 'FRAME_CONSOLE', level: type, message: serialized }, '*');
        } catch(e) {}
      }

      console.log = function() { send('log', arguments); origLog.apply(console, arguments); };
      console.error = function() { send('error', arguments); origError.apply(console, arguments); };
      console.warn = function() { send('warn', arguments); origWarn.apply(console, arguments); };
      console.info = function() { send('info', arguments); origInfo.apply(console, arguments); };
    })();

    // Catch runtime errors
    window.onerror = function(msg, url, lineNo, columnNo, error) {
      window.parent.postMessage({ 
        type: 'FRAME_CONSOLE', 
        level: 'error', 
        message: 'Line ' + lineNo + ': ' + msg 
      }, '*');
      return false;
    };

    ${js}
  </script>
</body>
</html>`;
};
