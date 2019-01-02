// HEADER
let li = `<li><a href="sass.html">Sass</a></li>`;
let loc = document.querySelector("title").innerText;
let id = loc.charAt(loc.length-1);
console.log(loc);
let tempHeader = `
  <nav class="nav-extended teal lighten-2">
    <div class="nav-wrapper">
      <a href="./../index.html" class="right brand-logo">
        ${loc}
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        ${lessonsJSON
          .map(item =>
              `<li class="tab">
                <a href="../../lessons/lesson_${item.id}/lesson${item.id}.html">
                  lesson-${item.id}
                </a>
              </li>`)
          .join("")}
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        ${lessonsJSON[id - 1].props
          .map(
            item =>
              `<li class="tab"><a href="#test${item.id}">${item.title}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;

let header = document.createElement('div');
header.innerHTML = tempHeader;
document.body.insertBefore(header, document.body.firstChild);