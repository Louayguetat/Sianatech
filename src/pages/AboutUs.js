import '../css/pages/aboutUs.css'
import TickStyle from '../components/TickStyle';

const AboutUs = () =>{
    return(
        <div className="aboutUs">
            <div className='description'>
                <div className='description-content'>
                    <div className='description-title'>
                        <h1>
                            Votre Partenaire en Maintenance Technique et Gestion d'Installations
                        </h1>
                    </div>
                    <div className='description-text'>
                        <span>
                            SIANATECH, établi à Monaco, se consacre à offrir des solutions novatrices et spécifiquement ajustées pour répondre aux divers besoins 
                            techniques de nos clients. Notre expertise s'étend aux industries, aux hôtels, aux commerces, et à bien d'autres secteurs, visant à 
                            proposer des services de maintenance technique et de gestion d'installations de qualité.
                        </span>
                    </div>
                </div>
            </div>

            <div className='expertise'>
                <div className='expertise-text'>
                    <h1> Notre Expertise </h1>
                    <span>
                        En combinant notre expertise technique pointue, nous fournissons une gamme complète de services conçus pour optimiser la performance, 
                        la sécurité et la durabilité de vos équipements et installations.
                    </span>
                </div>
                <div className='services'>
                    <h2> Nos Services </h2>
                    <TickStyle text="Maintenance et Optimisation d'Installations" serviceStyle='service' id='service1' />
                    <TickStyle text="Gestion technique locaux et Biens" serviceStyle='service' />
                    <TickStyle text="Maintenance et Optimisation d'Installations" serviceStyle='service' />
                </div>
            </div>
            <div className='besoin-aide'>
                <div className='aide-text'>
                    <h2> Une Approche Innovante pour Répondre à Vos Besoins Techniques </h2>
                    <span> Chez SIANATECH, nous adoptons une approche novatrice pour répondre aux besoins de maintenance technique et de gestion d'installations. 
                            Nous nous engageons à fournir des solutions sur mesure, adaptées à chaque client, afin d'assurer la fiabilité et la performance des 
                            équipements et des biens. 
                    </span>
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
            </div>
            <div className='engagements'>
                <div>
                    <h2>Notre Engagement envers la Qualité</h2>
                    <span> Chez SIANATECH, la qualité est au cœur de tout ce que nous entreprenons. Nous nous engageons à fournir des services de pointe grâce à 
                        un réseau d'experts chevronnés et à l'utilisation des dernières technologies.
                    </span>
                </div>
            </div>
            <div className='solutions'>
                <div>
                    <h2>Solutions de Maintenance Adaptées à Chaque Client</h2>
                    <span> Notre équipe s'efforce de proposer des solutions de maintenance spécifiquement conçues pour répondre aux besoins uniques de chaque client. 
                        Nous visons à garantir des résultats de qualité et une efficacité optimale pour les installations à Monaco, en mettant en avant notre expertise 
                        technique.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;