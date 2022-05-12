import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Express, json as expressJson, urlencoded } from 'express'
import bodyParser from 'body-parser'
import dependencies from '@core/dependencies'

const AppRouter = async (app: Express) => {
	const userController = await dependencies.then((deps) => deps.userController)

	app.use(cors())
	app.use(expressJson())
	app.use(urlencoded({ extended: true }))
	app.use(cookieParser())
	app.use(bodyParser.json())

	app.post('/api/users/register', userController.register)
}

export default AppRouter
