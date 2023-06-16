import { UserType, MyErrorType, ActionType } from 'src/lesson-24/utils/types';

const names = ['Leo', 'Masha', 'Nikolay', 'Mars', 'Neo'];
const surnames = ['Ivanov', 'Simon', 'First', 'Old', 'DJ'];

export const getUser = (
  action: ActionType,
): { user: UserType | null; errors: MyErrorType[] } => {
  // Ответ для тестирования
  if (action) {
    return {
      user: action.user || null,
      errors: action.errors || null,
    };
  }

  return {
    user: {
      name: names[Math.round(Math.random() * names.length)],
      surname: surnames[Math.round(Math.random() * surnames.length)],
      age: Math.round(Math.random() * 100),
    },
    errors: [],
  };
};

export const getToken = (user: UserType) => {
  console.log(`getToken() --> user: `, user);

  if (user.name === 'test') {
    return JSON.stringify({
      expires: +new Date('2025-01-01'),
      user,
    });
  }

  return JSON.stringify({
    expires: +new Date() + 100 * 1000,
    user,
  });
};
