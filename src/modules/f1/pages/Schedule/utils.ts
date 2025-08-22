export function convertDate(date: string) {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;

  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${day}/${month}/${year}`;
}
