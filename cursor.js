document.addEventListener('DOMContentLoaded', () => {
  const magicCursor = document.getElementById('magic-cursor');

  // Follow the mouse
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    magicCursor.style.left = `${x}px`;
    magicCursor.style.top = `${y}px`;
  });

  // Optional: subtle “pop” on click
  document.addEventListener('mousedown', () => {
    magicCursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });

  document.addEventListener('mouseup', () => {
    magicCursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});