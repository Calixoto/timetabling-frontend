import { snackbar } from "@/lib/snackbar";
import { api } from "@/services/api";
import { ScheduleData } from "@/types/schedule";
import { useMutation } from "@tanstack/react-query";

const updateSchedules = async (data: ScheduleData) =>
  await api
    .put("schedule/update", {
      data,
    })
    .then(({ data }) => {
      snackbar("success", "Success!!");
      return data;
    })
    .catch((err) => {
      const message = err.response.data.message;
      snackbar("error", message);
      throw new Error(message);
    });

export const useUpdateSchedules = () =>
  useMutation({
    mutationFn: updateSchedules,
  });
