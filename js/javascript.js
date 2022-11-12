function getComputerChoice () {
    const choices = ["Rock", "Paper","Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
