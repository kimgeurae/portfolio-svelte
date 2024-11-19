import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Lucas Oliveira portfolio';

export const name = 'Lucas';

export const lastName = 'Oliveira';

export const description =
	'Desenvolvedor de jogos, aplicativos e experiências em realidade aumentada. Sempre em busca de novos desafios e oportunidades. Também atuo como fullstack developer a nível Jr.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/kimgeurae' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/lucaslgmo'
	},
	{
		platform: Platform.Email,
		link: 'mailto:lucaslgmo@gmail.com?subject=Tenho interesse em suas habilidades&body=Olá, vi seu portfolio e tenho interesse em te fazer uma proposta'
	}
];

export const skills = getSkills('js', 'css', 'html', 'csharp', 'unity', 'svelte', 'ts');
