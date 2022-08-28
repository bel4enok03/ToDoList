// создание констант:
const inputField = document.querySelector ('.inputField');
const btn = document.querySelector ('.btn');
const ToDoContainer = document.querySelector ('.toDoContainer');

// добавляем функции на кнопку:
btn.addEventListener ('click', () => {

    const item = document.createElement ('li');
    // добавили доступ к тому что пишет пользователь:
    item.innerText = inputField.value; 
    // добавляем стиль на новый элемент, создаем новый класс для CSS:
    item.classList.add('toDoAdd')
    // привязываем эту информацию к родителю UL:
    ToDoContainer.appendChild(item);
    // Опустошаем графу после добавления текста пользователя :
    inputField.value = '';

    // добавляем прослушку на графу дело:
    item.addEventListener ('click', () => {
        // Добавляем класс для CSS, что бы менялся цвет фона и зачеркивался текст (вычеркивам дела):
        item.classList.add('toDoCompleted')
    })
    // Удаляем дела с помощью двух кликов:
    item.addEventListener ('dblclick', () => {
        // удаляем ребенка:
        ToDoContainer.removeChild(item);
    })

})