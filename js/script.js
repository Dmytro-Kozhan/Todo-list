const addTask = document.querySelector('.tasks__add')

addTask.addEventListener('keyup', e => {
	if(e.key === 'Enter') {
		// Створення контейнера
		const div = document.createElement('div')
		div.classList.add('task')
		addTask.after(div)

		// Створення чекбоксу
		const label = document.createElement('label')
		label.classList.add('checkbox__label')

		const fakeCheckbox = document.createElement('span')
		fakeCheckbox.classList.add('fake')

		// Подія на чекбоксі
		fakeCheckbox.addEventListener('click', () => {
			text.classList.toggle('done')
		})
		
		const checkbox = document.createElement('input')
		checkbox.type = 'checkbox'
		checkbox.classList.add('checkbox')

		div.prepend(label)
		label.append(checkbox)
		label.append(fakeCheckbox)

		// Опис завдання
		const text = document.createElement('span')
		text.innerHTML = addTask.value
		text.classList.add('text')
		addTask.value = ''
		label.after(text)

		// Створення хрестика
		const button = document.createElement('img')
		button.classList.add('tasks__button')
		button.src = '../img/2.png'
		div.append(button)

		// Подія на хрестику
		button.addEventListener('click', () => {
			div.remove()
		})

		// Перейменування задачі
		div.addEventListener('dblclick', e => {
			const input = document.createElement('input')
			input.value = text.textContent
			input.classList.add('renaming')
			text.innerHTML = ''
			text.append(input)

			input.addEventListener('keyup', e => {
				if(e.key === 'Enter') {
					text.innerHTML = input.value
					input.remove()
				}
			})
		})
	}
})