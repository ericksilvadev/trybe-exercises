let piece = "peao";
let pieceLowerCase = piece.toLocaleLowerCase()

if (pieceLowerCase == "pawn" || pieceLowerCase == "peão" || pieceLowerCase == "peao"){
    console.log("pawn moves only 1 square foward and only takes 1 square on diagonal.")
} else if (pieceLowerCase == "rook" || pieceLowerCase == "torre"){
    console.log("rook can move backward, foward, left and right");
} else if (pieceLowerCase == "knight" || pieceLowerCase == "cavalo"){
    console.log("knight only moves in 'L' shape in any direction");
} else if (pieceLowerCase == "bishop" || pieceLowerCase == "bispo"){
    console.log("a bishop can move only on the diagonal");
} else if (pieceLowerCase == "queen" || pieceLowerCase == "dama"){
    console.log("the queen can move in any direction across the whole board");
} else if (pieceLowerCase == "king" || pieceLowerCase == "rei"){
    console.log("the king can move in any direction but only 1 square at once");
} else {
    console.log("peça inválida");
}