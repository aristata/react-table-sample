import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

interface Filter {
  filter: string;
  setFilter: (value: string) => void;
}

export const GlobalFilter = ({ filter, setFilter }: Filter) => {
  const [value, setValue] = useState(filter);
  // const changeValue = useAsyncDebounce((value) => {
  //   setFilter(value || undefined);
  // }, 300);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFilter(value);
  };
  return (
    <div>
      Search: {""}
      <input
        type={"text"}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
