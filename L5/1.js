const board = document.querySelector('.board');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let i = 1;
while (i < 72) {
    j = document.createElement('div');
    if (i % 2 === 1) {
        board.append(j);
        j.classList.add('white');
        if (i / 9 === 1 || i / 9 === 3 || i / 9 === 5 || i / 9 === 7) {
            j.classList.replace('white', 'black');
            i++;
        }
    }
    else {
        board.append(j);
        j.classList.add('black');
        if (i % 9 === 0) {
            j.classList.replace('black', 'white');
            i++;
        }
    }
    i++;
}
i = 0;
while (i < 20) {
    j = document.createElement('div');
    horizontal.append(j);
    j.classList.add('sym');
    if (i === 0 || i === 10) {
        i++;
        continue;
    }
    else if (i < 9) {
        j.textContent = letters[i - 1];
    }
    else {
        j.textContent = letters[i - 11];
    }
    i++;
}
i = 0;
while (i < 20) {
    j = document.createElement('div');
    vertical.append(j);
    j.classList.add('sym');
    if (i === 0 || i === 10) {
        i++;
        continue;
    }
    else if (i < 9) {
        j.textContent = numbers[i - 1];
    }
    else {
        j.textContent = numbers[i - 11];
    }
    i++;
}
