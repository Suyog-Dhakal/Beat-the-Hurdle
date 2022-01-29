var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  // to jump repeatedly when clicked
  setTimeout(function () {
    character.classList.remove("animate");
  }, 800);
}

var checkLost = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 40 && blockLeft > 0 && characterTop >= 260) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You lose!!!  (Reload page to start again)");
  }
}, 10);
