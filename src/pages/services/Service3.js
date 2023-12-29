import TickStyle from '../../components/TickStyle'
import '../../css/pages/services/service3.css'
import image1 from '../../images/service3/1.png'
import image2 from '../../images/service3/2.png'

const Service3 = () =>{
    return(
        <div className="service3">
            <div className='service-header'>
                <div className='service-description'>
                    <h1>Conseil et Audit Technique</h1>
                    <span>Expertise Technique et Audit sur Mesure - Solutions Adaptées</span>
                    <p>
                        Découvrez nos services de conseil et d'audit technique pour locaux, équipements et services. Maximisez l'efficacité opérationnelle 
                        grâce à notre expertise en maintenance à Monaco                
                    </p>
                    <p>
                        Chez SIANATECH, notre approche comprend des services spécialisés pour répondre spécifiquement à vos besoins
                    </p>
                </div>
                <div className='aide'>
                    <div className='content'>
                        <div className="white-round">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 44 46" fill="none">
                                <path d="M7.11141 0H26.9883C30.8957 0 34.1007 3.19324 34.1007 7.08754V19.7015C34.1007 23.5998 30.8987 26.7901 26.9883 26.7901H18.1243L10.8009 32.3689C10.2054 32.8231 9.36531 32.3225 9.46339 31.5948L9.93497 26.7901H7.11141C3.20301 26.7901 0 23.5978 0 19.7015V7.08754C0 3.19324 3.204 0 7.11141 0ZM13.2668 32.8803C13.2668 32.4192 13.6432 32.044 14.1059 32.044C14.5686 32.044 14.9451 32.4192 14.9451 32.8803V34.006C14.9451 36.6295 17.0949 38.7721 19.7273 38.7721H27.9216C28.1336 38.7721 28.3268 38.8511 28.4744 38.9805L33.6697 42.937L33.3497 39.6865C33.3071 39.2293 33.645 38.8215 34.1037 38.7791L37.5385 38.7721C40.1659 38.7721 42.3217 36.6246 42.3217 34.006V22.7032C42.3217 20.0847 40.1659 17.9371 37.5385 17.9371H36.5141C36.0514 17.9371 35.675 17.5619 35.675 17.1007C35.675 16.6396 36.0514 16.2644 36.5141 16.2644H37.5385C41.0932 16.2644 44 19.1604 44 22.7032V34.006C44 37.5488 41.0932 40.4448 37.5385 40.4448H35.1043L35.5184 44.6521C35.6165 45.3798 34.7764 45.8804 34.1809 45.4262L27.6412 40.4448H19.7273C16.1785 40.4448 13.2668 37.5428 13.2668 34.006V32.8803ZM26.9883 1.67265H7.11141C4.12042 1.67265 1.67829 4.10659 1.67829 7.08754V19.7015C1.67829 22.6776 4.12438 25.1174 7.11141 25.1174L10.9356 25.1243C11.3943 25.1668 11.7321 25.5746 11.6895 26.0318L11.3121 29.8806L17.2911 25.3258C17.4387 25.1964 17.6319 25.1174 17.8439 25.1174H26.9883C29.9763 25.1174 32.4224 22.6815 32.4224 19.7015V7.08754C32.4224 4.1056 29.9793 1.67265 26.9883 1.67265Z" fill="black"/>
                            </svg>
                        </div>
                        <div className='text-content'>
                            <h3> Besoin d'aide ? </h3>
                            <span> N'hésitez pas a nous contacter </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='gestion-technique'>
                <div className='gestion-technique-card'>
                    <img src={image1} alt=''/>
                </div>
                <div className='gestion-technique-text'>
                    <h3>Conseil Technique</h3>
                    <div className='content'>
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
                        <div>
                            <span>
                                Notre équipe d'experts fournit des conseils techniques adaptés à vos installations et processus. Nous analysons minutieusement 
                                vos équipements et méthodes de travail pour proposer des solutions personnalisées visant à améliorer l'efficacité opérationnelle 
                                et la performance
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='gestion-audits'>
                <div className='gestion-audits-text'>
                    <h3>Audit Technique</h3>
                    <div className='content'>
                        <div className='content-style'>
                            <h3>Audit d'Équipement</h3>
                            <div style={{display:'flex'}}>
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
                                <span>
                                    Inspection complète de vos équipements pour évaluer leur état, identifier les éventuels problèmes et recommander des actions 
                                    correctives précises 
                                </span>
                            </div>
                        </div>
                        <div className='content-style'>
                            <h3>Audit de Locaux</h3>
                            <div style={{display:'flex'}}>
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
                                <span>
                                    Évaluation détaillée de vos locaux pour s'assurer de leur conformité aux normes de sécurité et pour optimiser leur efficacité 
                                    opérationnelle
                                </span>
                            </div>
                        </div>
                        <div className='content-style'>
                            <h3>Audit de Service Technique</h3>
                            <div style={{display:'flex'}}>
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
                                <span>
                                    Analyse approfondie de vos services techniques pour identifier les aspects à améliorer, réduire les risques de pannes et maximiser 
                                    leur efficacité                            
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gestion-audits-card'>
                    <img src={image2} alt=''/>
                </div>
            </div>

            <div className='outro'>
            <div className='outro-text'>
                    <span> 
                        Nos services sur mesure d'expertise technique et d'audit sont conçus pour garantir une performance optimale et une maintenance 
                        efficace de vos installations à Monaco. Notre approche proactive vise à anticiper les problèmes et à optimiser vos processus pour 
                        une productivité accrue et des opérations sans heurts
                    </span>
                </div>
                <div className='outro-style'>
                    <div className='services'>
                        <TickStyle text="Analyse approfondie pour réduire les pannes et accroître la productivité" serviceStyle='service' id='service1' />
                        <TickStyle text="Expertise dans l'optimisation des services techniques et de maintenance pour une efficacité opérationnelle maximale" serviceStyle='service' />
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Service3;