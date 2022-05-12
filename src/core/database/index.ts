import { createConnection } from 'typeorm'
import { dbConfig } from '@config'
import { UserEntity } from '@entities'

export default createConnection(dbConfig).then(async (db) => {
	return {
		userRepository: await db.getRepository(UserEntity),
	}
})
