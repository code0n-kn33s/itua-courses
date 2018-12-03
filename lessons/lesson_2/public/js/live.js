

  // function Lang( name ) {
  //   this.name = name;
  //   this.likes = 0;
  // }
  //
  // Lang.prototype.addLike = function(){
  //   this.likes++;
  // }


  class Lang{
    constructor(name){
      this.name = name;
      this.likes = 0;
      this.id = Math.round( Math.random()*10000 );
      this.addLike = this.addLike.bind(this);
      this.render = this.render.bind(this);
    }
    addLike(){
      this.likes++;
      let node = document.querySelector(`.node[data-id="${this.id}"] > button`);
          node.innerText = `Like! (${this.likes})`;
    }
    render(){
      let node = document.createElement('div');
          node.dataset.id = this.id;
          node.className = 'node';
      const template =
        `
          <h3>${this.name}</h3>
          <button>Like! (${this.likes}) </button>
        `;
      node.innerHTML = template;
      const btn = node.querySelector('button');
            btn.addEventListener('click', this.addLike );

      return node;
    }
  }

  class FrontLang extends Lang{
    constructor(name, parentLang){
      super(name);
      this.parentLang = parentLang;
    }
    doSmsng(){
      console.log(123);
    }

    render(){
      let node = document.createElement('div');
          node.dataset.id = this.id;
          node.className = 'node';
      const template =
        `
          <h1 style="color:red">${this.name}</h1>
          <button>Like! (${this.likes}) </button>
        `;
      node.innerHTML = template;
      const btn = node.querySelector('button');
            btn.addEventListener('click', this.addLike );

      return node;
    }
  }

  let js = new Lang('javascript');
  let php = new Lang('php');
  let ocaml = new FrontLang('ocaml', 'javascript');

  target.appendChild( js.render() );
  target.appendChild( ocaml.render() );
