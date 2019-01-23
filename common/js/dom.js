// HEADER
let li = `<li><a href="sass.html">Sass</a></li>`;
let loc = document.querySelector("title").innerText;
let id = loc.charAt(loc.length-1);

const $ = (selector) => document.querySelector(selector);

let tempHeader = `
  <nav class="nav-extended cyan darken-3">
    <div class="nav-wrapper">
      <a href="./../index.html" class="right brand-logo">
        ${loc}
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        ${lessonsJSON
          .map(
            item =>
              `<li class="tab">
                <a href="../../lessons/lesson_${item.id}/lesson${item.id}.html">
                  lesson-${item.id}
                </a>
              </li>`
          )
          .join("")}
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


//create table from object and array
function parseArr(arr, elem, title) {
  let table = `  
    <table> 
      <tbody>
        <tr>
          ${arr.map(value => `<td>${value}</td>`).join('')}
        </tr>
      </tbody> 
    </table><br>`
    elem.innerHTML += table
}

function parseObj(obj, elem, title) {
  if (!Array.isArray(obj)) {
    let table =
      `
      <h3>${title || ''}</h3>
      <table>
        <thead>
          <tr>
            ${Object.keys(obj).map(value => `<th>${value}</th>`).join('')}
          </tr> 
        </thead> 
        <tbody>
          <tr>
            ${Object.values(obj).map(value => `<td>${value}</td>`).join('')}
          </tr> 
        </tbody> 
      </table><br>`

    elem.innerHTML += table
  } else {
    let table =
      `
      <h3>${title || ''}</h3>
      <table>
          <thead>
            <tr>
              <th>id</th>
              ${Object.keys(obj[0]).map(value => `<th>${value}</th>`).join('')}
            </tr> 
          </thead> 
          <tbody>
            ${obj.map( (parseObj, index) => `
              <tr>
                <td>${index + 1}</td>
                ${Object.values(parseObj).map(value => `<td>${value}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody> 
        </table><br>`

    elem.innerHTML += table
  }
}

//toasts
document.querySelectorAll('.menu-item').forEach(menuItem => menuItem.onclick = function() { 
  M.toast({ html: this.innerHTML }) 
})
