const User = require('../src/User')

// User tests here


describe('user properties', () => {

    const user1 = new User('mary', 'pass1', 19)

    // test username
    test('username is defined', () => {
      // edit this to be a real test!
      expect(user1.getUsername()).toBe('mary')
    })

    // test password
    test('password is defined', () => {
        // edit this to be a real test!
        expect(user1.getPassword()).toBe('pass1')
      })

      // test age
      test('age is defined', () => {
        // edit this to be a real test!
        expect(user1.getAge()).toBe(19)
      })
  })
