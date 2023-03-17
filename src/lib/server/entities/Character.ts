import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import User from './User';

@Entity()
export default class Character extends BaseEntity {
	@Property()
	name!: string;

	@Property({ unique: true })
	handle!: string;

	@Property()
	image: string;

	@ManyToMany(() => User, (user) => user.characters)
	owner = new Collection<User>(this);

	constructor(name: string, handle: string, image: string = 'https://via.placeholder.com/50') {
		super();
		this.name = name;
		this.handle = handle;
		this.image = image;
	}
}
