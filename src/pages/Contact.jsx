import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto py-5 lg:py-10 lg:mt-10 flex justify-center"
		>
			<ContactDetails />
		</motion.div>
	);
};

export default Contact;