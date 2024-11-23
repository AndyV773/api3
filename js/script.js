document.getElementById("spinButton").addEventListener("click", spin);

function spin() {
  const reels = document.querySelectorAll(".symbols");

  reels.forEach((reel, index) => {
    // Randomize spin duration and delay
    const duration = Math.random() * 1 + 1; // 1 + 1 Between 1s and 2s
    const delay = index * 0.4; // 0.2 Staggered start for each reel

    const symbols = reel.children.length;
    const randomPosition = Math.floor(Math.random() * symbols);
    const offset = randomPosition * 100; // Each symbol is 100px tall

    reel.style.transition = `none`; // Reset previous transition
    reel.style.transform = `translateY(-${1800}px)`; // symbols * 100 // Move reel far upward

    setTimeout(() => {
      reel.style.transition = `transform ${1}s cubic-bezier(0.17, 0.67, 0.83, 0.67)`; // duration
      reel.style.transform = `translateY(-${300}px)`; // ofset // Move reel down to target
    }, delay * 1000);
  });
}
