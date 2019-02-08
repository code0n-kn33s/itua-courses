/*
  Задание:
  1. При помощи методов изложеных в arrays.js , переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
  2. Самостоятельно изучить метод Array.sort. Отфильтровать массив ITEA_COURSES по алфавиту.
      + Бонусный бал. Вывести на страничку списком
  3. Реализация функции поиска по массиву ITEA_COURSES.
      + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.

*/

const ITEA_COURSES = ["C++", "JavaScript", "HTML/CSS", "Rubi", "Python", "Angular", "Abgular", "Broforse", "Vue", "Baracuda", "Node", "Aangular", "Doc"];

const numbers = [3, 2, 4, 5, 6, 9, 1, 4, 6, 2, 1]

class Sort {
    constructor(arr, type, direction) {
        this.oldArray = arr.map(i => i)
        this.arr = arr
        this.type = type
        this.direction = direction

        this.sortProp()
    }
    sortProp() {
        if (this.type === 'word') {
            this.direction ?
                this.arr.sort(this.compareWords) :
                this.arr.sort(this.compareWordsReverse)
        } else if (this.type === 'num'){
            this.direction ?
                this.arr.sort(this.compareNum) :
                this.arr.sort(this.compareNum)
        }
    }
    compareWords(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    compareWordsReverse(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    }
    compareNum (a, b) {
        return a - b;
    }
}

console.log(new Sort(ITEA_COURSES, 'word', false))
console.log(new Sort(numbers, 'num', true))

class Collection {
    constructor(arr, elem, header) {
        this.arr = arr
        this.elem = elem

        this.rendering(this.arr, this.elem, header)

        if(header) {
            this.clickingSort(arr, $('.sort'))
        }
    }

    rendering(arr, elem, header) {
        if (header) {
            elem.innerHTML =
                this.renderWrap(this.renderHeader()) +
                this.renderWrap(this.renderBody(arr))
        } else {
            elem.innerHTML =
                this.renderWrap( this.renderBody(arr) )
        }
    }
    clickingSort(arr, elem) {
        elem.addEventListener('click', sortingDown)
        let itemsList = this.elem.querySelector('ul:last-child')

        function sortingDown(e) {
            elem.removeEventListener('click', sortingDown.bind(this))
            elem.addEventListener('click', sortingUp.bind(this))

            elem.className = elem.classList.value.slice(0, 5) + 'down'
            elem.querySelector('span').innerHTML = 'A-Z'
            elem.querySelector('span').className = 'fade'

            this.rendering(new Sort(arr, 'word', true).arr, itemsList)
            e.stopPropagation()
        }

        function sortingUp(e) {
            this.removeEventListener('click', sortingUp)
            this.addEventListener('click', sortingNone)

            this.className = this.classList.value.slice(0, 5) + 'up'
            this.querySelector('span').innerHTML = 'Z-A'
            this.querySelector('span').className = 'fade'

            this.rendering(new Sort(arr, 'word', false).arr, itemsList)
            e.stopPropagation()
        }
        function sortingNone(e) {
            this.removeEventListener('click', sortingNone)
            this.addEventListener('click', sortingDown)

            this.className = this.classList.value.slice(0, 5) + 'none'
            this.querySelector('span').innerHTML = 'ABC'
            this.querySelector('span').classList.remove('fade')
            this.querySelector('span').classList.add('fade')

            // console.log(itemsList);
            // console.log(new Sort(arr, 'word'))
            this.rendering(new Sort(arr, 'word', false).arr, itemsList)

            e.stopPropagation()
        }
    }
    renderWrap(inner) {
        return `<ul class="collection" style="width: 270px">${inner}</ul>`
    }
    renderHeader() {
        return `
            <div class="collection-header center-align">
                <div class="sort none">
                    <i class="material-icons">details</i>
                    <span class="fade">ABC</span>
                </div>
                <div class="input-field inline">
                    <input id="email_inline" type="email" class="validate">
                    <label for="email_inline">search</label>
                </div>
            </div>`
    }
    renderBody(arr) {
        return `${arr.map((item, index) =>
                `<li class="fadeDown collection-item"
                     style="animation-delay: ${(Math.log(index + 1) / 4).toFixed(2)}s;">${item}</li>`).join('')}`
    }
}
new Collection(ITEA_COURSES, $('.code-3-1'), true)