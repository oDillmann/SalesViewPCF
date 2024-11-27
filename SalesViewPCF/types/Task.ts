import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";

export type Task = {
  id: string;
  title: string;
  status: task_task_statecode;
  departmentId: string;
}
