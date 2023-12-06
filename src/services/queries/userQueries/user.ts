import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const getUser = async () =>
  await api
    .get("me")
    .then(({ data }) => data)
    .catch((err) => {
      const message = err;
      console.log(message);
    });

export const useGetUser = () =>
  useQuery({
    queryKey: ["user-data"],
    queryFn: getUser,
  });
