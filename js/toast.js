/* =====================================================================
   TOAST  –  brief notification shown at the bottom of the screen
   ===================================================================== */

let toastTimer = null;

function showToast(msg, color = '#22c55e') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = color;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}
