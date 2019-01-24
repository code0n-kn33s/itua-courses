class Map {
  constructor(size, title) {
    this._size = size
    this._title = title
  }
  setMap(size, title) {
    this._size = size
    this._title = title
  }
}

class Tank {
  constructor(message, ammunition) {
    // this.ammunition = 10
    this._ammunition = ammunition ? ammunition : 10

    console.log(message);
  }
  moveTo(x,y) {}

  fireTo(x,y) {
    console.log(this._ammunition < 1 ? 'Снаряды закончились' : 'Огонь', this._ammunition);

    if (this._ammunition >= 1) this._ammunition -= 1
  }

  setAmmo(ammo) {
    if (ammo < 20 && ammo > 5) {
      this._ammunition = ammo
      console.log("Перезарядка...", "Боезапас : " + this._ammunition);
    } else {
      console.log("Зарядов должно быть не более 20 и не менее 5");
    }
  }
}
let tank = new Tank('New tank ready', 6)

// console.log(tank);

// tank.fireTo()
// tank.fireTo()
// tank.fireTo()
// tank.setAmmo(11)
// tank.fireTo()
// tank.fireTo()

$('.code-2-1').innerHTML = Tank