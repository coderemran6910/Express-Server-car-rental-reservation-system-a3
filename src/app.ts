import express, { Request, Response } from 'express'
import { userRouter } from './modules/signup/user.router'
const app = express()

// parser
app.use(express.json())

app.use('/api/auth/signup', userRouter )

app.get('/', (req: Request , res: Response ) => {
  res.send('Hello World!')
})



export default app