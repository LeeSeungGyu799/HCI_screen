document.addEventListener("DOMContentLoaded", () => {
    const toggleThumbUp = (button) => {
        const thumbUpImg = button.querySelector('.thumb-up');
        if (thumbUpImg.src.includes('img/thumbUp.svg')) {
            thumbUpImg.src = 'img/thumbUp2.svg';
        } else {
            thumbUpImg.src = 'img/thumbUp.svg';
        }
    };

    const toggleThumbDown = (button) => {
        const thumbDownImg = button.querySelector('.thumb-down');
        if (thumbDownImg.src.includes('img/thumbDown.svg')) {
            thumbDownImg.src = 'img/thumbDown2.svg';
        } else {
            thumbDownImg.src = 'img/thumbDown.svg';
        }
    };

    document.querySelectorAll('.vote-up').forEach(button => {
        button.addEventListener('click', () => toggleThumbUp(button));
    });

    document.querySelectorAll('.vote-down').forEach(button => {
        button.addEventListener('click', () => toggleThumbDown(button));
    });
});