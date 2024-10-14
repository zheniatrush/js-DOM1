Що таке DOM?
DOM — це програмний інтерфейс для веб-документів. Він представляє структуру документа HTML або XML як ієрархічне дерево, де кожен елемент документа є об'єктом, з яким можна взаємодіяти через JavaScript.

Структура DOM:
Вузли (Nodes): У DOM документ розглядається як дерево, яке складається з вузлів. Є кілька типів вузлів:
Елементні вузли (Element nodes): представляють HTML-теги (наприклад, <div>, <p>).
Текстові вузли (Text nodes): містять текстовий вміст елементів.
Коментарі (Comment nodes): представляють коментарі в коді.

Доступ до DOM:
Методи доступу:
document.getElementById(): отримує елемент за ID.
document.getElementsByClassName(): отримує всі елементи з певним класом.
document.querySelector(): отримує перший елемент, що відповідає CSS-селектору.
document.querySelectorAll(): отримує всі елементи, що відповідають CSS-селектору.

Методи додавання та маніпуляції елементами:

document.createElement(): створює новий елемент.

const newElement = document.createElement('p');
newElement.textContent = 'Новий елемент';
console.log(newElement); // <p>Новий елемент</p>

appendChild(): додає новий елемент як останню дитину до батьківського елемента.

<div id="container"></div>
const container = document.getElementById('container');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Доданий абзац';
container.appendChild(newParagraph);

removeChild(): видаляє дочірній елемент.
ПРИКЛАД

<ul id="list">
    <li>Елемент 1</li>
    <li>Елемент 2</li>
</ul>

const list = document.getElementById('list');
const itemToRemove = list.children[1];
list.removeChild(itemToRemove);
// <ul id="list">
//   <li>Елемент 1</li>
// </ul>
