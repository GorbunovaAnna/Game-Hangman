function startGame() {
  location.reload();
}

const arrWords = [
  "школа",
  "поезд",
  "яблоко",
  "пингвин",
  "океан",
  "метеорит",
  "праздник",
  "цветок",
  "солнце",
  "зоопарк",
];

function generatorNum() {
  let num = Math.floor(Math.random() * arrWords.length);
  return num;
}

function generatorWord(arr, randNum) {
  return arr[randNum];
}

const word = generatorWord(arrWords, generatorNum());

function renderLetters(word) {
  const wordArr = [...word];
  console.log(word);
  const text = document.getElementsByClassName("word-wrap")[0];

  wordArr.forEach((item) => {
    const elem = document.createElement("div");
    elem.textContent = `${item}`;
    elem.classList.add("letter");
    text.append(elem);
  });
}

renderLetters(word);

function chekLatter(letter) {
  const nodes = [...document.getElementsByClassName("letter")];
  let userEror = true;
  console.log(nodes);
  nodes.forEach((item) => {
    if (letter === item.textContent) {
      item.classList.add("black-letter");
      userEror = false;
    }
  });
  if (userEror) {
    let numb = counter();
    changePicture(numb);
    theEnd(numb);
    console.log(numb);
  }
  theWins(nodes);
}

function theEnd(numb) {
  if (numb === 2) {
    setTimeout(() => {
      let massage = confirm("Вы проиграли! Хотите начать заново?");
      if (massage === false) {
        const input = document.getElementsByTagName("input")[0];
        console.log(input);
        input.disabled = true;
        const button = document.querySelector("button");
        button.disabled = true;
      } else {
        startGame();
      }
    }, 200);
  }
}

function theWins(nodes) {
  console.log(nodes);
  const havingClass = nodes.every((item) =>
    item.classList.contains("black-letter")
  );
  console.log(havingClass);
  if (havingClass) {
    setTimeout(() => {
      let massage = confirm("Вы выиграли! Хотите начать заново?");
      if (massage === false) {
        const input = document.getElementsByTagName("input")[0];
        console.log(input);
        input.disabled = true;
        const button = document.querySelector("button");
        button.disabled = true;
      } else {
        startGame();
      }
    }, 200);
  }
}

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();

function getLetter() {
  const butt = document.getElementsByTagName("button")[0];
  butt.addEventListener('click', getUserLetter); 
}
getLetter();

function getUserLetter () {
    const input = document.getElementsByTagName("input")[0];
    let val = input.value;
    console.log(val);
    chekLatter(val);
    input.value = "";
    input.focus()
}

function changePicture(numb) {
  const arrImg = ["./img/2.png", "./img/3.png", "./img/4.png"];
  let img = document.getElementsByClassName("img")[0];
  img.src = arrImg[numb];
}
