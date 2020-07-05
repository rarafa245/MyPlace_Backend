const login = (application) => {

  application.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })

}

module.exports = login
