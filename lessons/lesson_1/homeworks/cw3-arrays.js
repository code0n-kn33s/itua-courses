/*
  Задание:
  1. При помощи методов изложеных в arrays.js , переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
  2. Самостоятельно изучить метод Array.sort. Отфильтровать массив ITEA_COURSES по алфавиту.
      + Бонусный бал. Вывести на страничку списком
  3. Реализация функции поиска по массиву ITEA_COURSES.
      + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.

*/

const ITEA_COURSES = ["C++", "JavaScript", "HTML/CSS", "Rubi", "Python", "Angular", "Abgular", "Broforse", "Vue", "Baracuda", "Node", "Aangular", "Doc"];

const numbers = [3,2,4,5,6,9,1,4,6,2,1]

class Sort {
    constructor(arr, type, direction) {
        this.oldArray = arr.map(i=>i)
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

class RenderArr {
    constructor(arr, elem, sort, search) {
        this.arr = arr
        this.elem = elem

        this.elem.innerHTML = this.render(sort, search)

        if (sort) this.clickingSort($('.sort'))
    }
    clickingSort(elem) {
        elem.addEventListener('click', sortingDown)

        function sortingDown() {
            this.removeEventListener('click', sortingDown)
            this.addEventListener('click', sortingUp)
            console.log('sortingDown');
        }
        function sortingUp() {
            this.removeEventListener('click', sortingUp)
            this.addEventListener('click', sortingNone)
            console.log('sortingUp')
        }
        function sortingNone() {
            this.removeEventListener('click', sortingNone)
            this.addEventListener('click', sortingDown)
            console.log('sortingNone')
        }
    }
    render(sort, search) {
        return `
            <div>
                ${ (sort) ? `
                <label style="display: inline-block; margin-right: 20px;">
                    <input id="indeterminate-checkbox" type="checkbox" />
                    <span class="sort">A-Z</span>
                </label>` : ``
                }
                ${ (search) ? `
                <div class="input-field inline">
                    <input id="email_inline" type="email" class="validate">
                    <label for="email_inline">search</label>
                </div> ` : ``
                }
            </div>
            <ul class="collection" style="width: 270px">
                <li class="collection-header"><h4>ITEA_COURSES</h4></li>
                ${this.arr.map(item => `<li class="collection-item">${item}</li>`).join('')}
            </ul>`
    }
}
new RenderArr(ITEA_COURSES, $('.code-3-1'), true, true)