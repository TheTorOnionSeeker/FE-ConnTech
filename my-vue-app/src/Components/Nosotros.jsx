import { Link } from "react-router-dom";

const Nosotros = (props) => {
	return (
		<div className='aboutContainer'>
			<Link
				class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
				to='/login'>
				Home
			</Link>
			<div className='titleContainer'>
				<div className='profilePic'>
					<img />
				</div>
				<h1>Nosotros</h1>
			</div>
			<hr className='divisor' />
			<div className='aboutMe'>
				<p>
					Somos tu mejor elección. Nuestra plataforma, con una
					interfaz inteligente y fácil de usar te brinda todas las
					posibilidades de encontrar al freelancer calificado para tu
					empresa. Al mismo tiempo, incentiva a profesionales en
					distintas especialidades a descubrir cuál será su próximo
					trabajo, de modo que puedan desarrollar e impulsar sus
					proyectos. Marcamos la diferencia. Nos preguntamos qué es lo
					esencial para que empresas y profesionales de alta calidad
					se conozcan y puedan estrechar sus manos (desde la
					distancia, claro). Y concluimos que la comunicación. Por
					ello, centramos parte de nuestro esfuerzo en crear un canal
					novedoso que garantice una buena relación. Uno en el que
					ambas partes pueden comunicarse abiertamente, e incluso
					hacer entrevistas virtuales de forma segura a través de la
					plataforma, para afinar detalles.
				</p>
			</div>
			<div></div>
		</div>
	);
};
export default Nosotros;
