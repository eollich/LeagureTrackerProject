//Performance score is calculated by totalScore / variableCount (the maximum points you can attain)

let variableCount = 0;

const kda = (kills, deaths, assists) => {
    variableCount++;
    let kdaScore = (kills + assists) / deaths;
    if (kdaScore >= 3) {
        return 1;
    }
    else {
        return (kdaScore / 3);
    }
};
const vision = (visionScore, timeInMinutes) => {
    variableCount++;
    if ((visionScore / timeInMinutes) >= 2) {
        return 1;
    }
    else {
        return (visionScore / timeInMinutes) / 2;
    }
};
const cs = (cs) => {
    variableCount++;
    if (cs > 8) {
        return 1;
    }
    else {
        return cs / 8;
    }
};
const kp = (percent) => {
    variableCount++;
    if (kp >= 40) {
        return 1;
    }
    else {
        return kp / 40;
    }
};
const dmg = (playerDmg, totalDmg) => {
    variableCount++;
    if (((playerDmg / totalDmg) * 100) >= 15) {
        return 1;
    }
    else {
        return (((playerDmg / totalDmg) * 100) / 15);
    }
};

//calculates the totalScore using an arrow function

const totalScore = () => {
    return kda + vision + cs + kp + dmg;
}