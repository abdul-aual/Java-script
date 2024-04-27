var tealine = ['kalam', 'balam'];
console.log(tealine);
var posi = tealine.indexOf('balam');
console.log(posi);
tealine.push('jamal'); //last er dike eliment add kora
tealine.push('mobile');
console.log(tealine);
tealine.pop(); //akdom last element bad deya
console.log(tealine);
tealine.unshift('karim'); //ekdom surute element add kora
console.log(tealine);
tealine.shift(); //ekdom suru theke element bad deya
console.log(tealine);
tealine.push('tamal', 'rayhan', 'jomila','mojila', 'firefox', 'abu rayhan');
console.log(tealine);
console.log('hle');

var part = tealine.slice(2) // 2 num index theke porer gulo 
console.log(part);
console.log(tealine);
var part2=tealine.slice(2,4); //2 theke suru kre 3 porjnto (mane 4 er ag porjnto)
console.log(part2);