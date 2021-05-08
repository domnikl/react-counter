import { useState } from "react";
import "./Counter.css";

interface CounterProps {
  initial?: number;
  onChange: (value: number) => void;
}

const Counter = (props: CounterProps) => {
  const [value, setValue] = useState(props.initial ?? 0);

  const increment = () => {
    setValue(value + 1);
    props.onChange(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
    props.onChange(value - 1);
  };

  return (
    <div className="Counter">
      <span className="value">{value}</span>

      <div className="buttons">
        <button data-testid="-" className="minus" onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button data-testid="+" className="plus" onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Counter;
