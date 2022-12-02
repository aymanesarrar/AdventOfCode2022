// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
// A for Rock, B for Paper, and C for Scissors.
// X for Rock, Y for Paper, and Z for Scissors
// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won

import fs from "fs/promises";
const processData = async () => {
    const data = await fs.readFile("./typescript/input2.txt", {encoding: "utf-8"});
   return Buffer.from(data);
}

const objects = {
    X: 1,
    Y: 2,
    Z: 3
}

const botMap = {
    A: "X",
    B: "Y",
    C: "Z"
}


const getWinner = (bot: string, human: string): boolean => {
    return ((human === "Y" && bot === "A") || (human === "X" && bot === "C") || (human === "Z" && bot === "B"))
}

const calculateScore = (bot: string, human: string): number => {
    let score = 0;
    if (human === botMap[bot])
        score += 3;
    else if (getWinner(bot, human))
        score += 6;
    score += objects[human];
    
    return score;
}


(async () => {
    const data = (await processData()).toString("utf-8").split("\n");
    let score = 0;
    data.forEach(round => {        
        let playerChoices = round.split(" ")
        score += calculateScore(playerChoices[0], playerChoices[1]);
    })
    console.log(score)
})()