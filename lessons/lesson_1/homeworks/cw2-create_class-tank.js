class Drone {
  constructor(drone) {
    this.drone = drone
    this.droneParam = this.prop
  }
  showDrone() {
    switch (this.drone) {
      case ('heal') :
        this.prop = {
          hit:  100,
          healing: this.health + hit
        }
        break
      case ('attack') :
        this.prop = {
          hit:  50,
          attack: this.enemy.health - hit
        }
        break
      case ('scout') :
        this.prop = {
          hit:  0,
          toScout: "Enemy location"
        }
        break
      default :
        'You havent drone'
    }
  }
}

class Opponent extends Dron {
  constructor(opponent, map) {
    super('heal')
    this.opponent = opponent
    this.map = map
  }
  showOpponent() {
    // drone
    return `противник: ${this.opponent} територия: ${this.map}`
  }
}

class User extends Opponent {
  constructor(opponent, ammunition, action) {
    super(opponent, 'desert')
    this._ammunition = ammunition ? ammunition : 10
    console.log(this.showOpponent());

    this.drone = new Drone(action);
  }

  showAmmunition() {
    return `Снарядов ${this._ammunition}`
  }

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

let tank = new User("Kalasik", 6)
// console.log(tank);
// console.log(tank.droneParam);
// tank.fireTo()
// tank.setAmmo(11)
// tank.fireTo()

$('.code-2-1').innerHTML = Opponent
$('.code-2-2').innerHTML = Tank