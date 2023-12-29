import '../css/pages/home.css'
import round from '../images/round.png'
import image from '../images/Ellipse 12.png'
import icons from '../images/fpdl1.png'

const tab = ['Maintenance Préventive','Maintenance Prédictive','Optimisation d’installation','Gestion Technique pour Locaux Commerciaux','Gestion Technique de Biens',
             'Conseil Technique','Audit Technique',]

const Home = () =>{
    return(
        <div className="home">
            <div className='description-section'>
                <div className='description'>
                    <h1>Une Solution Innovante de Maintenance Externalisée</h1>
                    <div>
                        <span> Découvrez SIANATECH, votre expert en maintenance à Monaco. </span>
                        <p>SIANATECH offre une solution innovante de maintenance externalisée, répondant à vos besoins de gestion technique et de maintenance d'installations.</p>
                        <p>Notre approche novatrice permet l'externalisation efficace de vos besoins en maintenance, offrant une expertise spécialisée pour optimiser la performance de vos biens.</p>
                    </div>
                    <a href='/aboutus'> Qui Sommes nous? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
                            <path d="M10.4928 9.57574L14.6899 14.3636L10.4928 19.1515" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
                <div className='description-icon'>
                    <img id='container' src={round} alt='container' />
                    <div id='container-overlay'>
                        <img id='traveux' src={image} alt='traveux' />
                    </div>
                </div>
            </div>
            <div className='services-section'>
                <div className='service-section' id='service1'>
                    <div className='header'>
                        <h2>
                            Maintenance et Optimisation d'Installations
                        </h2>
                        <div className='go-to'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill="none">
                                <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                            </svg>                            
                            <div className='container-overlay'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                                    <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                            </div>
                        </div>
                    </div>
                    <p>
                       Découvrez nos services de maintenance professionnelle et d'optimisation d'installations pour garantir la 
                       performance et la durabilité de vos équipements. Explorez nos solutions sur mesure adaptées à vos besoins spécifiques
                    </p>
                </div>
                <div className='service-section' id='service2'>
                    <div className='header'>
                        <h2>
                            Gestion technique locaux et Biens
                        </h2>
                        <div className='go-to'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <circle cx="21" cy="21" r="20" fill="black" stroke="black" stroke-width="2"/>
                            </svg>                          
                            <div className='container-overlay'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                                    <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                            </div>
                        </div>
                    </div>
                    <p>
                        Optimisez la performance de vos locaux et logements avec nos solutions de gestion technique sur mesure. Maximisez l'efficacité 
                        opérationnelle et la qualité de vos espaces immobiliers. Découvrez nos services de maintenance et d'optimisation pour des environnements 
                        à la pointe de l'excellence                    
                    </p>
                    <img src={icons} alt='icons' />
                </div>
                <div className='service-section' id='service3'>
                    <div className='header'>
                        <h2>
                            Conseil et Audit technique
                        </h2>
                        <div className='go-to'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill="none">
                                <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                            </svg>                            
                            <div className='container-overlay'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                                    <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                            </div>
                        </div>
                    </div>
                    <p>
                        Découvrez nos services de conseil et d'audit technique pour locaux, équipements et services. Maximisez l'efficacité opérationnelle grâce 
                        à notre expertise en maintenance.
                    </p>
                </div>
            </div>

            <div className='aide'>
                <div className='content'>
                    <div className="white-round">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 44 46" fill="none">
                            <path d="M7.11141 0H26.9883C30.8957 0 34.1007 3.19324 34.1007 7.08754V19.7015C34.1007 23.5998 30.8987 26.7901 26.9883 26.7901H18.1243L10.8009 32.3689C10.2054 32.8231 9.36531 32.3225 9.46339 31.5948L9.93497 26.7901H7.11141C3.20301 26.7901 0 23.5978 0 19.7015V7.08754C0 3.19324 3.204 0 7.11141 0ZM13.2668 32.8803C13.2668 32.4192 13.6432 32.044 14.1059 32.044C14.5686 32.044 14.9451 32.4192 14.9451 32.8803V34.006C14.9451 36.6295 17.0949 38.7721 19.7273 38.7721H27.9216C28.1336 38.7721 28.3268 38.8511 28.4744 38.9805L33.6697 42.937L33.3497 39.6865C33.3071 39.2293 33.645 38.8215 34.1037 38.7791L37.5385 38.7721C40.1659 38.7721 42.3217 36.6246 42.3217 34.006V22.7032C42.3217 20.0847 40.1659 17.9371 37.5385 17.9371H36.5141C36.0514 17.9371 35.675 17.5619 35.675 17.1007C35.675 16.6396 36.0514 16.2644 36.5141 16.2644H37.5385C41.0932 16.2644 44 19.1604 44 22.7032V34.006C44 37.5488 41.0932 40.4448 37.5385 40.4448H35.1043L35.5184 44.6521C35.6165 45.3798 34.7764 45.8804 34.1809 45.4262L27.6412 40.4448H19.7273C16.1785 40.4448 13.2668 37.5428 13.2668 34.006V32.8803ZM26.9883 1.67265H7.11141C4.12042 1.67265 1.67829 4.10659 1.67829 7.08754V19.7015C1.67829 22.6776 4.12438 25.1174 7.11141 25.1174L10.9356 25.1243C11.3943 25.1668 11.7321 25.5746 11.6895 26.0318L11.3121 29.8806L17.2911 25.3258C17.4387 25.1964 17.6319 25.1174 17.8439 25.1174H26.9883C29.9763 25.1174 32.4224 22.6815 32.4224 19.7015V7.08754C32.4224 4.1056 29.9793 1.67265 26.9883 1.67265Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='text-content'>
                        <h3> Besoin d’aide ? </h3>
                        <span> N'hésitez pas a nous contacter </span>
                    </div>
                </div>
            </div>

            <div className='publicite'>
                <div className='content'>
                    <div className='content-header'>
                        <h1>Une maintenance efficace pour vos biens.</h1>
                        <span>
                            SIANATECH offre une maintenance technique de pointe pour garantir la performance et la durabilité de vos équipements. 
                            Nos solutions sur mesure assurent une gestion optimale pour répondre aux besoins spécifiques de chaque client.
                        </span>
                        <span>
                            En choisissant notre service externalisé de maintenance, bénéficiez d'une gestion professionnelle et proactive de vos installations. 
                            Cette approche libère votre entreprise des contraintes opérationnelles, lui permettant de se concentrer sur son activité principale 
                            tout en garantissant la fiabilité et la performance des équipements.
                        </span>
                        <span>
                            SIANATECH s'engage à fournir des solutions de maintenance externalisée sur mesure, adaptées à vos besoins uniques, garantissant 
                            des résultats de qualité et une efficacité optimale pour vos installations à Monaco.
                        </span>
                    </div>
                    <div className='skills'>
                        <div className='skill' id='title'>
                            <div className='go-to'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill="#fff">
                                    <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                                </svg>                            
                                <div className='container-overlay'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                                        <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                            
                                </div>
                            </div>
                            <span> Maintenance Curative </span>
                        </div>
                        {tab.map((skill,index) =>(
                            <div key={index} className='skill'>
                                <div className='go-to'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill="#000">
                                        <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                                    </svg>                            
                                    <div className='container-overlay'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                                            <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                            
                                    </div>
                                </div>
                                <span> {skill} </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;