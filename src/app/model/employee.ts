export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  projectId: string;
  projectName: string;
  totalMonthHours: number;
  dayLevelStats?: DayPunch [];
}

export interface DayPunch {
  punchIn: string;
  punchOut: string;
  totalHours: number;
  totalProductiveHours: number;
}
