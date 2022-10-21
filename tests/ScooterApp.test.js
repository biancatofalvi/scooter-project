const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp methods', () => {

    const user1 = new User('mary', 'pass1', 19)
    const scooterApp1 = new ScooterApp()
    scooterApp1.register(user1)
    const scooter1 = new Scooter('Manhattan', user1)
    scooterApp1.addScooter('Bronx', scooter1)

    // register user
    test('can register user', () => {
      expect(scooterApp1.getRegisteredUsers()[user1.getUsername()]['password']).toBe('pass1')
      expect(scooterApp1.getRegisteredUsers()[user1.getUsername()]['age']).toBe(19)
      expect(scooterApp1.getRegisteredUsers()[user1.getUsername()]['loggedIn']).toBe(false)
      expect(scooterApp1.getRegisteredUsers()[user1.getUsername()]['accountChange']).toBe(0)
    })

    // log in
    test('can log in user', () => {
        scooterApp1.logIn(user1.getUsername(), user1.getPassword())
        expect(scooterApp1.getRegisteredUsers()[user1.getUsername()]['loggedIn']).toBe(true)
    })

    // add scooter
    test('can add scooter', () => {
        expect(scooter1.getStation()).toBe('Bronx')
        expect(scooter1.getSerial() === scooterApp1.getStations()[scooter1.getStation()][0]).toBeTruthy()
    })

    // remove scooter
    test('can remove scooter', () => {
        expect(scooterApp1.removeScooter(scooter1)).toBe(console.log('Scooter has been removed.'))
    })
  })
