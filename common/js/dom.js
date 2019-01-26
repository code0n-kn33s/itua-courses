// HEADER
const $ = (selector) => document.querySelector(selector);
const $w = (selector) => document.querySelectorAll(selector);

let loc = document.querySelector("title").innerText;
let id = loc.charAt(loc.length-1);

let tempHeader = `
  <nav class="nav-extended cyan darken-3">
    <div class="nav-wrapper">
      <a href="./../index.html" class="right brand-logo">
        ${loc}
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        ${lessonsJSON.map(item =>
              `<li class="tab">
                <a href="../../lessons/lesson_${item.id}/lesson${item.id}.html">
                  lesson-${item.id}
                </a>
              </li>`).join("")}
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        ${lessonsJSON[id - 1].props
          .map(
            item =>
              `<li class="tab"><a class="menu-item" href="#test${item.id}">${item.title}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;

let header = document.createElement('div');
header.innerHTML = tempHeader;
document.body.insertBefore(header, document.body.firstChild);

// TABLES
let Table = function (obj, elem, title, buttons) {
  this.obj = obj
  this.elem = elem
  this.title = title

  this.parseObj()

  this.tableHead = this.elem.querySelector('table thead tr');
  this.tableBody = this.elem.querySelectorAll('table tbody tr');

  if (buttons) {
    this.createHeadButton()
    this.createBodyButtons()
  }
}

Table.prototype.parseObj = function() {
  if (!Array.isArray(this.obj)) {
    let table =
      `
      <h3>${this.title || ''}</h3>
      <table>
        <thead>
          <tr>
            ${Object.keys(this.obj).map(value => `<th>${value}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr data-id="${this.obj.id}">
            ${Object.values(this.obj).map(value => `<td>${value}</td>`).join('')}
          </tr>
        </tbody>
      </table><br>`

    this.elem.innerHTML += table
  } else {
    let table =
      `
      <h3>${this.title || ''}</h3>
      <table>
          <thead>
            <tr>
              ${Object.keys(this.obj[0]).map(value => `<th>${value}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${this.obj.map((parseObj) => `
              <tr data-id="${parseObj.id}">
                ${Object.values(parseObj).map(value => `<td>${value}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table><br>`

    this.elem.innerHTML += table
  }
}

// кнопки в теле таблици
Table.prototype.createHeadButton = function () {
  const tdHead = document.createElement('td')
  tdHead.innerHTML =
    `<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>`

  this.tableHead.appendChild(tdHead)
}

// кнопки в теле таблици
Table.prototype.createBodyButtons = function () {
  this.tableBody.forEach( item => {
    const tdBody = document.createElement('td')
    tdBody.innerHTML = `${createButton('cut', 'content_cut')} ${createButton('edit', 'edit')}`
    item.appendChild(tdBody)

    tdBody.querySelector('.cut').onclick = () => item.remove()

    tdBody.querySelector('.edit').onclick = () => {
      this.createUser(this.obj[item.getAttribute('data-id') - 1], item)
    }
  })
}

Table.prototype.createUser = function(obj, item) {
  const tdBody = document.createElement('td')

  setTeacher = () => {
    obj.obj = event.target.value

    obj.__proto__.base.forEach(value => {
      if (value.disc == event.target.value) obj.teacher = value.teacher
    })

    $('.teacher').innerHTML = obj.teacher
  }

  let tableItem =
    `
      <td>${obj.id}</td>
      <td>
        <select onchange="setTeacher()" class="default">
          ${Object.values(obj.__proto__.base).map(value =>
            `<option value="${value.disc}" data-teacher=${value.teacher}>${value.disc}</option>`
          ).join('')}
        </select>
      </td>
      <td class="teacher">
        ${obj.teacher}
      </td>
      <td>
        <div class="input-field col s6">
          <input id="student_name" type="text" class="validate">
          <label for="student_name">${obj.name}</label>
        </div>
      </td>
      <td>
        <p class="range-field">
          <input type="range" id="test5" min="0" max="20" />
        </p>
      </td>
      <td>${obj.pass}</td>
      <td>${obj.perfomance}</td>
    `
  item.innerHTML = tableItem

  tdBody.innerHTML = `${createButton('undo', 'undo')} ${createButton('done', 'done')} `
  item.appendChild(tdBody)

  tdBody.querySelector('.undo').onclick = () => {
    this.createUser(this.obj[item.getAttribute('data-id') - 1], item)

    tdBody.innerHTML = `${createButton('cut', 'content_cut')} ${createButton('edit', 'edit')}`
    item.appendChild(tdBody)
  }

  // tdBody.querySelector('.done').onclick = () => {
  //   this.createUser(this.obj[item.getAttribute('data-id') - 1], item)

  //   tdBody.innerHTML = `${createButton('cut', 'content_cut')} ${createButton('edit', 'edit')}`
  //   item.appendChild(tdBody)
  // }
}

//toasts
document.querySelectorAll('.menu-item').forEach(menuItem => menuItem.onclick = function() {
  M.toast({ html: this.innerHTML })
})

//lists
//create table from object and array
let arrToList = function (arr, elem, title) {
  let table = `
    <h3>${title || ''}</h3>
    <table>
      <thead>
        <tr>
          ${arr.map(value => `<td>${value}</td>`).join('')}
        </tr>
      </thead>
    </table><br>`
  elem.innerHTML += table
}

//Create button round. Flag - its class, Icon - icon
function createButton(flag, icon) {
  return `<a class="${flag} btn-floating btn-small waves-effect waves-light red">
            <i class="material-icons">${icon}</i>
          </a>`
}