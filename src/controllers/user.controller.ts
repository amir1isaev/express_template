import { Request, Response } from 'express'

import { UserService } from '@services'

class UserController {
	private userService: UserService

	constructor(userService: UserService) {
		this.userService = userService
	}

	register = async (req: Request, res: Response) => {
		try {
			const { email } = req.body

			const userData = await this.userService.registration(email)

			return res.status(201).json(userData)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
}

export default UserController
