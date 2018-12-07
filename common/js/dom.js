// HEADER
let li = `<li><a href="sass.html">Sass</a></li>`;
let loc = document.querySelector("title").innerText;
let arr = ['a','b','c'];

let tempHeader = `
  <nav class="nav-extended teal lighten-2">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        ${ 'logo' }
      </a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        ${ arr.map(i => `<li>${i}</li>`).join('') }
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Test 1</a></li>
        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab"><a href="#test3">Tab 3</a></li>
        <li class="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
`;

let header = document.createElement('div')
header.innerHTML = tempHeader;
document.body.insertBefore(header, document.body.firstChild);

console.log(lessonsJSON);
