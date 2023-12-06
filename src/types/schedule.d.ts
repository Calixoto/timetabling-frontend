export interface Schedule {
  initialData: {
    weekday: string;
    schedule: string;
    id: string;
    courses: Courses[];
  }[];
}

export type ScheduleData = {
  weekday: string;
  schedule: string;
  id: string;
  courses: Courses[];
}[];

export interface Courses {
  semester: number;
  class_id: string;
  class_name: string;
  room: string;
  room_space: number;
  schedule: string;
  schedule_id: string;
}
