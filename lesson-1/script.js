'use strict';


let Money = prompt('Ваш бюджет на месяц?', '1000'),
    Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
    Costs = +prompt * 2('Введите обязательную статью расходов в этом месяце', '500'),
    Price = +prompt * 2('Во сколько обойдется?', '250');
    //SubCosts = +prompt('Введите обязательную статью расходов в этом месяце', '500'),
    //SubPrice = +prompt('Во сколько обойдется?', '250');
let appData = {
  budget: Money,
  timeData: Time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[Costs] = Price;

console.log(appData);



alert('Бюджет на 1 день ' + Money/30 + ' условных единиц')


