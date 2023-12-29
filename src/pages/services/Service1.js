import TickStyle from '../../components/TickStyle'
import '../../css/pages/services/service1.css'
import image1 from '../../images/service1/1.png'
import image2 from '../../images/service1/2.png'
import image3 from '../../images/service1/3.png'
import image4 from '../../images/service1/4.png'

const Service1 = () =>{
    return(
        <div className="service1">
            <div className='service-description'>
                <h1>Maintenance et Optimisation d'Installations</h1>
                <span>Maintenance et Optimisation d'Installations - Services sur Mesure</span>
                <p>
                    Découvrez nos services de maintenance professionnelle et d'optimisation d'installations pour garantir la performance et la durabilité 
                    de vos équipements. Explorez nos solutions adaptées à vos besoins spécifiques en maintenance
                </p>
                <p>
                    La maintenance et l'optimisation d'installations sont cruciales pour assurer la longévité et les performances optimales de vos équipements.
                    Chez SIANATECH, nous proposons plusieurs types de maintenance pour répondre à vos besoins spécifiques
                </p>
                <p>
                    Chez SIANATECH, notre vaste réseau de fournisseurs fournit des pièces détachées de qualité. En cas d'indisponibilité, notre expertise en 
                    modélisation 3D nous permet de créer sur mesure les composants nécessaires. Cette approche assure le maintien efficace de vos équipements, 
                    même dans des situations complexes.
                </p>
            </div>

            <div className='style1'>
                <div className='card-left'>
                    <h2>Maintenance Curative</h2>
                    <img src={image1} alt='' />
                </div>
                <div className='avantage-description'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g filter="url(#filter0_d_63_54639)">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#F4F4F4"/>
                                <circle cx="10.5" cy="10.5" r="10" stroke="black"/>
                            </g>
                            <path d="M6.09668 11.1309L8.68304 13.8706L14.2257 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_63_54639" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_54639"/>
                                <feOffset dx="1" dy="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_54639"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_54639" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>La maintenance curative intervient en cas de panne ou de dysfonctionnement. Nos experts interviennent rapidement pour rétablir le bon 
                          fonctionnement de vos équipements, minimisant ainsi les temps d'arrêt.
                    </span>
                </div>
            </div>

            <div className='style2'>
                <div className='avantage-description'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g filter="url(#filter0_d_63_54639)">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#F4F4F4"/>
                                <circle cx="10.5" cy="10.5" r="10" stroke="black"/>
                            </g>
                            <path d="M6.09668 11.1309L8.68304 13.8706L14.2257 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_63_54639" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_54639"/>
                                <feOffset dx="1" dy="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_54639"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_54639" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>La maintenance préventive consiste à effectuer des interventions planifiées régulières pour prévenir les pannes. Nous réalisons des 
                          contrôles périodiques pour identifier et corriger les éventuels problèmes avant qu'ils ne deviennent critiques
                    </span>
                </div>
                <div className='card-right'>
                    <img src={image2} alt='' />
                    <h2>Maintenance Préventive</h2>
                </div>
            </div>

            <div className='style1'>
                <div className='card-left'>
                    <h2>Maintenance Prédictive</h2>
                    <img src={image3} alt='' />
                </div>
                <div className='avantage-description'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g filter="url(#filter0_d_63_54639)">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#F4F4F4"/>
                                <circle cx="10.5" cy="10.5" r="10" stroke="black"/>
                            </g>
                            <path d="M6.09668 11.1309L8.68304 13.8706L14.2257 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_63_54639" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_54639"/>
                                <feOffset dx="1" dy="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_54639"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_54639" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>La maintenance prédictive utilise des données et des analyses pour prédire les pannes potentielles. À l'aide de technologies avancées, 
                          nous anticipons les problèmes et agissons proactivement pour éviter les arrêts imprévus.
                    </span>
                </div>
            </div>
            <div className='style2'>
                <div className='avantage-description'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g filter="url(#filter0_d_63_54639)">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#F4F4F4"/>
                                <circle cx="10.5" cy="10.5" r="10" stroke="black"/>
                            </g>
                            <path d="M6.09668 11.1309L8.68304 13.8706L14.2257 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_63_54639" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_54639"/>
                                <feOffset dx="1" dy="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_54639"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_54639" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>En plus de la maintenance, nous proposons des solutions d'optimisation pour maximiser les performances de vos installations. 
                          Nous identifions les améliorations potentielles et mettons en place des stratégies pour augmenter l'efficacité opérationnelle 
                          de vos équipements.
                    </span>
                </div>
                <div className='card-right'>
                    <img src={image4} alt='' />
                    <h2>Optimisation d'Installations</h2>
                </div>
            </div>

            <div className='outro'>
                <div className='outro-text'>
                    <h3> CHEZ SIANATECH </h3>
                    <span> Notre approche proactive et nos solutions sur mesure garantissent la fiabilité et l'efficacité à long terme de vos installations. </span>
                </div>
                <div className='outro-style'>
                    <div className='services'>
                        <TickStyle text="Suivi régulier assurant le bon fonctionnement des équipements" serviceStyle='service' id='service1' />
                        <TickStyle text="Prolongation de la durée de vie des installations, réduisant les temps d'arrêt." serviceStyle='service' />
                        <TickStyle text="Propositions concrètes pour optimiser les performances et l'efficacité" serviceStyle='service' />
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Service1;