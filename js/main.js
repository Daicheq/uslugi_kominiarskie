const nav = document.querySelector('.navmobile')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.navmobile__item')

const handleNav = () => {
	nav.classList.toggle('navmobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('navmobile--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
