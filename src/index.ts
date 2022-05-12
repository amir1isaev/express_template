import express from 'express'
import boobs from '@core/boobs'

import dotenv from 'dotenv'

dotenv.config()

const app = express()
boobs(app)
