import { useState } from "react";
interface AppProps {
  name: string;
  quantity?: number;
}

export function App({ name, quantity }: AppProps) {
  const [count, setCount] = useState(quantity || 0);
  if (count === 0) return;
  return (
    <div className="w-64 p-4 bg-gray-100 rounded">
      <p>{name}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <span className="mx-2">{count}</span>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
    </div>
  );
}
