'use strict';


let Money = prompt('Ваш бюджет на месяц?', '1000'),
    total = Money/30;
let Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

let Costs = +prompt('Введите обязательную статью расходов в этом месяце', '500'),
    Price = +prompt('Во сколько обойдется?', '250');

let appData = {
  budget: Money,
  timeData: Time,
  expenses: {},
  optionalExpenses: 1,
  income: 1,
  savings: false
};

appData.expenses[Costs] = Price;

console.log(appData);

alert('Бюджет на 1 день ' + total + ' условных единиц')

