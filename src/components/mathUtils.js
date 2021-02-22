function randomIntFromInterval(min, max) {
  return Math.floor((Math.random() % max) * (max - min + 1) + min);
}

export const getHouseChoice = () => {
  const randomNumber = randomIntFromInterval(1, 3);
  const choices = ["paper", "scissor", "rock"];
  return choices[randomNumber - 1];
};

export const getGameResult = (userChoice, houseChoice) => {
  const gameResultChoices = [
    {
      text: "YOU TIED",
      value: "tie",
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
  const processMove = function (userChoice, houseChoice) {
    if (userChoice === houseChoice) {
      return gameResultChoices[0];
    } else if (choices[userChoice].defeats.indexOf(houseChoice) > -1) {
      const result = gameResultChoices[2];
      const rule = getGameResultRuleText(userChoice, houseChoice);
      result.rule = rule;
      return result;
    } else {
      const result = gameResultChoices[1];
      const rule = getGameResultRuleText(houseChoice, userChoice);
      result.rule = rule;
      return result;
    }
  };
  return processMove(userChoice, houseChoice);
};

export const calculateGameScore = (userScore, gameResult) => {
  switch (gameResult.value) {
    case "win":
      return userScore + 1;

    case "lose":
      if (userScore > 0) {
        return userScore;
      } else {
        return userScore;
      }

    case "tie":
      return userScore;

    default:
      return userScore;
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
