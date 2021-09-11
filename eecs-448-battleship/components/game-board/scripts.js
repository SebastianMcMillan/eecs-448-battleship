let board;
let contents;
let model = {
  gameboard1: 
  [[false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false]
  ],
  gameboard2: 
  [[false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false]
  ],
  ship: true,
  turnStatus: 1,
};

function nextPlayer() {
if (model.turnStatus == 1) {
  model.turnStatus = 2;
} else if (model.turnStatus == 2) {
  model.turnStatus = 1;
}
}

function tick() {
  window.requestAnimationFrame(display);
}

function display() {
  contents.clearRect(0, 0, board.width, board.height);

for (i = 0; i < 8; i++) //draws horizontal lines 
{
  contents.beginPath();
  contents.moveTo(0, 100 + i * 100);
  contents.lineTo(1000, 100 + i * 100);
  contents.strokeStyle = "#808080"; //grey
  contents.lineWidth = 3;
  contents.stroke();
}
for (i = 0; i < 9; i++) //draws vertical lines
{
  contents.beginPath();
  contents.moveTo(100 + i * 100, 0);
  contents.lineTo(100 + i * 100, 900);
  contents.strokeStyle = "#808080"; //grey
  contents.lineWidth = 3;
  contents.stroke();
}
tick();
}

document.addEventListener("DOMContentLoaded", () => {
  board = document.querySelector("#gameboard");
  contents = board.getcontents("2d");
  console.log(contents);
  display();
});

defineView({
  // The name of this view
  name: 'game-board',
  // Later, to render this view, call renderView(name, container, options)
  render(
    // Container would be populated with elements from index.html
    container,
    // Any options that were passed to renderView
    {
      /*
       * A 9x10 array of booleans (if cell is true, then there is ship at that
       * cell)
       *
       */
      board,
    }
  ) {
    /* TODO: Render the 9x10 grid */
    /*
     * TODO: once game is finished, call:
     *   renderView('game-over', container, { win: true })
     *   (win is true, if player won, else false)
     */
  },
  // Cleanup
  remove() {
    /* TODO: Remove click event listeners (event.removeEventListener) */
  },
});
