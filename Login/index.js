import express from 'express'

const app = express()
const port = 8000

app.use(express.urlencoded({ 'extended': true }))
app.use(express.json());
app.set("view engine", 'ejs')

app.get('/', (req, res) => {
  res.render('pages/login')
})


const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
const validatePassword = (password) => {
  return password.length >= 5 && /\d/.test(password)
}


app.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (validateEmail(email) && validatePassword(password)) {
    res.send('Welcome!');
  } else {
    res.send('Invalid credentials!');
  }

  console.log('Received data:', req.body, email, password);
});


app.listen(port, () => {
  console.log("Server is running on port " + port)
})
