import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const getScheduleTable = async () =>
  await api
    .get("schedule")
    .then(({ data }) => data)
    .catch((err) => {
      const message = err;
      console.log(message);
    });

export const useGetScheduleTable = () =>
  useQuery({
    queryKey: ["schedule-table"],
    queryFn: getScheduleTable,
  });
