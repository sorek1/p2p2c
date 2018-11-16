const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    res.send('<h1><marquee direction=right>Hello from Express on Now 2.0!</marquee></h1>')
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})
