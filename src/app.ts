import express, {type Request, type Response} from 'express'
import { initializeAPI } from './api'

const app = express ()
app.use(express.json())

 
initializeAPI(app)