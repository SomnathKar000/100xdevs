import { useState, useMemo, useEffect } from "react";

const Counter = () => {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const [finalCount, setFinalCount] = useState(0);

  function fact(n) {
    return (n * (n + 1)) / 2;
  }
  const factInput = useMemo(() => {
    console.log("memo called");
    return fact(input);
  }, [input]);

  useEffect(() => {
    console.log("effect called");
    setFinalCount(fact(input));
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        min={0}
      />
      <h3>memo: {factInput}</h3>
      <h3>effect: {finalCount}</h3>
      <p>{count}</p>
      <button onClick={() => setCount((value) => value + 1)}>add</button>
    </div>
  );
};

export default Counter;
