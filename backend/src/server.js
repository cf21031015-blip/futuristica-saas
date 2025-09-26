import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Futurística SAAS API running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Futurística API running on port ${PORT}`)
})
