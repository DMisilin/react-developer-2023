import { composeTeam, composeQs } from './compose';
import { Team, QsObj, parseQs, createQs } from './pure-function';

test("compose max name", () => {
  const getTopTeam = (teams: Team[]): Team => {
    return teams.sort((a: Team, b: Team) => b.score - a.score)[0];
  };
  const teamName = (team: Team): string => team.name;

  const teams: Team[] = [
    { name: "Lions", score: 5 },
    { name: "Tigers", score: 4 },
    { name: "Bears", score: 6 },
    { name: "Monkeys", score: 2 },
  ];

  const composedActions = composeTeam(teamName, getTopTeam);
  expect(composedActions(teams)).toBe('Bears');
});

test("compose object to string", () => {
  const qsObj: QsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  };

  const composedActions = composeQs(createQs);
  expect(composedActions(qsObj))
    .toBe("?page=2&pageSize=10&total=205&somethingElse=value");
});

test("compose string to object", () => {
  const qString = "?page=2&pageSize=10&total=205&somethingElse=value"

  const composedActions = composeQs(parseQs);
  expect(composedActions(qString)).toEqual({
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  });
});