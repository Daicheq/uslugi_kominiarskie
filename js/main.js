const nav = document.querySelector('.navmobile')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.navmobile__item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('navmobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('navmobile--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
