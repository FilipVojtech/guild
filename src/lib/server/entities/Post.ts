import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import Character from './Character';

@Entity()
export default class Post extends BaseEntity {
	@ManyToOne()
	author!: Character;

	@Property()
	body!: string;

	constructor(author: Character, body: string) {
		super();
		this.author = author;
		this.body = body;
	}
}
