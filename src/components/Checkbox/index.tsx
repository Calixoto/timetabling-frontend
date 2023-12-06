import { Check } from "lucide-react";
import { InputHTMLAttributes } from "react";

type CheckboxProps = {
  isChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
export const Checkbox = ({ isChecked, ...rest }: CheckboxProps) => {
  return (
    <div
      data-checked={isChecked}
      className="flex items-center justify-center w-6 h-6 ring-2 ring-secondary-foreground data-[checked=true]:ring-primary text-secondary rounded-sm data-[checked=true]:bg-primary group"
    >
      <input
        type="checkbox"
        checked={isChecked}
        {...rest}
        className="w-6 h-6 appearance-none absolute z-10"
      />
      <Check
        strokeWidth={2}
        size={18}
        className="group-data-[checked=false]:hidden"
      />
    </div>
  );
};
