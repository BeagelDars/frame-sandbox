import React, { useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';

// Clean minimal light theme
const minimalLightTheme = EditorView.theme({
  "&": {
    color: "#18181b",
    backgroundColor: "#ffffff"
  },
  ".cm-content": {
    caretColor: "#18181b",
    fontFamily: "'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#18181b"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#e4e4e7 !important"
  },
  ".cm-gutters": {
    backgroundColor: "#fafafa",
    color: "#a1a1aa",
    borderRight: "1px solid #f4f4f5"
  },
  ".cm-activeLine": {
    backgroundColor: "#fbfbfe"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#f4f4f5",
    color: "#18181b"
  }
}, { dark: false });

export const Editor = ({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
  activeTab,
  setActiveTab,
  editorMode
}) => {
  // Determine language extension and current code
  const { currentExtension, currentCode, onChange } = useMemo(() => {
    if (editorMode === 'single') {
      return {
        currentExtension: [html(), minimalLightTheme],
        currentCode: htmlCode,
        onChange: (val) => setHtmlCode(val)
      };
    }

    if (activeTab === 'html') {
      return {
        currentExtension: [html(), minimalLightTheme],
        currentCode: htmlCode,
        onChange: (val) => setHtmlCode(val)
      };
    } else if (activeTab === 'css') {
      return {
        currentExtension: [css(), minimalLightTheme],
        currentCode: cssCode,
        onChange: (val) => setCssCode(val)
      };
    } else {
      return {
        currentExtension: [javascript(), minimalLightTheme],
        currentCode: jsCode,
        onChange: (val) => setJsCode(val)
      };
    }
  }, [editorMode, activeTab, htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode]);

  return (
    <div className="h-full flex flex-col bg-[#ffffff] border-r border-[#e5e5ea]">
      {/* Editor Sub-header / Tabs */}
      <div className="h-10 border-b border-[#f0f0f2] bg-[#fafafa] px-3 flex items-center justify-between select-none">
        {editorMode === 'tabs' ? (
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1 text-xs font-mono rounded transition-all ${
                activeTab === 'html'
                  ? 'bg-[#ffffff] text-[#18181b] font-medium shadow-sm border border-[#e4e4e7]'
                  : 'text-[#71717a] hover:text-[#18181b]'
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1 text-xs font-mono rounded transition-all ${
                activeTab === 'css'
                  ? 'bg-[#ffffff] text-[#18181b] font-medium shadow-sm border border-[#e4e4e7]'
                  : 'text-[#71717a] hover:text-[#18181b]'
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1 text-xs font-mono rounded transition-all ${
                activeTab === 'js'
                  ? 'bg-[#ffffff] text-[#18181b] font-medium shadow-sm border border-[#e4e4e7]'
                  : 'text-[#71717a] hover:text-[#18181b]'
              }`}
            >
              JS
            </button>
          </div>
        ) : (
          <div className="text-xs font-mono text-[#52525b] font-medium px-1">
            index.html
          </div>
        )}

        <div className="text-[11px] font-mono text-[#a1a1aa]">
          {currentCode.split('\n').length} lines
        </div>
      </div>

      {/* CodeMirror Surface */}
      <div className="flex-1 overflow-hidden">
        <CodeMirror
          value={currentCode}
          height="100%"
          extensions={currentExtension}
          onChange={onChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightSpecialChars: true,
            history: true,
            foldGutter: true,
            drawSelection: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            defaultKeymap: true,
            searchKeymap: true,
            historyKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true
          }}
          className="h-full text-xs"
        />
      </div>
    </div>
  );
};
