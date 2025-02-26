// Получаем таблицу по ID
const tableElement = document.getElementById("tabledel");

// Переменная для хранения ранее выделенной ячейки
let previouslySelectedCell = null;

// Добавляем обработчик клика по таблице
tableElement.onclick = function(event) {
    // Определяем, кликнули ли по ячейке (td)
    let clickedCell = event.target.closest("td");

    // Если клик не по ячейке, выходим из функции
    if (!clickedCell) return;

    // Проверяем, что ячейка действительно принадлежит таблице
    if (!tableElement.contains(clickedCell)) return;

    // Выделяем ячейку
    highlightCell(clickedCell);
};

// Функция для выделения ячейки
function highlightCell(cell) {
    // Сбрасываем стиль у ранее выделенной ячейки
    if (previouslySelectedCell) {
        previouslySelectedCell.style.backgroundColor = "";
        previouslySelectedCell.style.color = "";
    }

    // Задаем новый стиль для выбранной ячейки
    cell.style.backgroundColor = "white";
    cell.style.color = "black";

    // Обновляем ссылку на последнюю выделенную ячейку
    previouslySelectedCell = cell;
}
