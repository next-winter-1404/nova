export const calculateDaysBetween = (
  startDate?: string,
  endDate?: string
) => {
  const start = new Date(startDate ?? "");
  const end = new Date(endDate ?? "");

  if (
    isNaN(start.getTime()) ||
    isNaN(end.getTime()) ||
    end <= start
  ) {
    return 0;
  }

  return Math.ceil(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
};