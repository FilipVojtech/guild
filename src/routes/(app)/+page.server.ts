import type { PageServerLoad } from './$types';

const post = {
	author: {
		character: {
			name: 'Niklas Eeroson',
			handle: '@NiklasEeroson',
			picture: 'https://via.placeholder.com/50',
		},
		user: { name: 'Filip', picture: '' },
	},
	text: `What the fuck did you just fucking say about me, you little puto? I'll have you know I graduated top of my class at the University of Havana, and I've been involved in numerous secret raids on Batista, and I have over 300 confirmed kills. I am trained in guerrilla warfare and I'm the top rifleman in the entire M-26-7 armed forces. You are nothing to me but just another reactionary. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the radio? Think again, fucker. As we speak I am contacting my secret network of spies across the USSR and your bases are being pictured right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, escoria. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of Soviet missiles and I will use them to their full extent to wipe your miserable ass off the face of my island, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you wou-`,
	likes: 0,
	liked: false,
};

export const load: PageServerLoad = () => {
	return {
		posts: [post, post, post, post, post, post, post, post, post, post, post, post],
	};
};
