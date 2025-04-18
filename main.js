/*
  Generate banner with pure js
*/

const TOTAL_WORDS = 100;
const words = [];

// Generate 100 random uppercase dummy words
function getRandomWord(length = 3 + Math.floor(Math.random() * 5)) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Check if new position is spaced well from others
function isFarEnough(x, y, placed, minDistance = 50) {
  return !placed.some(p => {
    const dx = p.x - x;
    const dy = p.y - y;
    return Math.sqrt(dx * dx + dy * dy) < minDistance;
  });
}

const placed = [];

for (let i = 0; i < TOTAL_WORDS; i++) {
  let x, y, attempts = 0;
  do {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    attempts++;
  } while (!isFarEnough(x, y, placed) && attempts < 100);

  placed.push({x, y});

  const span = document.createElement('span');
  span.className = 'word';
  span.textContent = getRandomWord().toUpperCase();
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  span.style.animationDelay = `${Math.random() * 5}s`;
  const banner = document.querySelector('.banner')
  banner.appendChild(span);
}

/*
  End Generate banner with pure js
*/
