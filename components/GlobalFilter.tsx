import React from "react";

interface Filter {
  filter: string;
  setFilter: (value: string) => void;
}

export const GlobalFilter = ({ filter, setFilter }: Filter) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      Search: {""}
      <input value={filter || ""} onChange={handleChange} />
    </div>
  );
};
