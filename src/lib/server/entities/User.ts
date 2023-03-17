import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import Character from './Character';

@Entity()
export default class User extends BaseEntity {
	@Property({ nullable: false, unique: true })
	login!: string;

	@Property({ nullable: false })
	password!: string;

	@Property({ unique: true })
	displayName!: string;

	@ManyToMany(() => Character, 'owner', { owner: true })
	characters = new Collection<Character>(this);

	constructor(login: string, displayName: string = 'GUILD User') {
		super();
		this.login = login;
		this.displayName = displayName;
	}
}
