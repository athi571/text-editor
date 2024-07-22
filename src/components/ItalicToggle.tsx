import React from 'react';
import fontData from '../fontData.json';
import { FontData } from '../types';

interface ItalicToggleProps {
  italic: boolean;
  setItalic: (italic: boolean) => void;
  fontFamily: string;
  fontWeight: string;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ italic, setItalic, fontFamily, fontWeight }) => {
  const supportsItalic = (fontData as FontData)[fontFamily] && (fontData as FontData)[fontFamily][`${fontWeight}italic`];

  return (
    <div className="control">
      <label>Italic</label>
      <button onClick={() => setItalic(!italic)} disabled={!supportsItalic}>
        {italic ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default ItalicToggle;
