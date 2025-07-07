export function longDate(date: string | undefined) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function showDay(date: string | undefined) {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
  }).format(new Date(date));
}

export function formatTime(time: string | undefined) {
  if (!time) return '';

  const [hours, minutes, seconds] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  date.setSeconds(parseInt(seconds, 10));

  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}