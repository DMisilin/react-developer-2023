import { QsObj, Team } from 'src/lesson-20/pure-function';

// Задание 1
export const composeTeam =
  (...fns: ((arg: Team[] | Team) => Team | string)[]) =>
  (value: Team) => {
    return fns.reduceRight((result, fn) => fn(result), value);
  };

// Задание 2
export const composeQs =
  (...fns: ((arg: QsObj | string) => QsObj | string)[]) =>
  (value: QsObj | string) => {
    return fns.reduceRight((result, fn) => fn(result), value);
  };
