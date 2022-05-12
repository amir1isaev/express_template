import { Repository } from 'typeorm'
import { UserEntity } from '@entities'

class UserService {
	private userRepository: Repository<UserEntity>

	constructor(userRepository: Repository<UserEntity>) {
		this.userRepository = userRepository
	}

	async registration(email: string) {
		const user = await this.userRepository.create({ email })

		return this.userRepository.save(user)
	}
}

export default UserService
