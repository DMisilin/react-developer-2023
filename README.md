# react-developer-2023
Repository for OTUS react developer

## Home tasks

### Lesson 2
Webpack + babel + typescript базовая настройка. Консольный калькулятор

#### Path `src/lesson-2`

```text
Минимальные требования к программе:
Основные арифмитические операторы (-+/*) с правильным порядком выполнения.
Пример: 2 + 2 * 2 = 6
Строку выводить в консоль, после символа >
Операторы и цифры разделяются через пробел
Остальное оформление и улучшения на собственный выбор.
```

#### start
`npm run calc`

#### test
`npm run test`

------

### Lesson 10
#### Path `src/lesson-10`

```text
Задание к TypeScript: Part 2 будет проверять ваше умение использовать и вычислять типы
Все задания устроены таким образом что в них есть тип FIXME (который any) и ваша задача избавится от него
Менять код кроме типов нельзя, исходные типы менять тоже нельзя, но можно рефакторить
Например `type A = 1 | 2` выразить как `type A1 = 1; type A2 = 2; type A = A1 | A2;`

Для принятия дз достачно сделать первый уровень
Второй уровень для пытливых
И есть супер челлендж (hard) для самых упорных
```

------

### Lesson 11
#### Path `src/components/Score`

```text
Components lifecycle

Цель:
Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов, использующих методы жизненного цикла

Описание/Пошаговая инструкция выполнения домашнего задания:
1. Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов(можно как основу взять дз из урока про JSX)
2. Описать constructor как минимум в одном компоненте, объявить в конструкторе стейт и привязать контекст методов
3. Описать componentDidMount как минимум в одном компоненте, получить в нем данные сервера(можно использовать заглушку или сторонние сервисы, например https://jsonplaceholder.typicode.com/). Описать подписку на событие
4. Описать shouldComponentUpdate как минимум в одном компоненте, произвести в нем оптимизацию производительности(если будет притянутый за уши случай - ничего страшного)
5. Описать componentDidUpdate как минимум в одном компоненте, описать в нем условие реализовать обновление стейта при этом условии
6. Описать componentWillUnmout в компоненте, где в рамках componentDidMount была подписка на событие, реализовать отписку от этого события
7. Описать все остальные методы с каким-либо функционалом
8. Написать компонент с отловом ошибок, обернуть в него любой компонент

Критерии оценки:
ДЗ считается принятым, если выполнены первые 6 пунктов, написаны тесты и storybook

Рекомендуем сдать до: 24.04.2023
```

#### start
`npm run dev`

#### test
`npm run test`

------

### Lesson 16
#### Path `src/components/Form` & `src/components/Floor`

```text
Components lifecycle. Списки, события, формы

Используем styled-components для разработки и манипуляции стилями.
Добавим стили в компоненты, разработанные в рамках предыдущего ДЗ.
При работе с проектами типа крестики-нолики/Игра Жизнь:

В поле пробрасываются параметры с размерами x/y - сделать так, чтобы размеры поля менялись, при изменении этих параметров. При этом состояние отмеченных клеток должно сохраняться (игра не сбрасывается)
Добавить анимацию в любом виде для клеток - для клеток, которые меняют свое состояние
В случае, если вы реализуете другой проект, выбираете динамическую часть вашего приложения и реализуете несколько компонентов из неё.
Добавляем элементы управления в приложение
```

#### start
`npm run dev:server`

#### test
`npm run test`

------
