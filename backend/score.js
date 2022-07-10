//Performance score is calculated by totalScore / variableCount (the maximum points you can attain)

let totalScore = 0;
let variableCount = 0;

const kda = (kills, deaths, assists) => {
    variableCount++;
    let kdaScore = (kills + assists) / deaths;
    let opScore1;
    if (kdaScore >= 3) {
        opScore1 = 1;
    }
    else {
        opScore1 = (kdaScore / 3);
    }
};
const vision = (visionScore, timeInMinutes) => {
    variableCount++;
    let opScore2;
    if ((visionScore / timeInMinutes) >= 2) {
        opScore2 = 1;
    }
    else {
        opScore2 = (visionScore / timeInMinutes) / 2;
    }
};
const cs = (cs) => {
    variableCount++;
    let opScore3;
    if (cs > 8) {
        opScore3 = 1;
    }
    else {
        opScore3 = cs / 8;
    }
};
const kp = (percent) => {
    variableCount++;
    let opScore4;
    if (kp >= 40) {
        opScore4= 1;
    }
    else {
        opScore4 = kp / 40;
    }
};
const dmg = (playerDmg, totalDmg) => {
    variableCount++;
    let opScore5;
    if (((playerDmg / totalDmg) * 100) >= 15) {
        opScore5 = 1;
    }
    else {
        opScore5 = (((playerDmg / totalDmg) * 100) / 15);
    }
};

/*
PERFORMANCE SCORES
opScore1 = kda
opScore2 = vision
opScore3 = cs
opScore4 = kp
opScore5 = damage
*/

function scoreCalculation() {
    totalScore = (opScore1 + opScore2 + opScore3 + opScore4 + opScore5) / variableCount;
};