// CodeEditor.js
import React, { useEffect, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';

const CodeEditor2 = ({ code, onChange }) => {
  

  
  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    fontSize: 16,
  };

  return (
    <MonacoEditor
      height="400"
      language="python" // Set a default language (you can customize this)
      theme="vs-dark"
      value={code}
      options={{readOnly: true}}
      className="w-full h-full border border-gray-900 overflow-hidden"
    />
  );
};

export default CodeEditor2;
