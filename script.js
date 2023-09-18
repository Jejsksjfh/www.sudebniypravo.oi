// Функция для открытия раздела в новом окне
function openSectionInNewWindow(event) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  var sectionId = this.getAttribute('href').substring(1); // Получаем id раздела
  var sectionText = document.getElementById(sectionId).innerHTML; // Получаем текст раздела
  var newWindow = window.open('', '_blank'); // Открываем новое окно
  newWindow.document.write('<html><head><title>' + sectionId + '</title></head><body>' + sectionText + '</body></html>'); // Вставляем текст раздела в новое окно
  newWindow.document.close(); // Закрываем запись в новом окне
}

// Назначаем обработчики событий для каждой ссылки
aboutLink.addEventListener('click', openSectionInNewWindow);
courtsLink.addEventListener('click', openSectionInNewWindow);
processLink.addEventListener('click', openSectionInNewWindow);
problemsLink.addEventListener('click', openSectionInNewWindow);
reformsLink.addEventListener('click', openSectionInNewWindow);

// Пример динамического поведения
document.getElementById("about").addEventListener("click", function() {
    alert("Вы нажали на раздел 'О проекте'!");
});

// Пример плавной прокрутки при нажатии на ссылки в навигационном меню
document.querySelectorAll("nav ul li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        window.open(this.getAttribute("href"), '_blank'); // Открываем раздел в новом окне
    });
});

