// Import images (substitua pelos seus prints reais)
import Dashboard from '../images/dashboard_diario_obras.png';
import Financeiro from '../images/financeiro_diario_obras.png';
import folhaPonto from '../images/folha_ponto_diario_obras.png';
import Ferramentas from '../images/ferramentas_diario_obras.png';
import Login from '../images/login_diario_obras.png';

// Import icons
import {
	FiLinkedin,
	FiGithub,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Diário de Obras Pro',
		publishDate: '2025',
		tags: 'SaaS / Full Stack',
	},

	ProjectImages: [
	{
		id: 1,
		title: 'Dashboard Geral',
		img: Dashboard,
	},
	{
		id: 2,
		title: 'Controle Financeiro',
		img: Financeiro,
	},
	{
		id: 3,
		title: 'Folha de Ponto',
		img: folhaPonto,
	},
	{
		id: 4,
		title: 'Gestão de Ferramentas',
		img: Ferramentas,
	},
	{
		id: 5,
		title: 'Tela de Login',
		img: Login,
	},
],

	ProjectInfo: {
		ClientHeading: 'Projeto',

		CompanyInfo: [
			{
				id: 1,
				title: 'Nome',
				details: 'Diário de Obras Pro',
			},
			{
				id: 2,
				title: 'Tipo',
				details: 'SaaS para Engenharia Civil',
			},
			{
				id: 3,
				title: 'Status',
				details: 'Em desenvolvimento / Em Produção',
			},
		],

		ObjectivesHeading: 'Objetivo',

		ObjectivesDetails:
			'Sistema web para gestão de obras, com foco em controle financeiro, produtividade e organização operacional em tempo real.',

		Technologies: [
			{
				title: 'Tecnologias',
				techs: [
					'React',
					'TypeScript',
					'Supabase',
					'PostgreSQL',
				],
			},
		],

		ProjectDetailsHeading: 'Funcionalidades',

		ProjectDetails: [
			{
				id: 1,
				details:
					'Dashboard com métricas em tempo real para acompanhamento da obra.',
			},
			{
				id: 2,
				details:
					'Controle financeiro por obra (custos, entradas e relatórios).',
			},
			{
				id: 3,
				details:
					'Gestão de equipe com organização de tarefas e presença.',
			},
			{
				id: 4,
				details:
					'Estrutura pensada para escalar como produto SaaS.',
			},
		],

		SocialSharingHeading: 'Links',

		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/vinicius-moura-5700b6240/',
			},
			{
				id: 2,
				name: 'GitHub',
				icon: <FiGithub />,
				url: 'https://github.com/vini010101',
			},
		],
	},

	RelatedProject: {
		title: '', // vazio = não mostrar
		Projects: [],
	},
};