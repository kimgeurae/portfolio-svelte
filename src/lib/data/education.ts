import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Certificate IT Technician',
		description: '',
		location: 'Brazil',
		logo: Assets.Unknown,
		name: '',
		organization: 'ETEC Parque da Juventude',
		period: { from: new Date(2013, 0, 1), to: new Date(2015, 11, 31) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Html', 'CSS', 'JS', 'C++', 'Java', 'English']
	},
	{
		degree: 'Certificate in Game Design and Media',
		description: '',
		location: 'Brazil',
		logo: Assets.Unknown,
		name: '',
		organization: 'SAGA - School of Arts, Games and Animation',
		period: { from: new Date(2014, 5, 1), to: new Date(2015, 6, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Unreal', 'Blueprint', 'Photoshop', 'zBrush', 'Maya']
	},
	{
		degree: 'Bachelor of Game Design',
		description: '',
		location: 'Brazil',
		logo: Assets.Unknown,
		name: '',
		organization: 'Faculdade Anhembi Morumbi',
		period: { from: new Date(2017, 0, 1), to: new Date(2022, 6, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Unity', 'C#', 'Photoshop', 'zBrush', 'Maya', 'Blender']
	}
];

export const title = 'Education';
