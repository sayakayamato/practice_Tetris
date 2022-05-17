
//フィールドサイズ
const field_col = 10;
const field_row = 20;


const block_size = 30;           //ブロックひとつのサイズ

//キャンバスサイズ
const screen_w = block_size * field_col;
const screen_h = block_size * field_row;

const tetro_size = 4;            //テトロミノ（かたまり）のサイズ

let can = document.getElementById("can");
let con = can.getContext("2d");   //canvasに対して使うメソッド

can.width = screen_w;
can.height = screen_h;


//テトロミノ本体
let tetro = [
    [0, 0, 0, 0,],          //x方向とy方向それぞれ四つずつのブロックを二次元配列で
    [1, 1, 0, 0,],
    [0, 1, 1, 0,],
    [0, 0, 0, 0,]
];

//テトロミノの座標（いる場所）
let tetro_x = 0;
let tetro_y = 0;

drawTetro();

//テトロミノを表示する関数
function drawTetro(){
//実際にテトロブロックを描画していくコード

con.clearRect(0, 0, screen_w, screen_h);

for (let y=0; y<tetro_size ; y++ ){
    for (let x=0; x<tetro_size ; x++ ){
        if (tetro[y][x]){              //配列が1の時に描画
            let px = (tetro_x + x) * block_size;     
            let py = (tetro_y + y) * block_size;

            con.fillStyle = "red";
            con.fillRect(px, py, block_size, block_size);  //四角を描画
            con.strokeStyle = "black";
            con.strokeRect(px, py, block_size, block_size); 
        }
    }
}
}



document.onkeydown = function(e){
    switch(e.keyCode){
        case 37: //左
        tetro_x--;
            break;
        case 38: //上
        tetro_y--;
            break;
        case 39: //右
        tetro_x++;
            break;
        case 40: //下
        tetro_y++;
            break;
        case 32: //スペース
            break;
    }
    drawTetro();
}