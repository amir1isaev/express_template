import { DataSourceOptions } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config()

const config: DataSourceOptions = {
	type: 'postgres',
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	logging: process.env.NODE_ENV === 'prod' ? false : true,
	synchronize: process.env.NODE_ENV === 'prod' ? false : true,
	// entities: [process.cwd() + '/dist/persistence/app/**/*.entity.js'],
	entities: [process.cwd() + '/src/entities/*.entity.ts'],
	// migrationsTableName: 'migrations',
	// migrations: [process.cwd() + '/src/database/migrations/main/*{.js,.ts}'],
	// cli: {
	// 	migrationsDir: process.cwd() + '/src/database/migrations/main',
	// },
}

export default config
