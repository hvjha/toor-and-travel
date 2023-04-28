const express = require('express')
require('./db/conn')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/user', require('./routes/userRoute'));
app.use('/data', require('./routes/DataRoutes'));

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})