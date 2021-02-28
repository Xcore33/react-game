function randomIntFromInterval(min, max) {
  return Math.floor((Math.random() % max) * (max - min + 1) + min);
}

export const getAIChoice = (type) => {
  if (type === "basic") {
    const randomNumber = randomIntFromInterval(1, 3);
    const choices = ["paper", "scissor", "rock"];
    return choices[randomNumber - 1];
  } else if (type === "advanced") {
    const randomNumber = randomIntFromInterval(1, 5);
    const choices = ["paper", "scissor", "rock", "stick", "ring"];
    return choices[randomNumber - 1];
  }
};

export const getGameResult = (gamerChoice, AIChoice) => {
  const gameResultChoices = [
    {
      text: "DRAW",
      value: "draw",
    },
    {
      text: "YOU LOSE",
      value: "lose",
    },
    {
      text: "YOU WIN",
      value: "win",
    },
  ];

  const choices = {
    rock : {name: "Rock", defeats: ["scissor","stick"]},
    paper: {name: "Paper", defeats: ["rock", "ring"]},
    scissor: {name: "Scissor", defeats: ["paper", "stick"]},
    stick: {name: "Stick", defeats:["paper","ring"]},
    ring: {name: "Ring", defeats:["scissor","rock"]}
  };
  const processMove = function (gamerChoice, AIChoice) {
    if (gamerChoice === AIChoice) {
      return gameResultChoices[0];
    } else if (choices[gamerChoice].defeats.indexOf(AIChoice) > -1) {
      const result = gameResultChoices[2];
      const rule = getGameResultRuleText(gamerChoice, AIChoice);
      result.rule = rule;
      return result;
    } else {
      const result = gameResultChoices[1];
      const rule = getGameResultRuleText(AIChoice, gamerChoice);
      result.rule = rule;
      return result;
    }
  };
  return processMove(gamerChoice, AIChoice);
};

export const calculateGameScore = (gamerScore, gameResult) => {
  switch (gameResult.value) {
    case "win":
      return gamerScore + 1;

    case "lose":
      if (gamerScore > 0) {
        return gamerScore;
      } else {
        return gamerScore;
      }

    case "draw":
      return gamerScore;

    default:
      return gamerScore;
  }
};

const getGameResultRuleText = (victorChoice, loserChoice) => {
  const rules = {
    rock: {
      stick: "Rock crushes stick",
      scissor: "Rock crushes scissors",
    },
    paper: {
      ring: "Paper covers ring",
      rock: "Paper covers rock",
    },
    scissor: {
      stick: "Scissors cuts stick",
      paper: "Scissors cuts paper",
    },
    stick: {
      ring: "Stick spins around itself ring",
      paper: "Stick perforates paper",
    },
    ring: {
      scissor: "Ring breaks scissors",
      rock: "Ring harder than rock",
    },
  };
  return rules[victorChoice][loserChoice];
};
