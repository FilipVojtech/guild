import { Property, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';

export abstract class BaseEntity {
	@PrimaryKey()
	id: string = v4();

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	modifiedAt: Date = new Date();
}
