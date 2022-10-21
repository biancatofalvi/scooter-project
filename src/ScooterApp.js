const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here

  #stations
  #registeredUsers

  static scooterSessions = []

  constructor() {
    this.#stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: []
    }

    this.#registeredUsers = {}

    ScooterApp.scooterSessions.push(this)
  }

  register(user) {
    if (user.getUsername() in this.#registeredUsers) {
      console.log('already registered!')
    } else if (user.getAge() <= 17) {
      console.log('too young to register!')
    } else {
      this.#registeredUsers[user.getUsername()]= {
        password: user.getPassword(),
        age: user.getAge(),
        loggedIn: false,
        accountChange: 0
      }
      console.log('user has been registered')
    }
  }

  logIn(username, password) {
    if (!(username in this.#registeredUsers) && password !== this.#registeredUsers.username.password) {
      throw new Error('Username or password is incorrect.')
    } else {
      this.#registeredUsers[username]['loggedIn'] = true
      console.log('User logged in successfully.')
    }
  }

  addScooter(location, scooter) {
    if (typeof location === 'string' && scooter instanceof Scooter){
      scooter.setStation(location)
      this.#stations[location].push(scooter.getSerial())
    } else {
      throw new Error ('Wrong type for location or scooter')
    }
  }

  removeScooter(scooterToRemove) {
    var ok = 1

    if (this.#stations[scooterToRemove.getStation()].includes(scooterToRemove.getSerial())) {
      ok = 0
      var index = this.#stations[scooterToRemove.getStation()].indexOf(scooterToRemove.getSerial())

      if (index !== -1) {
        this.#stations[scooterToRemove.getStation()].splice(index, 1);
        console.log('Scooter has been removed.')
      }
    }

    if (ok === 1) {
      throw new Error('Scooter not found.')
    }
  }

  getRegisteredUsers() {
    return this.#registeredUsers
  }

  getStations() {
    return this.#stations
  }

}

module.exports = ScooterApp
