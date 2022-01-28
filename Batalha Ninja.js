const prompt = require('prompt-sync')();
console.clear();

let perg;

do{
    console.log(`       ╔════════════════════════════╗`);
    console.log('       ║        𝐵𝒶𝓉𝒶𝓁𝒽𝒶 𝒩𝒾𝓃𝒿𝒶       ║');
    console.log('       ╚════════════════════════════╝');
    console.log();

    console.log('Seja muito bem-vindo(a) ao 𝐵𝒶𝓉𝒶𝓁𝒽𝒶 𝒩𝒾𝓃𝒿𝒶!!');
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
            console.log(`Você escolheu ${luta[escUser - 1]} e o seu adversário ${luta[escPc]}, você ganhou a rodada`);
            console.log()
            vencedoruser++
        } else if(escPc == 1 && escUser == 2 || escPc == 2 && escUser == 3 || escPc == 3 && escUser == 1 ){
            console.log(`O adversário escolheu ${luta[escPc]} e você ${luta[escUser - 1]}, o adversário ganhou a rodada`);
            console.log();
            vencedorpc++
        } else{
            console.log(`Você e seu adversário escolheram ${luta[escUser - 1]}. Empate`)
            console.log();
        }
    }

    console.log(`Você venceu ${vencedoruser} vezes em ${rodadas} rodadas.`);

    console.log();

    console.log(`O computador venceu ${vencedorpc} vezes em ${rodadas} rodadas.`);

    console.log();

    var venc = rodadas/ 2

    if (vencedoruser > vencedorpc){
        console.log('Parabéns!! Você é o grande vencedor da 𝐵𝒶𝓉𝒶𝓁𝒽𝒶 𝒩𝒾𝓃𝒿𝒶.')
    } else{
        console.log('Que pena!! O computador ganhou de você.')
    }

    console.log();

    perg = prompt('Deseja jogar novamente? ');

} while( perg.toLowerCase() == 's' || perg.toLowerCase() == 'sim')
