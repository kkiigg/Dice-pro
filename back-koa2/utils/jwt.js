import jwt from 'jsonwebtoken'

const PUBLIC_KEY="lifeisafuckymovie"

export function getToken(username,userid){
	return jwt.sign({
		username,userid
	},PUBLIC_KEY,{ expiresIn: '1h' })
}


export function verifyToken(token){
	jwt.verify(token,PUBLIC_KEY)
}