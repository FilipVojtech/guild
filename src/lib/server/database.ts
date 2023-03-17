import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '$env/static/private';
import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import Post from '$lib/server/entities/Post';
import Character from '$lib/server/entities/Character';
import User from '$lib/server/entities/User';

const orm = await MikroORM.init({
	entities: [Character, Post, User],
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	dbName: DB_NAME,
	type: 'mysql',
	migrations: {
		emit: 'js',
		path: 'src/lib/server/migrations',
	},
});

// const migrator = orm.getMigrator();
// await migrator.createMigration();
// await migrator.up();

export default orm;
