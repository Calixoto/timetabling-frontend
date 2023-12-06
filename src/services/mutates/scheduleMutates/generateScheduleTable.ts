import { snackbar } from "@/lib/snackbar";
import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

const generateScheduleTable = async () =>
  await api
    .post("schedule")
    .then(({ data }) => {
      snackbar("success", "Success!!");
      return data;
    })
    .catch((err) => {
      const message = err.response.data.message;
      snackbar("error", message);
      throw new Error(message);
    });

export const useGenerateSchedule = () =>
  useMutation({
    mutationFn: generateScheduleTable,
  });
