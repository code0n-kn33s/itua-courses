// TABLES
let Table = function (arr, elem, title, buttons, obj_coustructor) {
  this.arr = arr
  this.elem = elem
  this.title = title
  this.editObjs = []

  this.func = obj_coustructor;

  this.parseObj()

  this.tableHead = this.elem.querySelector('table thead tr');
  this.tableBody = this.elem.querySelectorAll('table tbody tr');

  if (buttons) {
    this.createHeadButton()
    this.createBodyButtons(this.tableBody)
  }
}

Table.prototype.parseObj = function(header) {
  let table =
    `<h3>${this.title || ''}</h3>
    <table>
        ${ (!header) ? `<thead><tr>
            ${Object.keys(this.arr[0]).map(value =>
              `<th class="${value}">${value}</th>`).join('')}
          </tr></thead>` : ``}

          ${this.arr.map((parseObj) => `
            <tr data-id="${parseObj.id}">
              ${Object.values(parseObj).map(value =>
                `<td>${value}</td>`).join('')}
            </tr>
          `).join('')}

      </table><br>`

  this.elem.innerHTML += table
}

// кнопки в теле таблици
Table.prototype.createHeadButton = function () {
  const tdHead = document.createElement('td')
  tdHead.innerHTML = createButton('add', 'add', 'large')

  if (this.tableHead) this.tableHead.appendChild(tdHead)

  tdHead.querySelector('.add').onclick = () => {
    let tr = document.createElement('tr')
    let created = this.elem.querySelector('tbody').appendChild(tr)
    let newItem = new this.func("empty", 0, "empty")
    this.arr.push(newItem)
    tr.setAttribute('data-id', newItem.id)
    this.editStudents(newItem, created)
  }
}

// кнопки в теле таблици
Table.prototype.createBodyButtons = function (elems) {
  elems.forEach( item => {
    const tdBody = document.createElement('td')
    tdBody.innerHTML =
      ` ${createButton('cut', 'content_cut')}
        ${createButton('edit', 'edit')} `
    item.appendChild(tdBody)

    tdBody.querySelector('.cut').onclick = () => {
      item.remove()
    }

    tdBody.querySelector('.edit').onclick = () => {
      let idElem = item.getAttribute('data-id')
      let obj = {}
      this.arr.forEach(item => { if (parseInt(item.id) === parseInt(idElem)) obj = item })

      this.editStudents(obj, item)
    }
  })
}

Table.prototype.editStudents = function(obj, item) {
  const tdBody = document.createElement('td')

  let newObj = Object.assign( {}, obj )
  this.editObjs.push(newObj);

  setTeacher = (index) => {
    const closestTeacher = event.target.parentNode.parentNode.querySelector('.teacher')

    this.editObjs.forEach(obj => { if (obj.id === index) return thisObj = obj } )
    thisObj.subj = event.target.value

    obj.__proto__.base.forEach(value => {
      if (value.disc == event.target.value) thisObj.teacher = value.teacher
    })

    closestTeacher.innerHTML = thisObj.teacher
  }

  setPerformance = (index) => {
    const closest = event.target.parentNode.parentNode

    this.editObjs.forEach(obj => {
      if (obj.id === index) return thisObj = obj })

    let value = event.target.value;
    rangeValue()

    closest.querySelector('.student-pass').innerHTML =
      obj.__proto__.pass(value);

    closest.querySelector('.student-perfomance').innerHTML =
      obj.__proto__.perfomance(value);

    thisObj.visits = value
    thisObj.perfomance = obj.__proto__.perfomance(value)
    thisObj.pass = obj.__proto__.pass(value)
  }

  setName = (index) => {
    this.editObjs.forEach(obj => {
      if (obj.id === index) return thisObj = obj
    })

    thisObj.name = event.target.value
  }

  let tableItem =
    ` <td data-id="${obj.id}">${obj.id}</td>
      <td>
        <select onchange="setTeacher(${obj.id})" type="select" class="default" value="${obj.subj}">
          ${Object.values(obj.__proto__.base).map( value =>
            `<option value="${value.disc}" ${(obj.subj == value.disc) ? `selected` : ``}>${value.disc}</option>`
          ).join('')}
        </select>
      </td>
      <td class="teacher" width="150">
        ${obj.teacher}
      </td>
      <td>
        <div class="input-field col s6">
          <input onchange="setName(${obj.id})" id="student_name-${obj.id}" type="text" class="validate">
          <label for="student_name-${obj.id}">${obj.name}</label>
        </div>
      </td>
      <td>
        ${createRange(20, obj.visits, 100, `setPerformance(${obj.id})` )}
      </td>
      <td class="student-pass" width="100">${obj.pass}</td>
      <td class="student-perfomance" width="140">${obj.perfomance}</td>`

  item.innerHTML = tableItem

  tdBody.innerHTML =  ` ${createButton('undo', 'undo')}
                        ${createButton('done', 'done')} `

  item.appendChild(tdBody)

  // undo button
  tdBody.querySelector('.done').onclick = () => {
    let td = event.target.parentNode.parentNode.parentNode
    let thisObj = newObj
    const id = td.getAttribute('data-id')

    let html =
    `<tr data-id="${thisObj.id}">
      ${Object.values(thisObj).map(value => `<td>${value}</td>`).join('')}
    </tr>`

    td.innerHTML = html
    this.createBodyButtons([td])
  }

  tdBody.querySelector('.undo').onclick = () => {
    let td = event.target.parentNode.parentNode.parentNode
    let thisObj = obj
    const id = td.getAttribute('data-id')

    let html =
      `<tr data-id="${thisObj.id}">
        ${Object.values(thisObj).map(value => `<td>${value}</td>`).join('')}
      </tr>`

    td.innerHTML = html
    this.createBodyButtons([td])
  }
}

//toasts
document.querySelectorAll('.menu-item').forEach(
  menuItem => menuItem.onclick = function() {
    M.toast({ html: this.innerHTML })
})

//create list from array
function parseArr(arr, title) {
  return `<h3>${title || ''}</h3>
          <ul>
            ${arr.map(value => `<li>${value}</li>`).join('')}
          </ul><br>`
}

//Create button round.
function createButton(clas, icon, size) {
  return `<a  class="${clas}
              btn-floating btn-${size ? size : `small`}
              waves-effect waves-light red">
            <i class="material-icons">${icon}</i>
          </a>`
}

//Create input RANGE.
function createRange(max, value, width, func) {
  return  ` <div class="range-value">${value ? value : 0}</div>
            <input  oninput="${func ? func : 'rangeValue()'}"
                    type="range" min="0" max="${max}" step="1"
                    value="${value ? value : 0}"
                    style="width:${width ? width : 150}px"> `
}

var rangeValue = function (elem) {
  let el = elem ? elem : event.target,
      value = el.value,
      valueTarget = el.previousElementSibling;

  valueTarget.innerHTML = value
}

/*
new Table([
  new Row('head', [
    new Cell('name', action),
    new Cell('icon', 'plane', action)
  ]),
  new Row(false, [
    new Cell('name', new RangeElem(...) )
  ])
])
-----
this.row.map(  row => this.cell => cell.map => ())
*/

// machine click
let machineEvent = new Event('click', { bubbles: true })
$('.tabs .tab:nth-child(1) a').dispatchEvent(machineEvent)