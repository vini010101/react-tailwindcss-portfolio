import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'apisCounter', end: 10, duration: 2 });
	useCountUp({ ref: 'systemsCounter', end: 2, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				
				<CounterItem
					title="Anos Costruindo Sistemas"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projetos desenvolvidos"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="APIs criadas"
					counter={<span id="apisCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Sistemas reais em produção"
					counter={<span id="systemsCounter" />}
					measurement=""
				/>

			</div>
		</div>
	);
};

export default AboutCounter;