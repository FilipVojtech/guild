import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import Character from './Character';
import Scope from '$lib/server/types/Scope';

@Entity()
export default class User extends BaseEntity {
	@Property({ unique: true })
	login!: string;

	@Property()
	password!: string;

	@Property({ unique: true })
	displayName!: string;

	@Property({ nullable: true, type: 'varchar', length: 1024 })
	refreshToken!: string;

	@Property()
	scopes!: Scope[];

	@ManyToMany(() => Character, 'owner', { owner: true })
	characters = new Collection<Character>(this);

	constructor(login: string, displayName: string = 'GUILD User', scopes: Scope[] = [Scope.user]) {
		super();
		this.login = login;
		this.displayName = displayName;
		this.scopes = scopes;
	}
}
