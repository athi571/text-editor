import React from 'react';

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  fontFamily: string;
  fontWeight: string;
  italic: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, setText, fontFamily, fontWeight, italic }) => {
  return (
    <textarea
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontStyle: italic ? 'italic' : 'normal',
      }}
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="text-editor"
    />
  );
};

export default TextEditor;
