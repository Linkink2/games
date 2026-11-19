let computer = "rock";
let playerOne = "paper";
let result;



if (playerOne === computer) {
    result = "tie game!"
} else if (playerOne === "rock") {
    if (computer === "paper") {
        result = "computer wins"
    } else {
        result = "playerOne wins"
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        result = "computer wins"
    } else {
        result = "playerOne wins"
    }
} else {
    if (computer === "rock") {
        result = "computer wins"
    } else {
        result = "playerOne wins"
    }
}
console.log(result)