import { useState } from "react";

type ItemCounterProps = {
  name: string;
  count?: number;
};

export const ItemCounter = ({ name, count = 1 }: ItemCounterProps) => {
  const [itemCount, setItemCount] = useState(count);
  const IncreaseCount = () => setItemCount(itemCount + 1);
  const DecreaseCount = () => setItemCount(itemCount - 1);
  return (
    <>
      <section className="flex items-center gap-4 mt-5 bg-zinc-900 p-4 rounded-xl">
        <span className="w-37.5 text-white font-medium">{name}</span>
        <button
          onClick={IncreaseCount}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          +1
        </button>
        <span className="text-white font-bold">{itemCount}</span>
        <button
          onClick={DecreaseCount}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          -1
        </button>
      </section>
    </>
  );
};
