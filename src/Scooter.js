class Scooter{
  // scooter code here
  #station
  #user
  #serial
  #charge
  #isBroken
  #docked

  constructor(station, user) {
    this.#station = station
    this.#user = user
    this.#serial = Math.floor(Math.random()*1000)
    this.#charge = Math.floor(Math.random()*100)
    this.#isBroken = false
    this.#docked = true
  }

  rent() {
    if (this.#isBroken === false && this.#charge > 20) {
      this.#docked = false
      console.log('Enjoy the ride!')
    } else if (this.#charge <= 20) {
      throw new Error('Scooter low on battery, please charge.')
    } else {
      throw new Error('Scooter is broken, please send a repair request.')
    }
  }

  dock(station) {
    if (typeof station === undefined) {
      throw new Error('Docking station required!')
    } else {
      this.#station = station
      this.#docked = true
      this.#user = ''
    }
  }

  async recharge() {
    console.log('Scooter charging...')
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.#charge = 100
    console.log('Charging completed.')
  }

  async requestRepair() {
    console.log('Scooter under repair.')
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.#isBroken = false
    console.log('Repair completed.')
  }

  setStation(station) {
    this.#station = station
  }

  getStation() {
    return this.#station
  }

  getDocked() {
    return this.#docked
  }

  getUser(){
    return this.#user
  }

  getIsBroken(){
    return this.#isBroken
  }

  setIsBroken(value){
    this.#isBroken = value
  }

  getCharge(){
    return this.#charge
  }

  setCharge(value) {
    this.#charge = value
  }

  getSerial() {
    return this.#serial
  }
}


module.exports = Scooter
