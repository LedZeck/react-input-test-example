import { useState } from 'react';

import './App.css';
import Input from './components/Input';

function App() {
  const initialValue = 'Initial Input';
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className="App">
      <main>
        <Input value={initialValue} onChange={handleChange} />
        <p data-testid="display-value">{value}</p>
      </main>
    </div>
  );
}

export default App;
