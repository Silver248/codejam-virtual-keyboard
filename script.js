const keyboardContainer = document.createElement('div');
keyboardContainer.classList = 'keyboard__container';

document.body.insertAdjacentElement('afterBegin', keyboardContainer);
let lang = localStorage.getItem('lang');

const keyboardObject = {
    eng: [
        [
            ['`', '~'],
            ['1', '!'],
            ['2', '@'],
            ['3', '#'],
            ['4', '$'],
            ['5', '%'],
            ['6', '^'],
            ['7', '&'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            ['backspace', 'backspace']
        ],
        [
            ['Tab', 'Tab'],
            ['q', 'Q'],
            ['w', 'W'],
            ['e', 'E'],
            ['r', 'R'],
            ['t', 'T'],
            ['y', 'Y'],
            ['u', 'U'],
            ['i', 'I'],
            ['o', 'O'],
            ['p', 'P'],
            ['[', '{'],
            [']', '}'],
            ['\\', '|'],
            ['del', 'del']
        ],
        [
            ['capslock', 'capslock'],
            ['a', 'A'],
            ['s', 'S'],
            ['d', 'D'],
            ['f', 'F'],
            ['g', 'G'],
            ['h', 'H'],
            ['j', 'J'],
            ['k', 'K'],
            ['l', 'L'],
            [';', ':'],
            ['\'', '"'],
            ['enter ↵', 'enter ↵']
        ],
        [
            ['shift   ⇧', 'shift   ⇧'],
            ['z', 'Z'],
            ['x', 'X'],
            ['c', 'C'],
            ['v', 'V'],
            ['b', 'B'],
            ['n', 'N'],
            ['m', 'M'],
            [',', '<'],
            ['.', '>'],
            ['/', '?'],
            ['shift   ⇧', 'shift   ⇧'],
            ['▲', '▲']
        ],
        [
            ['ctrl', 'ctrl'],
            ['alt', 'alt'],
            ['', ''],
            ['alt', 'alt'],
            ['◄', '◄'],
            ['▼', '▼'],
            ['►', '►'],
            ['ctrl', 'ctrl']
        ]
    ],
    rus: [
        [
            ['ё', 'Ё'],
            ['1', '!'],
            ['2', '"'],
            ['3', '№'],
            ['4', ';'],
            ['5', '%'],
            ['6', ':'],
            ['7', '?'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            ['backspace', 'backspace']
        ],
        [
            ['Tab', 'Tab'],
            ['й', 'Й'],
            ['ц', 'Ц'],
            ['у', 'У'],
            ['к', 'К'],
            ['е', 'Е'],
            ['н', 'Н'],
            ['г', 'Г'],
            ['ш', 'Ш'],
            ['щ', 'Щ'],
            ['з', 'З'],
            ['х', 'Х'],
            ['ъ', 'Ъ'],
            [' \ ', '/'],
            ['del', 'del']
        ],
        [
            ['capslock', 'capslock'],
            ['ф', 'Ф'],
            ['ы', 'Ы'],
            ['в', 'В'],
            ['а', 'А'],
            ['п', 'П'],
            ['р', 'Р'],
            ['о', 'О'],
            ['л', 'Л'],
            ['д', 'Д'],
            ['ж', 'Ж'],
            ['э', 'Э'],
            ['enter ↵', 'enter ↵']
        ],
        [
            ['shift   ⇧', 'shift   ⇧'],
            ['я', 'Я'],
            ['ч', 'Ч'],
            ['с', 'С'],
            ['м', 'М'],
            ['и', 'И'],
            ['т', 'Т'],
            ['ь', 'Ь'],
            ['б', 'Б'],
            ['ю', 'Ю'],
            ['.', ','],
            ['shift   ⇧', 'shift   ⇧'],
            ['▲', '▲']
        ],
        [
            ['ctrl', 'ctrl'],
            ['alt', 'alt'],
            ['', ''],
            ['alt', 'alt'],
            ['◄', '◄'],
            ['▼', '▼'],
            ['►', '►'],
            ['ctrl', 'ctrl']
        ]
    ],
    keysName: [
        ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'BackLash', 'Delete'],
        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
        ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
    ],

};
const getKeys = (keys, index) => keys.reduce((acc, key, idx) => acc + `
<div class="key ${key}">
<span class="rus${lang === 'rus' ? '' : ' hidden'}">
    <span class="keyDown">${keyboardObject.rus[index][idx][0]}</span>
    <span class="keyUp hidden">${keyboardObject.rus[index][idx][1]}</span>
</span>
<span class="eng${lang !== 'rus' ? '' : ' hidden'}">
    <span class="keyDown">${keyboardObject.eng[index][idx][0]}</span>
    <span class="keyUp hidden">${keyboardObject.eng[index][idx][1]}</span>
</span>
</div>`, '');

const getKeyboardRow = (keyboardRow) => keyboardRow.reduce((acc, row, index) => acc + `<div class="row">${getKeys(row,index)}</div>`, '');
const keyboardTemplate = `<textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
<div class="keyboard" id = "keyboard">${getKeyboardRow(keyboardObject.keysName)}</div>`;

keyboardContainer.innerHTML = keyboardTemplate;


const textValue = document.getElementById('textarea');
const keyboard = document.querySelector('#keyboard');
const englishLangauge = document.querySelectorAll('.eng > span');
const rusLanguage = document.querySelectorAll('.rus > span');
const language = document.querySelectorAll('.key > span');
const shift = document.querySelector('.ShiftLeft')
const capslock = document.querySelector('.CapsLock');
const arrayKey = ['Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'Delete', 'Enter', 'ShiftRight', 'ArrowUp', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight', 'AltLeft'];

function CapsLock(event) {
    englishLanguage.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
    rusLangauge.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
};

function shiftEvent(event) {
    englishLanguage.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
    rusLangauge.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
};

function shiftEventOff(event) {
    englishLanguage.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
    rusLanguage.forEach((el) => {
        el.className.includes('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
    });
};

function switchLanguage(event) {
    language.forEach((el) => {
        if(el.className.includes('hidden')) {
            el.classList.remove('hidden');
            localStorage.setItem('lang', el.className);
           } else {
                el.classList.add('hidden');
        };
    });
};



document.addEventListener('keydown', function (event) {
    event.preventDefault();
    const classNameKey = `.key.${event.code} > span`;
    keyboard.querySelectorAll('.row > .key').forEach((el) => {
        if (el.className.substring(4) === event.code) {
            el.classList.add('active');
        }
    });

    function keyInput() {
        document.querySelectorAll(classNameKey).forEach((el) => {
            if (!el.className.includes('hidden') && !arrayKey.includes(event.code)) {
                textValue.value += el.innerText;
            };
        });
    };

    function eventKey() {
        switch (event.code) {
            case 'Enter':
                textValue.value += '\n';
                break;
            case 'Space':
                textValue.value += ' ';
                break;
            case 'Tab':
                textValue.value += '   ';
                break;
            case 'Backspace':
                textValue.value = textValue.value.substring(0, textValue.value.length - 1);
                break;
            case 'Delete':
                cursorStart = textValue.selectionStart;
                if (textValue.selectionStart === textValue.selectionEnd) {
                    textValue.value = textValue.value.slice(0, textValue.selectionStart) + textValue.value.slice(textValue.selectionEnd + 1);
                } else {
                    textValue.value = textValue.value.slice(0, textValue.selectionStart) + textValue.value.slice(textValue.selectionEnd);
                }
                textValue.selectionStart = cursorStart;
                textValue.selectionEnd = cursorStart;
                break;
        }
    };

    keyInput();
    if (event.code === 'CapsLock' && !event.repeat) {
        CapsLock(event);
        if (event.getModifierState('CapsLock')) {
            capslock.classList.add('active');
        } else {
            capslock.classList.remove('active');
        }
    };

    if (event.code === 'ShiftLeft' && event.shiftKey && !event.repeat) {
        shiftEvent(event)
    };
    if (event.shiftKey && event.key === 'ControlLeft' || event.ctrlKey && event.key === 'ShiftLeft') {
        switchLanguage(event)
    };
    eventKey();

});


document.addEventListener('keyup', function (event) {
    keyboard.querySelectorAll('.row > .key').forEach((el) => {
        if (el.className.includes(event.code) && event.code !== 'CapsLock') {
            el.classList.remove('active');
        }
    });

    if (event.code === 'ShiftLeft') {
        shiftEventOff(event)
    };
});


keyboard.addEventListener('mousedown', function (event) {
    event.stopPropagation();
   
    switch (event.target.innerText) {
        case 'enter':
            textValue.value += '\n';
            break;
        case '':
            textValue.value += ' ';
            break;
        case 'Tab':
            textValue.value += '   ';
            break;
        case 'backspace':
            textValue.value = textValue.value.substring(0, textValue.value.length - 1);
            break;
        case 'capslock':
            capslock.classList.toggle('active')
            CapsLock(event);
            break;
        case 'shift':
            shiftEvent(event);
            break;
        case 'del':
            cursorStart = textValue.selectionStart;
            if (textValue.selectionStart === textValue.selectionEnd) {
                textValue.value = textValue.value.slice(0, textValue.selectionStart) + textValue.value.slice(textValue.selectionEnd + 1);
            } else {
                textValue.value = textValue.value.slice(0, textValue.selectionStart) + textValue.value.slice(textValue.selectionEnd);
            }
            textValue.selectionStart = cursorStart;
            textValue.selectionEnd = cursorStart;
            fff
            break;
        default:
            textValue.value += event.target.innerText;
            break;
    };
    textarea.focus();
});

keyboard.addEventListener('mouseup', function (event) {

    switch (event.target.innerText) {
        case 'shift':
            shiftEventOff(event);
            break;
    }
})