import React from 'react'
import { MyResponsivePie } from "./components/Diagramma";

const Example = () => {
  const data = [
    {
      id: "haskell",
      label: "haskell",
      value: 45,
      color: "hsl(165, 70%, 50%)",
    },
    {
      id: "rust",
      label: "rust",
      value: 513,
      color: "hsl(84, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 41,
      color: "hsl(270, 70%, 50%)",
    },
    {
      id: "scala",
      label: "scala",
      value: 157,
      color: "hsl(202, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 558,
      color: "hsl(316, 70%, 50%)",
    },
  ];
  return (
    <div>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default Example