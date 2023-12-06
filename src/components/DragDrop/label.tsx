export const Label = ({ schedule }: { schedule: string }) => {
  return (
    <span className="absolute inset-y-0 right-[calc(100%_+_1rem)] flex items-center justify-center p-2 w-20 bg-white  ring-gray-400 ring-1 text-center font-bold text-black">
      {schedule}
    </span>
  );
};
