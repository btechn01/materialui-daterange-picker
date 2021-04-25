/* eslint-disable import/prefer-default-export */

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
} from "date-fns";

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from "./types";

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: "Cегодня",
    startDate: date,
    endDate: date,
  },
  {
    label: "Вчера",
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },
  {
    label: "Эта неделя",
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: "Прошлая неделя",
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  {
    label: "Последние 7 дней",
    startDate: addWeeks(date, -1),
    endDate: date,
  },
  {
    label: "Этот месяц",
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: "Прошлый месяц",
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
