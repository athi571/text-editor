import React from 'react';

interface SaveButtonProps {
  save: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ save }) => {
  return <button onClick={save} className="save-button">Save</button>;
};

export default SaveButton;
