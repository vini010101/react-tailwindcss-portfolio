import { useContext, useState, useEffect } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [selectedImage, setSelectedImage] = useState(null);

	const openLightbox = (img) => {
		setSelectedImage(img);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	// Fecha o modal com a tecla Esc
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				closeLightbox();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{singleProjectData.ProjectImages.map((project) => {
					return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<img
								src={project.img}
								className="rounded-xl cursor-pointer shadow-lg sm:shadow-none hover:scale-105 transition-transform duration-300"
								alt={project.title}
								onClick={() => openLightbox(project.img)}
							/>
						</div>
					);
				})}
			</div>

			{/* Lightbox / Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
						onClick={closeLightbox}
					>
						{/* Botão X fixo no canto superior direito da tela */}
						<button
							onClick={closeLightbox}
							className="fixed top-5 right-5 z-50 bg-white dark:bg-ternary-dark rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							aria-label="Fechar"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								style={{ color: '#000' }} // garante contraste no fundo branco
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative max-w-4xl w-full max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={selectedImage}
								alt="Imagem ampliada"
								className="w-full h-auto rounded-lg shadow-2xl"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ProjectGallery;