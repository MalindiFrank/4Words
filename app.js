(async function () {

  let index = 0;
  let bgColors = await getColors();
  let words = await getWords();

  let el = {
    loader: document.querySelector(".loader"),
    counter: document.querySelector(".word-count"),
    word: document.querySelector('.word'),
    figure: document.querySelector('.figure'),
    definition: document.querySelector('.definition'),
  };

  const hammertime = new Hammer(document.body);

  async function getColors() {
    try {
      const res = await fetch('https://fourapi.onrender.com/colors');
      const data = await res.json();
      return Array.isArray(data?.data) ? data.data : [];
    } catch (err) {
      console.error('Error fetching bg colors:', err);
      if (el.loader) el.loader.textContent = "Can't load colors — check connection.";
      return [];
    }
  }

  async function getWords() {
    try {
      const res = await fetch('https://fourapi.onrender.com/words/random/4');
      const data = await res.json();
      return Array.isArray(data?.data) ? data.data : [];
    } catch (err) {
      console.error('Error fetching words:', err);
      if (el.loader) el.loader.textContent = "Can't load words — check connection.";
      return [];
    }
  }

  function setWord(word) {
    if (!el.loader || !el.word || !el.figure || !el.definition) return;
    el.loader.style.display = 'none';
    el.word.textContent = word.name ?? '—';
    el.figure.textContent = word.figure ? `(${word.figure})` : '';
    el.definition.textContent = word.definition ?? '';
  }

  function setRandomBgColor(array) {
    if (!Array.isArray(array) || array.length === 0) return;
    let randomIndex = Math.floor(Math.random() * bgColors.length);
    document.body.style.backgroundColor = array[randomIndex].bg;
    document.body.style.color = array[randomIndex].color;
  }

  function handleSwipe(direction) {
    if (!Array.isArray(words) || words.length === 0) return;
    const last = words.length - 1;
    if (direction > 0) {
      index = index === 0 ? last : --index;
    } else {
      index = index === last ? 0 : ++index;
    }
    setWord(words[index]);
    if (el.counter) el.counter.textContent = `${index + 1} of ${words.length}`;
  }

  hammertime.on("doubletap", () => setRandomBgColor(bgColors));
  hammertime.on("swiperight", () => handleSwipe(1));
  hammertime.on("swipeleft", () => handleSwipe(-1));

  if (bgColors.length) setRandomBgColor(bgColors);
  setWord(words[index]);
})();