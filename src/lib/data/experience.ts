import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Freelancer for small or temporary projects like Unity experiences and video editing.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2017, 0, 1) },
		skills: getSkills('unity', 'csharp', 'js', 'ts', 'html', 'css'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Video Editing, discord bots, small games and prototypes.'
	},
	{
		slug: 'unity-developer-midiadub',
		company: 'Midiadub',
		description: 'Creating awesome augmented reality experience and games for big companies like Nissan, Ambev, Budweiser, Stella Artois.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Brazil',
		period: { from: new Date(2019, 7, 1), to: new Date(2020, 11, 31) },
		skills: getSkills('unity', 'c#'),
		name: 'Unity Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome apps with AR + Unity.'
	},
	{
		slug: 'fullstack-developer-jr-improtec',
		company: 'Improtec Sistemas',
		description: 'Working with maintaing, refactoring and building new content to a WMS product that was already @production stage for big companies.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Brazil',
		period: { from: new Date(2022, 6, 1), to: new Date(2022, 11, 31) },
		skills: getSkills('unity', 'c#'),
		name: '.NET & Angular Fullstack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Working and maintaining WMS (Warehouse Management Systems).'
	},
	{
		slug: 'unity-developer-electricMonkeys-firstTime',
		company: 'Electric Monkeys',
		description: 'Developing some mobile games in short cycles of development (15 days to a month duration). In the end of this contract I\'ve also worked in a upcoming spin-off for one of theirs games.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Brazil',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 7, 31) },
		skills: getSkills('unity', 'c#'),
		name: 'Mobile Unity Developer + Desktop Game',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developing mobile games in a short period of time.'
	},
	{
		slug: 'unity-developer-electricMonkeys-secondTime',
		company: 'Electric Monkeys',
		description: 'Maintaning and working with UI/UX design and animation for some mobile games with Skillz and prototyping a upcoming desktop title.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Brazil',
		period: { from: new Date(2024, 2, 1), to: new Date(2023, 8, 31) },
		skills: getSkills('unity', 'c#'),
		name: 'Unity Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Maintaining mobile games and prototyping new projects.'
	},
];

export const title = 'Experience';
