// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.sort((a: Team, b: Team) => b.score - a.score)[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return Object.entries(qsObj)
    .reduce((acc, elm) => {
      acc += `${elm.join('=')}&`;
      return acc;
    }, '?')
    .slice(0, -1);
};

// Задание 3
export const parseQs = (qs: string): QsObj => {
  return qs
    .slice(1)
    .split('&')
    .reduce((acc, elm) => {
      const t = elm.split('=');
      acc[t[0]] = t[1];
      return acc;
    }, {});
};
