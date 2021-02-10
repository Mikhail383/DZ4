document.write('Задание 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.' + '</br>');

let array1 = [1, 2, 3, 4, 5];

for (let i = 0; i < array1.length; i++) {
    document.write(array1[i]);
}

document.write('</br>' + 'Задание 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.' + '</br>');

let array2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > -10 && array2[i] < -3)
    document.write(array2[i]);
}

document.write('</br>' + 'Задание 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.' + '</br>');

let array3_while = [],
    array3_for = [],
    array3_sum = 0,
    array3_begin = 23;

while (array3_begin <= 57) {
    array3_while.push(array3_begin);
    array3_begin += 1;

}

for (let i = 23; i <= 57; i++) array3_for[array3_for.length] = i;

for (let i = 0; i < array3_for.length; i++) array3_sum += array3_for[i];

document.write(`Через while: ${array3_while}.<br />`);
document.write(`Через for: ${array3_for}.<br />`);
document.write(`Сумма элементов: ${array3_sum}.<br />`);


document.write('</br>' + 'Задание 4.Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.' + '</br>');

let array4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < array4.length; i++) {
    if (array4[i][0] == '1' || array4[i][0] == '2' || array4[i][0] == '5') {
        document.write(array4[i]);
    }
}

document.write('</br>' + 'Задание 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.' +'</br>');

let array5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < array5.length; i++) {
    if (array5[i] == 'СБ' || array5[i] == 'ВС') {
        document.write(` <span class="bold">${array5[i]}</span>`);
    }
    else {
        document.write(' ' + array5[i]);
    }
}

document.write('</br>' + 'Задание 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.' + '</br>');

let array6 = [1, 2, 5, 6, 7, 2];

document.write('Массив:' + array6 + '</br>');

array6[array6.length] = 'New element';

document.write('Новый массив:' + array6 + '</br>' );

document.write('Последний элемент:' + array6[array6.length - 1] + '.');

document.write('</br>' + 'Задание 7.Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.' + '</br>');

let array7 = [];

while (true) {
    let newNumber = prompt('Введите число для добавления в массив'); 
    if (newNumber == '') break;
    newNumber = newNumber.trim();
    if (isNaN(Number(newNumber)) || newNumber == '') {
        alert('Неправильно!');
}
    else {
        array7.push(Number(newNumber));
    }
}
    document.write('Массив:' + array7 + '</br>');

    array7.sort(function(a,b) {
        return a - b;
    })

    document.write('Отсартированный массив:' + array7 + '.');

    document.write('</br>' + 'Задание 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.' + '</br>')

    let array8 = [12, false, 'Текст', 4, 2, -5, 0];

    let iteration8 = 1;

    document.write('Обратная запись через while:');

    while (array8.length - iteration8 >= 0) {
        document.write(' ' + array8[array8.length - iteration8] + ',');
        iteration8 += 1;

    }
    document.write('</br> Обратная запись через reverse:' + array8.reverse());

document.write('</br>' + 'Задание 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].' + '</br>');

    let array9 = [5, 9, 21, , , 9, 78, , , , 6],
        num9 = 0;
        for (let i = 0; i < array9.length; i++) {
            if (array9[i] == undefined) num9 += 1;
        }

document.write('Кол-во пустых значений:' + num9);


document.write('</br>' + 'Задание 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].' + '</br>');


let array10_1 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    array10_2 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    start,
    finish,
    sum = 0;

    document.write('Сумма элементов между двумя нулями в массиве 1: ')

    start = array10_1.indexOf(0);
    finish = array10_1.lastIndexOf(0);

    if (start == finish) {
        document.write('0.' + '</br>')
    }
    else {
        for (let i = start + 1; i < finish; i++) sum += array10_1[i];
    }

    document.write(sum + '</br>');

    sum = 0

    document.write('Сумма элементов между двумя нулями в массиве 2: ')

    start = array10_2.indexOf(0);
    finish = array10_2.lastIndexOf(0);

    if (start == finish) {
        document.write('0.' + '</br>')
    }
    else {
        for (let i = start + 1; i < finish; i++) sum += array10_2[i];
    }

    document.write(sum + '</br>');


document.write('</br>' + 'Задание 11. Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь.' + '</br>');    

let h = prompt('Высота треугольника');

if (isNaN(h) || h == ' ' || h <= 1) {
    alert('Неправильно');
} else {
    let space_h,
        cap_h;

        j = 0;

    while (j < h) {
        space_h =' ';
        cap_h = ' ';

        for (i = 0; i < h - j; i++){
            space_h += ' ';
        }
        for (i = 0; i < (2 * j + 1); i++) {
            cap_h += '^';
        }

        document.write(space_h + cap_h);
        j++;
    }
}