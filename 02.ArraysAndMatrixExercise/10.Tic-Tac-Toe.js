function solve(arr){

    /**
     * 
     * @param {*} field 
     * @param {*} coordinate 
     * @param {*} boolean 
     * @return {boolean}
     */

    // Проверяме за печалба по редове
    function hasWin(field, coordinates){
        const x = parseInt(coordinates[0]);
        const y = parseInt(coordinates[1]);
        //const[x , y] = coordinates;
        if((field[0][y] == field[1][y] == field[2][y]) && field[0][y] != false){
            return true;
        } else if((field[x][0] == field[x][1] == field[x][2]) && field[x][0] != false){
            return true;
        } else if((field[0][0] == field[1][1] == field[2][2] && field[0][0] != false) 
        || (field[0][2] == field[1][1] == field[2][0]) && field[0][2] != false){
            return true;
        } return false;
    }

    function printResult(field){
        field.forEach((el) => {
            console.log(el.join('\t'));
        })
    }

    let gameWon = false;
    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayerSign = "X";

    for(let i = 0; i < arr.length; i++){
        const [x , y] = arr[i].split(" ");
    
        if(playField[x][y]){
            console.log("This place is already taken. Please choose another!");
        } else {
            playField[x][y] = currentPlayerSign;
            if(hasWin(playField, [x,y])){
                gameWon = true;
                console.log(`Player ${currentPlayerSign} wins!`);
                printResult(playField);
                break;
                }
            currentPlayerSign = currentPlayerSign == "X" ? "O" : "X";
            printResult(playField);
        }
    }

    if(!gameWon){
        console.log("The game ended! Nobody wins :(");
    }
}

solve(["0 1",
        "0 0",
        "0 2", 
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"
]);