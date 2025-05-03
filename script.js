
//задание таймера неблокиерет дальнейшее выполнение кода 
console.log('начали варить кофе');

setTimeout(() => {
    console.log('таймер на 3000 мсек')
}, 3000)
setTimeout(() => {
    console.log('таймер на 500 мск')
}, 500)
console.log('после таймера');
console.log('befor cycle')
// запуск таймера времени выполнения кода
console.time('q')
for (let i = 1; i < 1000000000; i++) {
    let a = i / i;
}
// остановка таймера и получение времени выполнения кода в милисек
console.timeEnd('q');
console.log('after cycle')