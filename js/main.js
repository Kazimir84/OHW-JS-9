// Все робити за допомоги js.
// - створити блок,
let divBlock = document.createElement('DIV');
//     - додати йому класи wrap, collapse, alpha, beta
divBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divBlock.style = `
        background-color: #00bcd4;
        color: orange;
        font-size: 40px;
`;

// - додати цей блок в body.
document.body.append(divBlock);

// - клонувати його повністю, та додати клон в body.
let divBlockClone = divBlock.cloneNode(true);
document.body.append(divBlockClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
let arrNav = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menuUl = document.body.getElementsByClassName('menu');

for (let i = 0; i < arrNav.length; i++) {
    let arrNavElement = arrNav[i];
    let menuLi = document.createElement('LI');
    menuLi.innerText = arrNavElement;
    menuUl[0].append(menuLi);
};

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let divCADA = document.createElement('DIV');
document.body.append(divCADA);
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let coursesAndDurationArrayElement = coursesAndDurationArray[i];
    let divCADAElement = document.createElement('DIV');
    divCADAElement.append(`Title: ${coursesAndDurationArrayElement.title}  Month: ${coursesAndDurationArrayElement.monthDuration}`);
    divCADA.append(divCADAElement);
};

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let divCADA2 = document.createElement('DIV');
document.body.append(divCADA2);
divCADA2.style = `
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: 1px solid blue;
`;

for (let i = 0; i < coursesAndDurationArray2.length; i++) {
    let coursesAndDurationArray2Element = coursesAndDurationArray2[i];
    let divClassItem = document.createElement('DIV');
    divClassItem.className = 'item'
    divClassItem.style = `
                border: 1px solid blue;
                margin: 5px 5px;
                width: 99%;
    `;
    divCADA2.append(divClassItem);

    let h1ClassHeading = document.createElement('H1');
    h1ClassHeading.className = 'heading';
    divClassItem.append(h1ClassHeading);
    h1ClassHeading.innerText = `Title: ${coursesAndDurationArray2Element.title}`;

    let pClassDescription = document.createElement('P');
    pClassDescription.className = 'description';
    divClassItem.append(pClassDescription);
    pClassDescription.innerText = `Month Duration: ${coursesAndDurationArray2Element.monthDuration}`;
};