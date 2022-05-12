import { Express } from 'express'
import http from 'http'
import AppRouter from '@routes'
import dotenv from 'dotenv'

dotenv.config()

export default async (app: Express) => {
	try {
		const httpServer = http.createServer(app)

		await AppRouter(app)

		const PORT = process.env.PORT || 8000
		httpServer.listen(PORT, () => console.log(`🟢 Server listening on port ${PORT}`))
	} catch (error) {
		console.error(error)
	}
}
