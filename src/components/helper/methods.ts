/**
 * Получить случайное число в рамках заданного максимума
 * */
const randomNumber = (maxValue: number) => {
  return Math.floor(Math.random() * maxValue);
};

/**
 * Собрать массив случайных чисел
 * */
export const getRandomArray = (
  length: number,
  fillings: number,
  maxPoints: number,
) => {
  console.log(
    `Length: ${length}; fillings: ${fillings}; maxPoints: ${maxPoints}`,
  );
  const result = [];

  for (let i = 0; i < length; i++) {
    const max = randomNumber(100);

    if (fillings >= 100 || fillings > max) {
      // Если вернулся 0, то в итоговый массив добавляем 1, чтобы соответствовать проценту наполнения
      result.push(randomNumber(maxPoints + 1) || 1);
    } else {
      result.push(0);
    }
  }

  return result;
};
