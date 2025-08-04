const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes')

const app = express();
app.get('/',(req,res) => {
    res.send('Hello world');
})
app.use(cors({
    origin: "http://localhost:5173",  // Allow Vite frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true

}))

app.use('/ai',aiRoutes)
module.exports = app;

