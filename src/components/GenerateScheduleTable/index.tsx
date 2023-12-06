"use client";

import { useGenerateSchedule } from "@/services/mutates/scheduleMutates/generateScheduleTable";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const GenerateScheduleTable = () => {
  const { push } = useRouter();
  const { mutateAsync, isPending, isIdle, isSuccess } = useGenerateSchedule();

  const handleGenerateSchedule = async () => {
    mutateAsync()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(isIdle, isSuccess);

  return (
    <>
      <Button
        className="w-56 h-56 rounded-full flex items-center justify-center p-2 border-8 border-primary data-[pending=true]:border-r-transparent mt-16 data-[pending=true]:animate-spin"
        variant="ghost"
        data-pending={isPending}
        disabled={isPending || isSuccess}
        onClick={handleGenerateSchedule}
      >
        {isPending ? null : "GERAR HORÁRIOS"}
      </Button>
      {isSuccess ? (
        <Button
          className="mt-6 text-xl"
          variant="link"
          onClick={() => push("/dashboard/schedule")}
        >
          clique para ver a tabela de horários
        </Button>
      ) : null}
    </>
  );
};
