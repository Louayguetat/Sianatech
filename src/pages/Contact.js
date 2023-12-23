import '../css/pages/contact.css'
import image from '../images/contact.png'
import arrow from '../images/forme 1.png'

const Contact = () =>{
    return(
        <div className="contact">
            <div className='contact-form'>
                <div className='contact-form-header'> Contactez <span> SIANATECH</span></div>
                <p>Contactez-nous pour discuter de vos besoins en maintenance technique, gestion d'installations et services connexes</p>
                <form onSubmit=''>
                    <input type='text' placeholder='Nom & Prénom *' className='custom-input' required/>
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Numéro de Téléphone *' required/>
                    <input type='text' placeholder='Objet' />
                    <textarea  placeholder='Message'/>
                    <button type='submit'> envoyer </button>
                </form>

                <div className='contact-info'>
                    <div className='info'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M16.2049 0.424255V2.35269C18.1123 2.35269 19.8992 2.8348 21.5657 3.79902C23.1518 4.74315 24.4167 6.00869 25.3603 7.59563C26.3241 9.26292 26.8059 11.0507 26.8059 12.9591H28.7334C28.7334 10.6892 28.1612 8.57994 27.0168 6.63141C25.9125 4.74315 24.4167 3.2466 22.5294 2.14177C20.5819 0.99676 18.4737 0.424255 16.2049 0.424255ZM6.23636 3.31691C5.69426 3.31691 5.22243 3.48766 4.82088 3.82915L1.71888 6.99299L1.80923 6.93273C1.30729 7.35458 0.976004 7.87686 0.815382 8.49959C0.674839 9.12231 0.714994 9.72495 0.935848 10.3075C1.49802 11.8743 2.25094 13.4814 3.19459 15.1286C4.51971 17.3985 6.09581 19.4374 7.92288 21.2453C10.8542 24.1983 14.4983 26.5285 18.8552 28.2359H18.8853C19.4675 28.4368 20.0498 28.477 20.6321 28.3565C21.2344 28.2359 21.7664 27.9748 22.2282 27.573L25.27 24.5297C25.6716 24.128 25.8723 23.6358 25.8723 23.0533C25.8723 22.4506 25.6716 21.9484 25.27 21.5467L21.3247 17.5693C20.9232 17.1675 20.4212 16.9666 19.8189 16.9666C19.2166 16.9666 18.7146 17.1675 18.3131 17.5693L16.4157 19.4977C14.8898 18.7745 13.5647 17.8806 12.4404 16.816C11.316 15.7312 10.4226 14.4155 9.75999 12.8687L11.6874 10.9403C12.1091 10.4983 12.3199 9.97604 12.3199 9.37341C12.3199 8.75068 12.079 8.24849 11.5971 7.86682L11.6874 7.95721L7.65183 3.82915C7.25028 3.48766 6.77845 3.31691 6.23636 3.31691ZM16.2049 4.28113V6.20957C17.4297 6.20957 18.554 6.51088 19.578 7.11352C20.622 7.71616 21.4452 8.53976 22.0475 9.58433C22.6499 10.6088 22.951 11.7337 22.951 12.9591H24.8785C24.8785 11.3922 24.487 9.93587 23.7039 8.58998C22.9209 7.28427 21.8769 6.2397 20.5718 5.45627C19.2266 4.67284 17.771 4.28113 16.2049 4.28113ZM6.23636 5.24535C6.29659 5.24535 6.36686 5.27548 6.44717 5.33574L10.3924 9.37341C10.4125 9.45376 10.3924 9.52407 10.3322 9.58433L7.47113 12.4167L7.68195 13.0194L8.07346 13.8631C8.39471 14.546 8.76614 15.2089 9.18778 15.8518C9.77003 16.7557 10.4125 17.5291 11.1152 18.1719C12.0589 19.0959 13.1933 19.9396 14.5184 20.703C15.181 21.0846 15.7431 21.3659 16.2049 21.5467L16.8073 21.8179L19.7286 18.8951C19.7687 18.8549 19.7988 18.8348 19.8189 18.8348C19.839 18.8348 19.8691 18.8549 19.9093 18.8951L23.975 22.9629C24.0151 23.003 24.0352 23.0332 24.0352 23.0533C24.0352 23.0533 24.0151 23.0733 23.975 23.1135L20.9633 26.0966C20.5216 26.4782 20.0398 26.5787 19.5177 26.3979C15.4219 24.8109 12.0087 22.6415 9.27812 19.8894C7.5916 18.202 6.11589 16.2836 4.851 14.1342C3.9475 12.5875 3.24478 11.0909 2.74284 9.64459V9.61446C2.66253 9.43367 2.65249 9.22275 2.71272 8.98169C2.77296 8.72055 2.88338 8.51967 3.044 8.37906L6.02554 5.33574C6.08577 5.27548 6.15605 5.24535 6.23636 5.24535ZM16.2049 8.138V10.0664C17.008 10.0664 17.6907 10.3477 18.2528 10.9101C18.815 11.4726 19.0961 12.1556 19.0961 12.9591H21.0236C21.0236 12.0953 20.8027 11.2918 20.361 10.5485C19.9394 9.8053 19.3571 9.22275 18.6142 8.8009C17.8714 8.35897 17.0683 8.138 16.2049 8.138Z" fill="black"/>
                        </svg>
                        <div className='text'>
                            <span> Téléphone </span>
                            <span> 03 5432 1234 </span>
                        </div>
                    </div>
                    <div className='info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
                            <path d="M12 0.074646C5.46884 0.074646 0.155273 5.44885 0.155273 12.0546C0.155273 18.4986 11.1293 31.5714 11.5963 32.1249C11.6972 32.2447 11.8449 32.3135 12.0006 32.3135C12.1562 32.3135 12.3034 32.2447 12.4048 32.1249C12.8718 31.5714 23.8458 18.4986 23.8458 12.0546C23.8458 5.44885 18.5323 0.074646 12.0011 0.074646H12ZM12 30.9379C9.99402 28.4846 1.21777 17.4417 1.21777 12.0546C1.21777 6.04151 6.0548 1.14927 12 1.14927C17.9452 1.14927 22.7823 6.04151 22.7823 12.0546C22.7823 17.4401 14.006 28.484 12 30.9379Z" fill="black"/>
                        </svg>
                        <div className='text'>
                            <span> Adresse </span>
                            <span> lroem aze, 129 </span>
                        </div>
                    </div>
                    <div className='info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="22" viewBox="0 0 35 22" fill="none">
                            <path d="M30.874 0.0896606H4.12646C3.26451 0.0896606 2.43786 0.419052 1.82837 1.00537C1.21887 1.59169 0.876465 2.38691 0.876465 3.2161V18.3012C0.876465 19.1303 1.21887 19.9256 1.82837 20.5119C2.43786 21.0982 3.26451 21.4276 4.12646 21.4276H30.874C31.7359 21.4276 32.5626 21.0982 33.1721 20.5119C33.7816 19.9256 34.124 19.1303 34.124 18.3012V3.2161C34.124 2.38691 33.7816 1.59169 33.1721 1.00537C32.5626 0.419052 31.7359 0.0896606 30.874 0.0896606ZM32.499 3.2161V18.3012C32.4968 18.5386 32.4385 18.7725 32.3283 18.9851L22.493 10.7586L32.3283 2.55173C32.4355 2.75834 32.4938 2.98524 32.499 3.2161ZM30.874 1.65288H30.9065L19.633 11.0791C19.0416 11.5739 18.2841 11.8465 17.5002 11.8465C16.7163 11.8465 15.9589 11.5739 15.3674 11.0791L4.09396 1.65679H30.8658L30.874 1.65288ZM2.67209 18.9851C2.56195 18.7725 2.5036 18.5386 2.50146 18.3012V3.2161C2.50663 2.98524 2.5649 2.75834 2.67209 2.55173L12.5074 10.7586L2.67209 18.9851ZM4.12646 19.8644H4.09396L13.7465 11.7943L14.303 12.2593C15.19 13.0006 16.3253 13.4087 17.5002 13.4087C18.6751 13.4087 19.8105 13.0006 20.6974 12.2593L21.254 11.7943L30.9065 19.8605H4.12646V19.8644Z" fill="black"/>
                        </svg>
                        <div className='text'>
                            <span> Email </span>
                            <span> info@marcc.com.au </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='contact-location'>
                <div className='location'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11531.135807055212!2d7.425857750167204!3d43.735814830086724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1703359786989!5m2!1sfr!2stn" 
                            width="500" 
                            height="500" 
                            className='google-maps-location' 
                            allowfullscreen="" 
                            loading="lazy" 
                            title='localisation'
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <img src={arrow} className='arrow' alt='fleche' />
                    <div className='image-container'>
                        <img src={image} alt='contact' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;