const express = require('express')
const app = express()
const port = 3000
const url = 'http://localhost'



app.get('/', (req,res) => {
	res.send('Hello World!')
})


app.listen(port, () => {
	console.log('ExpressServer listening at ${url}:${port}')
})
