"use client";
import { ChangeEvent, useState } from "react";
import { Checkbox } from "../Checkbox";

export const Td = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setIsChecked(checked);
  };
  return (
    <td>
      <Checkbox isChecked={isChecked} onChange={handleCheckbox} />
    </td>
  );
};
