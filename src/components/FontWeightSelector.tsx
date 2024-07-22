import React from 'react';
import fontData from '../fontData.json';
import { FontData } from '../types';

interface FontWeightSelectorProps {
  fontFamily: string;
  fontWeight: string;
  setFontWeight: (fontWeight: string) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ fontFamily, fontWeight, setFontWeight }) => {
  const weights = Object.keys((fontData as FontData)[fontFamily] || {});

  return (
    <div className="control">
      <label>Variant</label>
      <select value={fontWeight} onChange={(e) => setFontWeight(e.target.value)}>
        {weights.map((weight) => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontWeightSelector;
