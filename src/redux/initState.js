const initState = {
  initCurr: 'USD',//самая популярная пара для россиян USD-RUB поэтому мы ее оставляем по умолчанию
  destCurr: 'RUB',
  rate: 10,//не важно какое значение, когда компонент App смонтируется, он все равно сразу поменяется на полученный со стороннего апи
  initValue: 1,
  destValue: 1,
  allTheCurrencies: [],
};

export default initState;
