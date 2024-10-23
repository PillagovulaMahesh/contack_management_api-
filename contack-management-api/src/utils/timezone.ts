// src/utils/timezone.ts
import moment from 'moment-timezone';

export const toUTC = (date: Date | string) => {
  return moment(date).utc().format();
};

export const convertToTimezone = (date: Date | string, timezone: string) => {
  return moment(date).tz(timezone).format();
};

export const formatDateRange = (startDate: string, endDate: string, timezone: string) => {
  const start = moment(startDate).tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  const end = moment(endDate).tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  return { start, end };
};
