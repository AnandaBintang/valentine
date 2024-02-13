const phrases = [
  "Nda maw 🙉",
  "Beneran, dapet lc danang loh?",
  "Benerannn 😕",
  "Ih yang benerr 😢",
  "+ dapet lc aventurine dehh 💐",
  "plis mau plisss 🥰",
  "kalo gamaw ilang nih tombolnya 💓",
  "Beneran ilang nih 🥺",
  "IHH PLISS AYOOOO MWw 🫤",
  "kesempatan terakhir sebelum menghilangggg... 😭",
  "aku akan menghilangg................... 💔",
];

let noCount = 0;
let yesPressed = false;
let yesButtonSize = 16;

function handleYesClick() {
  yesPressed = true;
  render();
}

function handleNoClick() {
  noCount += 1;
  // increase the button size until full width screen
  yesButtonSize = Math.min(100, yesButtonSize + 6);
  render();
}

function getNoButtonText() {
  return phrases[Math.min(noCount, phrases.length - 1)];
}

function render() {
  const root = document.getElementById("root");

  if (yesPressed) {
    root.innerHTML = `
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
                    <div class='text'>Yayyy !!!</div>
                    <a href="./card.html" class='nextButton'>
                        Eh, ada apa lagi nih? 🤔
                    </a>
                `;
  } else {
    if (noCount >= phrases.length) {
      root.innerHTML = `
                      <img class='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
                      <div class='text'>Will you be my valentine🌹?</div>
                      <div class='both-Button'>
                          <button class='yesButton' style="font-size: ${yesButtonSize}px" onclick="handleYesClick()">
                              Ofkors💓
                          </button>
                      </div>
                  `;
    } else {
      root.innerHTML = `
                      <img class='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
                      <div class='text'>Will you be my valentine🌹?</div>
                      <div class='both-Button'>
                          <button class='yesButton' style="font-size: ${yesButtonSize}px" onclick="handleYesClick()">
                              Ofkors💓
                          </button>
                          <button class='NoButton' onclick="handleNoClick()">
                              ${getNoButtonText()}
                          </button>
                      </div>
                  `;
    }
  }
}

render();
