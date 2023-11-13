import { useState } from 'react';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  const [userInput, setValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <>
      <input
        data-testid="input-field"
        type="text"
        value={userInput}
        onChange={(event) => handleChange(event)}
      />
    </>
  );
};

export default Input;
