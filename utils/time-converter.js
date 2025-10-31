import { formatDistanceToNow } from 'date-fns';

export function timeConverter(isoTime) {
  const past = new Date(isoTime);
  try {
    return `${formatDistanceToNow(past)} ago`;
  } catch (error) {
    return 'invalid time';
  }
}