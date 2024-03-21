// CodeEditor.js
"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";
const CodeEditor = ({ code, onChange }) => {
  

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    fontSize: 16,
  };

  return (
    <div>
      <MonacoEditor
      height="400"
      language="python" // Set a default language (you can customize this)
      theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        className="w-full h-full border border-gray-900 overflow-hidden"
      />
    </div>
  );
};

export default CodeEditor;
