var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer',
            'mPavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        ['Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
var jugadores1 = [''];
var j = 0;
for (var i = 0; i < game.players[0][10].length; i++) {
    jugadores1[j] = game.players[0][i];
    j++;
}
j = 0;
var jugadores2 = [''];
for (var i = 0; i < game.players[1][10].length; i++) {
    jugadores2[j] = game.players[1][i];
    j++;
}
j = 0;
var team1players = [''];
for (var i = 1; i < game.players[0][10].length; i++) {
    team1players[j] = game.players[0][i];
    j++;
}
var players1Final = jugadores1;
players1Final.push('Thiago', 'Coutinho', 'Perisic');
var allPlayers = __spreadArray(__spreadArray([], jugadores1), jugadores2);
//console.log('jugadores1:' + jugadores1);
//console.log('jugadores2:' + jugadores2);
//console.log('gk: ' + jugadores1 [0]);
//console.log('fieldplayers: ' + team1players);
//console.log('allPlayers: ' + allPlayers);
//console.log('players1Final: ' + players1Final);
var equipo1 = game.odds.team1;
var eempate = game.odds.x;
var equipo2 = game.odds.team2;
var s1 = 0;
var s2 = 0;
function printGoals(jugador) {
    for (var h = 0; h < jugadores1.length; h++)
        if (jugador == jugadores1[h]) {
            s1++;
            break;
        }
        else if (jugador == jugadores2[h]) {
            s2++;
            break;
        }
    console.log('jugador: ', jugador);
}
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
console.log('Goles equipo 1: ', s1, 'Goles equipo 2: ', s2);
var ganador = (s1 > s2) ? (console.log('GANADOR: Bayern Munich')) : (s1 < s2) ? (console.log('GANADOR: Borrussia Dortmund')) : (console.log('EMPATE'));
