function ChessBoard(width, height) {
  console.log('Task 1: ChessBoard');

  var temp;
  var board = '';
  var boardLen = width*height;
  var even = ' ';
  var odd = '#';

  while(boardLen--) {
    if (boardLen % 2) {
      board += even;
    } else {
      board += odd;
    }

    if (!(boardLen % width)) {
      board += '\n';
      temp = even;
      even = odd;
      odd = temp;
    }
  }

 return board;
}

console.log(ChessBoard(8,8));