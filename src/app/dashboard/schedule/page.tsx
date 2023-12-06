import { DragDrop } from "@/components/DragDrop";
import { api } from "@/services/api";

const Schedule = async () => {
  const scheduleTable = await api
    .get("schedule")
    .then(({ data }) => data)
    .catch((err) => {
      const message = err;
      console.log(message);
    });
  return (
    <>
      <DragDrop initialData={scheduleTable} />
    </>
  );
};

export default Schedule;
