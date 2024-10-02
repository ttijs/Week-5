function setup() {
    createCanvas(800, 600);

    // let blokjes = [];
    // for (let i = 0; i < 5; i++) {
    //     blokjes[i] = [];
    //     for (let j = 0; j < 5; j++) {
    //         blokjes[i][j] = "(" + i + "," + j + ")";
    //     }
    // }
    // console.log(blokjes);
}

function draw() {
    background(220);

     let colors = ["red", "blue", "yellow", "green"];

     let arrMatrixColors = [
         [0, 1, 2, 0],
         [1, 2, 3, 1],
         [3, 2, 0, 0],
         [3, 2, 0, 0],
     ];

    for (let y = 0; y < arrMatrixColors.length; y++) {
        for (let x = 0; x <  arrMatrixColors[y].length; x++ ) {
            
            fill(colors[arrMatrixColors[y][x]]);

            // if (arrMatrixColors[i][j] == 0) {
            //     fill("red")
            // } else if (arrMatrixColors[i][j] == 1) {
            //     fill("blue")
            // } else if (arrMatrixColors[i][j] == 2) {
            //     fill("yellow")
            // } else {
            //     fill("green")
            // }
            rect(50 + (50 * x), 50 + (50 * y), 50, 50 )
        }
    }

}
