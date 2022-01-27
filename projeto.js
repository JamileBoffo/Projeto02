const prompt = require('prompt-sync')();
console.clear();

console.log('===========================');
console.log('-------BATALHA NINJA-------');
console.log('===========================');
console.log();

console.log('Seja muito bem-vindo(a) ao BATALHA NINJA');
console.log('O jogo funciona na mesma temática de um Jokenpô, mas adaptado ao mundo ninja.');
console.log(`Temos 3 elementos: NINJUTSU, TAIJUTSU, GENJUTSU:`);
console.log('Eles se organizam da seguinte forma: ');
console.log(`
NINJUTSU ganha de TAIJUTSU mas perde para GENJUTSU
TAIJUTSU ganha de GENJUTSU mas perde para NINJUTSU
GENJUTSU ganha de NINJUTSU mas perde para NINJUTSU`);

let luta = ['ninjutsu', 'taijutsu', 'genjutsu'];

console.log(`Escolha seu modo de luta de forma que: 
1 - Ninjutsu; 
2 - Taijutsu; 
3 - Genjutsu`);

let num1 = luta[0];
let num2 = luta[1];
let num3 = luta[2];

let escUser= +prompt('Qual modo de luta escolhido? ');
console.log(luta[escUser - 1]);

let escPc = Math.trunc(Math.random() * 3);
console.log(luta[escPc])

while (escUser != escPc){
    console.log('entrei')
    if (escUser == 1 && escPc == 2){
        console.log(`Você escolheu ${escUser}, que ganha de ${escPC}`);
    } if(escUser == 2 && escPc == 3){
        console.log(`Você escolheu ${escUser}, que ganha de ${escPC}`)
    }
}

