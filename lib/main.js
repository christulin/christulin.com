export function setup() {
  window.addEventListener('load', () => {
    const button = document.getElementById('sideBarToggle');
    const sideBar = document.getElementById('sideBar');
    button.addEventListener('click', () => {
      if (sideBar.classList.contains('show')) {
        sideBar.classList.remove('show');
      } else {
        sideBar.classList.add('show');
      }
    });
  });
}

export function cleanup() {
  // window.removeEventListener('load');
}