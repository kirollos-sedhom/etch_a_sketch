let button = document.createElement("button");
button.addEventListener("click", startagain);
button.textContent = "choose size!";
document.body.appendChild(button);
var board = document.createElement("div");
board.className = "board";
document.body.appendChild(board);
// document.querySelector(".board").style.backgroundColor = "green";
document.querySelector(".board").style.width = "800px";
document.querySelector(".board").style.height = "800px";
document.querySelector(".board").style.margin = "auto";
board.style.display = "flex";
board.style.flexDirection = "column";
// board.style.flex = "1";

function startagain() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  let size = prompt("choose the size: 16 , 32 , 64");
  if (size > 64) {
    size = 64;
  }
  if (size < 16) {
    size = 16;
  }

  for (let x = 0; x < size; x++) {
    var adiv = document.createElement("div");
    adiv.className = "column";
    adiv.style.border = "solid 1px black";
    // adiv.style.margin = "10px";
    adiv.style.display = "flex";
    adiv.style.flexDirection = "row";

    adiv.style.flex = "1";

    document.querySelector(".board").appendChild(adiv);
    for (let i = 0; i < size; i++) {
      var pixel = document.createElement("div");
      pixel.className = "row";
      pixel.style.border = "solid 1px black";
      // pixel.style.margin = "10px";
      pixel.style.display = "flex";
      pixel.style.flexDirection = "column";

      pixel.style.flex = "1";

      adiv.appendChild(pixel);
    }
  }

  let apixel = document.querySelectorAll(".row");
  apixel.forEach((item) => {
    item.addEventListener("mouseover", function () {
      var colors = ["#ff0000", "#00ff00", "#0000ff"];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      item.style.backgroundColor = random_color;
    });
  });
}
