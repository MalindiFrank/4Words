(async function () {
  
  let index = 0;
  const bgColors = await getColors();
  const words = await getWords();
  const hammertime = await new Hammer(document.querySelector("body"));

  let el = {
    loader: document.querySelector(".loader"),
    wordCount: document.querySelector(".word-count"),
    randomIndex: Math.floor(Math.random() * bgColors.length),
  }

  async function getColors() {
    try {
      const response = await fetch("https://fourapi.onrender.com/colors")
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log("Error fetching bg colors:", error);
      htmlTag.loader.textContent =
        "Site can't be reached, check the connection and reload.";
    }
  }

  async function getWords() {
    try {
      const response = await fetch("https://fourapi.onrender.com/words/random/4")
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log("Error fetching 4words:", error)
    }
  }

  function setWord(word) {
    el.loader.style.display = "none";
    document.querySelector(".word").textContent = word.name;
    document.querySelector(".figure").textContent = `(${word.figure})`;
    document.querySelector(".definition").textContent = word.definition;
  };

  function setRandomBg(arr) {
    document.body.style.backgroundColor = arr[el.randomIndex].background;
    document.body.style.color = arr[el.randomIndex].color;
  };

  hammertime.on("doubletap", () => setRandomBg(bgColors));

  hammertime.on("swiperight", function () {
    if (index == 0) index = words.length - 1; else index--;
    setWord(words[index]);
    el.wordCount.textContent = `${index + 1} of 4`;
  });

  hammertime.on("swipeleft", function () {
    if (index >= 3) index = 0; else index++;
    setWord(words[index]);
    el.wordCount.textContent = `${index + 1} of 4`;
  });

  document.addEventListener("DOMContentLoaded", () => {
    setWord(words[index]);
    setRandomBg(bgColors);
  });

})();