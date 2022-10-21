const Scooter = require('../src/Scooter')
const User = require('../src/User')


//typeof scooter === object
describe('scooter object', () => {

  const user1 = new User('mary', 'pass1', 19)
  const scooter1 = new Scooter('Manhattan', user1)

  test('is of type object', () => {
    // edit this to be a real test!
    expect(typeof scooter1).toBe('object')
  })
})

//Method tests
describe('scooter methods', () => {

  const user1 = new User('mary', 'pass1', 19)
  const scooter1 = new Scooter('Manhattan', user1)

  // tests here!

  //rent method
  test('can rent scooter', async () => {

    await scooter1.recharge()

    expect(scooter1.rent()).toBe(console.log('Enjoy the ride!'))
  })

  //dock method
  test('can dock scooter', () => {

    scooter1.dock('Bronx')

    expect(scooter1.getStation()).toBe('Bronx')
    expect(scooter1.getDocked()).toBe(true)
    expect(scooter1.getUser()).toBe('')
  })

  //requestRepair method
  test('can request to repair scooter', async () => {

    scooter1.setIsBroken(true)

    await scooter1.requestRepair()

    expect(scooter1.getIsBroken()).toBe(false)
  })

  //charge method
  test('can recharge scooter', async () => {

    scooter1.setCharge(30)

    await scooter1.recharge()

    expect(scooter1.getCharge()).toBe(100)
  })

})
