import React from "react";

interface ColumnFilter {
  column: {
    filterValue: string;
    setFilter: (value: string) => void;
  };
}

export const ColumnFilter = ({ column }: ColumnFilter) => {
  const { filterValue, setFilter } = column;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      Search: {""}
      <input value={filterValue || ""} onChange={handleChange} />
    </div>
  );
};
