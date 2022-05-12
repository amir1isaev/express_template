import { UserService } from '@services'
import { UserController } from '@controllers'
import database from '@database'

class Dependencies {
	private static userService: UserService
	private static userController: UserController

	static async getUserDependencies() {
		const userRepository = await database.then((data) => data.userRepository).then((data) => data)

		Dependencies.userService = new UserService(await userRepository)
		Dependencies.userController = new UserController(Dependencies.userService)

		return {
			userService: Dependencies.userService,
			userController: Dependencies.userController,
		}
	}
}

export default Dependencies.getUserDependencies()
