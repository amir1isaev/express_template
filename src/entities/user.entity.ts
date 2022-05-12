import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity({ name: 'users' })
class UserEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', unique: true })
	email!: string
}

export default UserEntity
