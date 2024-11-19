import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Lucas Oliveira portfolio';

export const name = 'Lucas';

export const lastName = 'Oliveira';

export const description =
	'Hi, my name is Lucas, I\'m a game Developer from Brazil with a good amount of experience with Unity 3D & C#. I\'ve made a couple games and Augmented Reality apps. I\'m also a Jr fullstack developer. Currently looking for job opportunities in the game industry or as a fullstack dev. I\'m always up to face new challenges and turn projects into reality.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/kimgeurae' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/lucaslgmo'
	},
	{
		platform: Platform.Email,
		link: 'lucaslgmo@gmail.com'
	}
];

export const skills = getSkills('csharp', 'unity', 'js', 'ts', 'css', 'html', 'svelte');
