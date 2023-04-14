import { createSecretKey } from 'crypto';
import type { JWTPayload } from 'jose';
import * as jose from 'jose';
import { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } from '$env/static/private';
import orm from './database';
import User from './entities/User';

/**
 * Create a new JWT token
 * @param data {App.SessionUser} - Data to be encoded in the token
 * @returns {Promise<string>} - JWT Token in a string form
 */
export function createToken(data: App.SessionUser): Promise<string> {
	const secret = createSecretKey(JWT_SECRET, 'utf-8');
	return new jose.SignJWT(data)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer(JWT_ISSUER)
		.setAudience(JWT_AUDIENCE)
		.setExpirationTime('15 minutes')
		.sign(secret);
}

/**
 * Refreshes the token provided. Returns null if token cannot be refreshed.
 * @param token {string} - Expired token
 * @returns {Promise<string | null>}
 */
export async function refreshToken(token: string): Promise<string | null> {
	const em = orm.em.fork();
	const user = await em.findOne(User, { refreshToken: token });

	if (!user || !user.refreshToken) {
		return null;
	}

	const newToken = await createToken({ id: user.id, displayName: user.displayName });

	user.refreshToken = newToken;
	em.flush();

	return newToken;
}

/**
 * Verifies the token. Returns null if token cannot be verified (ie. is expired)
 * @param token {string} - Token to be verified
 * @returns {Promise<JWTPayload | null>}
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
	const secret = createSecretKey(JWT_SECRET, 'utf-8');

	try {
		let verifyToken = await jose.jwtVerify(token, secret);
		return verifyToken.payload;
	} catch {
		return null;
	}
}
