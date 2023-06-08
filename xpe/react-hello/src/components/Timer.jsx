import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className="bg-red-200 p-3 font-semibold">{value}</span>;
}
