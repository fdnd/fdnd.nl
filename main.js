const menuTrigger = document.querySelector('.js-trigger')
if (menuTrigger) {
  const header = document.querySelector('header')
  const headerLinks = [...header.querySelectorAll('a')]
  menuTrigger.addEventListener('click', () => {
    header.classList.toggle('is-active')
  })
  if (headerLinks) {
    headerLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('is-active')
      })
    })
  }
}