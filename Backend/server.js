// you can access any key or data present in .env file
require('dotenv').config()
const app = require('./src/app')

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})