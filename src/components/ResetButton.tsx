import React from 'react';

interface ResetButtonProps {
  reset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ reset }) => {
  return <button onClick={reset} className="reset-button">Reset</button>;
};

export default ResetButton;
