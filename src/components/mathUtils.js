function randomIntFromInterval(min, max) {
  return Math.floor((Math.random() % max) * (max - min + 1) + min);
}

export const getAIChoice = () => {
  const randomNumber = randomIntFromInterval(1, 3);
  const choices = ["paper", "scissor", "rock"];
  return choices[randomNumber -1];
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
    rock: { name: "Rock", defeats: ["scissor"] },
    paper: { name: "Paper", defeats: ["rock"] },
    scissor: { name: "Scissor", defeats: ["paper"] },
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
      scissor: "Rock crushes scissors",
    },
    paper: {
      rock: "Paper covers rock",
    },
    scissor: {
      paper: "Scissors cuts paper",
    },
  };
  return rules[victorChoice][loserChoice];
};
