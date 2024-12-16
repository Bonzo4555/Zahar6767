// Функція для зміни кольору фону
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F5A623'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Додаємо обробник події на кнопку
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
