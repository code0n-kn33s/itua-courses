// import './assets'
// import './json'
// import './header'
// import './dom'
// import './table'

const $ = (selector) => document.querySelector(selector);
const $w = (selector) => document.querySelectorAll(selector);

// HEADER
let loc = document.querySelector("title").innerText;
let id = loc.charAt(loc.length - 1);

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
</nav>`

let header = document.createElement('div');
header.innerHTML = tempHeader;
document.body.insertBefore(header, document.body.firstChild);

//init
M.AutoInit();
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();