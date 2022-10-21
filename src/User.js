class User {
  // User code here
  #username
  #password
  #age

  constructor(username, password, age) {
    this.#username = username
    this.#password = password
    this.#age = age
  }

  getAge() {
    return this.#age
  }

  getUsername() {
    return this.#username
  }

  getPassword() {
    return this.#password
  }

}

module.exports = User
