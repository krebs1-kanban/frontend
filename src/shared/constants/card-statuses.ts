export type statuses = "INCOMPLETE" | "IN_PROGRESS" | "COMPLETE";

type statusColor = Record<statuses, string>;
export const statusColors: statusColor = {
  COMPLETE: "#1e9b1e",
  IN_PROGRESS: "#e4e413",
  INCOMPLETE: "#ca1b1b",
};

type statusName = Record<statuses, string>;
export const statusNames: statusName = {
  COMPLETE: "Завершено",
  IN_PROGRESS: "В процессе",
  INCOMPLETE: "Не завершено",
};
