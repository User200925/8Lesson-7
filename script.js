var typed = new Typed('#animated-text', {
    strings: ['Text gradient'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 500,
});

var typed = new Typed('#animated2-text', {
    strings: ['Make your headlines stand out'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 3000,
});

setTimeout(() => {
    // Скрываем старые тексты
    document.getElementById('animated-text').style.display = 'none';
    document.getElementById('animated2-text').style.display = 'none';

    // Получаем контейнер
    let container = document.getElementById('container');

    // Очищаем контейнер, если там что-то есть
    container.innerHTML = '';

    // Создаем первый текст (newText1)
    let newText1 = document.createElement('div');
    newText1.textContent = 'Design is intelligence made visible';
    newText1.style.fontSize = '48px';
    newText1.style.fontWeight = '700';
    newText1.style.color = 'blue';
    newText1.classList.add('animate'); // Анимация

    // Создаем второй текст (newText2)
    let newText2 = document.createElement('div');
    newText2.textContent = 'Interaction design isn’t merely a matter of aesthetic choice; rather, it is based on an understanding of users and cognitive principles.';
    newText2.style.fontSize = '20px';
    newText2.style.fontWeight = '400';
    newText2.style.color = 'white';
    newText2.style.textAlign = 'center';
    newText2.style.maxWidth = '600px';
    newText2.classList.add('animate'); // Анимация

    // Добавляем новые тексты в контейнер
    container.appendChild(newText1);
    container.appendChild(newText2);

}, 7000); // Задержка 7 секунд
