import React from 'react';
import fontData from '../fontData.json';
import { FontData } from '../types';

interface FontSelectorProps {
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ fontFamily, setFontFamily }) => {
  return (
    <div className="control">
      <label>Font Family</label>
      <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
        {Object.keys(fontData as FontData).map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
