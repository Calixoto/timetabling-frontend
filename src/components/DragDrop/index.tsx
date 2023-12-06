"use client";
import { useUpdateSchedules } from "@/services/mutates/scheduleMutates/updateScheduleTable";
import { Schedule } from "@/types/schedule";
import { useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { Button } from "../ui/button";
import { Label } from "./label";
import { StrictModeDroppable } from "./strictModeDroppable";

const weekDays = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

export const DragDrop = ({ initialData }: Schedule) => {
  const { mutateAsync: updateSchedule, isPending } = useUpdateSchedules();
  const [data, setData] = useState(initialData);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1],
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId.split("droppable")[1],
      );
      const [item] = newData[oldDroppableIndex].courses.splice(source.index, 1);
      newData[newDroppableIndex].courses.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1],
      );
      const [item] = newData[droppableIndex].courses.splice(source.index, 1);
      newData[droppableIndex].courses.splice(destination.index, 0, item);
      setData([...newData]);
    }
  };

  const handleUpdateSchedules = async () => {
    await updateSchedule(data);
  };

  if (!data.length) return <h2>Loading...</h2>;
  return (
    <div className="flex flex-col space-y-4">
      <Button
        data-pending={isPending}
        disabled={isPending}
        onClick={handleUpdateSchedules}
      >
        {isPending ? (
          <span className="animate-spin rounded-full h-6 w-6 border-4 border-b-transparent border-primary-foreground" />
        ) : (
          "SALVAR ALTERAÇÕES"
        )}
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid gap-4 mx-4 grid-cols-6">
          {weekDays.map((item) => (
            <span
              className="p-2 w-20 bg-white ring-gray-400 ring-1 text-center font-bold text-black"
              key={item}
            >
              {item}
            </span>
          ))}
          {data.map((val, index) => {
            return (
              <StrictModeDroppable
                key={index}
                droppableId={`droppable${val.id}`}
              >
                {(provided) => (
                  <div
                    className="px-3 py-1.5 w-20 min-h-[30px] border-gray-400 border border-dashed relative flex flex-col transition-all"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {index % 6 === 0 ? <Label schedule={val.schedule} /> : null}
                    {val.courses.map((component, index) => (
                      <Draggable
                        key={component.class_id}
                        draggableId={component.class_id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <span
                            className="bg-input p-2 text-center my-1.5 text-sm text-primary font-medium rounded-sm"
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            {component.class_name}
                          </span>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};
