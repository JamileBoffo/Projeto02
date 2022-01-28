const prompt = require('prompt-sync')();
console.clear();

let perg;

do{
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

    console.log();

    let rodadas = +prompt('Digite a quantidade de rodadas que você quer jogar: ');

    console.log();

    let luta = ['ninjutsu', 'taijutsu', 'genjutsu'];
    let num1 = luta[0];
    let num2 = luta[1];
    let num3 = luta[2];

    console.log(`Escolha seu modo de luta de forma que: 
    1 - Ninjutsu; 
    2 - Taijutsu; 
    3 - Genjutsu`);

    console.log();

    let vencedoruser = 0;
    let vencedorpc = 0;


    for (var i = 0; i < rodadas; i++){
        let escUser= +prompt('Qual modo de luta escolhido? ');
        let escPc = Math.trunc(Math.random() * 3);
        console.log();
        if (escUser == 1 && escPc == 2 || escUser == 2 && escPc == 3 || escUser == 3 && escPc == 1){
            console.log(`Você escolheu ${luta[escUser - 1]}, que ganha de ${luta[escPc]}`);
            vencedoruser++
        } else if(escPc == 1 && escUser == 2 || escPc == 2 && escUser == 3 || escPc == 3 && escUser == 1 ){
            console.log(`O computador escolheu ${luta[escPc]}, que ganha de ${luta[escPc]}s`);
            vencedorpc++
        } else{
            console.log(`Você e o computador escolheram ${luta[escUser - 1]}. Empate`)
        }
    }

    console.log(`Você venceu ${vencedoruser} vezes em ${rodadas} rodadas.`);
    console.log(`O computador venceu ${vencedorpc} vezes em ${rodadas} rodadas.`);
    var venc = rodadas/ 2
    if (vencedoruser >= venc){
        console.log('Parabéns!! Você é o grande vencedor da BATALHA NINJA.')
    } else{
        console.log('Que pena!! O computador ganhou de você.')
    }

    console.log();

    perg = prompt('Deseja jogar novamente? ');
} while( perg == 's' || perg == 'sim' || perg == 'Sim')
