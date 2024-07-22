import React, { useState, useEffect } from 'react';
import FontSelector from './components/FontSelector';
import FontWeightSelector from './components/FontWeightSelector';
import ItalicToggle from './components/ItalicToggle';
import TextEditor from './components/TextEditor';
import ResetButton from './components/ResetButton';
import SaveButton from './components/SaveButton';
import { loadFont } from './loadfont';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState(localStorage.getItem('text') || '');
  const [fontFamily, setFontFamily] = useState(localStorage.getItem('fontFamily') || 'Arial');
  const [fontWeight, setFontWeight] = useState(localStorage.getItem('fontWeight') || '400');
  const [italic, setItalic] = useState(localStorage.getItem('italic') === 'true');

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem('fontFamily', fontFamily);
    loadFont(fontFamily, fontWeight, italic);
  }, [fontFamily, fontWeight, italic]);

  useEffect(() => {
    localStorage.setItem('fontWeight', fontWeight);
    loadFont(fontFamily, fontWeight, italic);
  }, [fontWeight]);

  useEffect(() => {
    localStorage.setItem('italic', italic.toString());
    loadFont(fontFamily, fontWeight, italic);
  }, [italic]);

  const reset = () => {
    setText('');
    setFontFamily('Arial');
    setFontWeight('400');
    setItalic(false);
  };

  const save = () => {
    alert('Saved!');
  };

  return (
    <div className="app">
      <div className="controls">
        <FontSelector fontFamily={fontFamily} setFontFamily={setFontFamily} />
        <FontWeightSelector fontFamily={fontFamily} fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <ItalicToggle italic={italic} setItalic={setItalic} fontFamily={fontFamily} fontWeight={fontWeight} />
      </div>
      <TextEditor text={text} setText={setText} fontFamily={fontFamily} fontWeight={fontWeight} italic={italic} />
      <div className="buttons">
        <ResetButton reset={reset} />
        <SaveButton save={save} />
      </div>
    </div>
  );
};

export default App;
