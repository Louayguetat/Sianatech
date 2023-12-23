import '../css/components/navbar.css'
import logo from '../images/logo.png'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () =>{

    const location = useLocation();

    useEffect(() => {
        const links = document.querySelectorAll('.links a');

        links.forEach(link => {
            link.classList.remove('active');
        });

        const currentLink = document.querySelector(`.links a[href='${location.pathname}']`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }, [location.pathname]);

    return(
        <div className="navbar">
            <div className='navbar-contact'>
                <span>
                    <div className='icon-localisation'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                            <path d="M7.49998 0.597015C3.8502 0.597015 0.880859 3.58269 0.880859 7.25254C0.880859 10.8325 7.01341 18.0952 7.27436 18.4027C7.33077 18.4693 7.4133 18.5075 7.50028 18.5075C7.58727 18.5075 7.6695 18.4693 7.7262 18.4027C7.98716 18.0952 14.1197 10.8325 14.1197 7.25254C14.1197 3.58269 11.1504 0.597015 7.50058 0.597015H7.49998ZM7.49998 17.7433C6.37898 16.3803 1.47461 10.2454 1.47461 7.25254C1.47461 3.91194 4.17766 1.19403 7.49998 1.19403C10.8223 1.19403 13.5254 3.91194 13.5254 7.25254C13.5254 10.2445 8.62098 16.38 7.49998 17.7433Z" fill="white"/>
                        </svg>                         
                        <div className='container-overlay'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                <path d="M4.50002 0.715523C2.56024 0.715523 0.982056 2.30239 0.982056 4.25284C0.982056 6.20328 2.56024 7.78985 4.50002 7.78985C6.43981 7.78985 8.01799 6.20328 8.01799 4.25284C8.01799 2.30239 6.43981 0.715523 4.50002 0.715523ZM4.50002 7.19284C2.8877 7.19284 1.57581 5.87403 1.57581 4.25284C1.57581 2.63164 2.8874 1.31254 4.50002 1.31254C6.11265 1.31254 7.42424 2.63134 7.42424 4.25284C7.42424 5.87433 6.11265 7.19284 4.50002 7.19284Z" fill="white"/>
                            </svg>                           
                        </div>
                    </div>
                    16, ruouis- 98000 Monaco
                </span>
                <div className='credentials'>
                    <span>
                        <svg className='mail' xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                            <path d="M15.0155 0.0449219H1.9847C1.56477 0.0449219 1.16205 0.209618 0.865115 0.502778C0.568182 0.795938 0.401367 1.19355 0.401367 1.60814V9.15067C0.401367 9.56526 0.568182 9.96287 0.865115 10.256C1.16205 10.5492 1.56477 10.7139 1.9847 10.7139H15.0155C15.4355 10.7139 15.8382 10.5492 16.1351 10.256C16.4321 9.96287 16.5989 9.56526 16.5989 9.15067V1.60814C16.5989 1.19355 16.4321 0.795938 16.1351 0.502778C15.8382 0.209618 15.4355 0.0449219 15.0155 0.0449219ZM15.8072 1.60814V9.15067C15.8062 9.26941 15.7777 9.38635 15.7241 9.49262L10.9325 5.3794L15.7241 1.27596C15.7763 1.37926 15.8047 1.49271 15.8072 1.60814ZM15.0155 0.826531H15.0314L9.53918 5.53963C9.25103 5.78707 8.88201 5.92334 8.50012 5.92334C8.11823 5.92334 7.74921 5.78707 7.46105 5.53963L1.96887 0.828485H15.0116L15.0155 0.826531ZM1.27616 9.49262C1.2225 9.38635 1.19407 9.26941 1.19303 9.15067V1.60814C1.19555 1.49271 1.22394 1.37926 1.27616 1.27596L6.06772 5.3794L1.27616 9.49262ZM1.9847 9.93228H1.96887L6.67137 5.89722L6.94251 6.12975C7.37461 6.50037 7.92773 6.70445 8.50012 6.70445C9.0725 6.70445 9.62563 6.50037 10.0577 6.12975L10.3289 5.89722L15.0314 9.93032H1.9847V9.93228Z" fill="white"/>
                        </svg>
                        Contact@Siantech.com
                    </span>
                    <div className='vertical-line'></div>
                    <span>
                        <svg className='phone' xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M8.60237 0.196968V1.09231C9.55606 1.09231 10.4495 1.31615 11.2827 1.76382C12.0758 2.20217 12.7083 2.78974 13.1801 3.52654C13.6619 4.30064 13.9029 5.1307 13.9029 6.01672H14.8666C14.8666 4.96282 14.5805 3.98353 14.0083 3.07886C13.4562 2.20217 12.7083 1.50734 11.7646 0.994385C10.7908 0.462774 9.73676 0.196968 8.60237 0.196968ZM3.61809 1.53999C3.34704 1.53999 3.11112 1.61926 2.91035 1.77781L1.35935 3.24674L1.40452 3.21876C1.15355 3.41462 0.98791 3.65711 0.9076 3.94623C0.837328 4.23535 0.857405 4.51515 0.967833 4.78561C1.24892 5.51308 1.62538 6.2592 2.0972 7.02398C2.75977 8.07788 3.54781 9.02452 4.46135 9.8639C5.92702 11.2349 7.74907 12.3168 9.9275 13.1095H9.94256C10.2337 13.2028 10.5248 13.2214 10.8159 13.1655C11.1171 13.1095 11.3831 12.9883 11.614 12.8018L13.1349 11.3888C13.3357 11.2023 13.4361 10.9738 13.4361 10.7033C13.4361 10.4235 13.3357 10.1903 13.1349 10.0038L11.1623 8.15715C10.9615 7.97062 10.7105 7.87736 10.4094 7.87736C10.1082 7.87736 9.85723 7.97062 9.65645 8.15715L8.70778 9.0525C7.94483 8.71674 7.28226 8.30171 6.72009 7.80741C6.15791 7.30377 5.71118 6.69289 5.3799 5.97475L6.34363 5.0794C6.55445 4.87422 6.65986 4.63173 6.65986 4.35193C6.65986 4.06281 6.53939 3.82965 6.29846 3.65244L6.34363 3.69441L4.32582 1.77781C4.12505 1.61926 3.88914 1.53999 3.61809 1.53999ZM8.60237 1.98766V2.88301C9.21474 2.88301 9.77692 3.0229 10.2889 3.3027C10.8109 3.58249 11.2225 3.96488 11.5237 4.44986C11.8248 4.92551 11.9754 5.4478 11.9754 6.01672H12.9391C12.9391 5.28925 12.7434 4.61307 12.3519 3.9882C11.9604 3.38197 11.4383 2.897 10.7858 2.53326C10.1132 2.16953 9.3854 1.98766 8.60237 1.98766ZM3.61809 2.43533C3.6482 2.43533 3.68334 2.44932 3.72349 2.4773L5.69613 4.35193C5.70617 4.38924 5.69613 4.42188 5.66601 4.44986L4.23548 5.7649L4.34088 6.04469L4.53664 6.43641C4.69726 6.75351 4.88298 7.06129 5.0938 7.35973C5.38492 7.77943 5.70617 8.1385 6.05752 8.43695C6.52935 8.86597 7.09654 9.25768 7.75911 9.61209C8.09039 9.78929 8.37148 9.91986 8.60237 10.0038L8.90354 10.1297L10.3642 8.7727C10.3843 8.75405 10.3993 8.74472 10.4094 8.74472C10.4194 8.74472 10.4345 8.75405 10.4545 8.7727L12.4874 10.6613C12.5075 10.68 12.5175 10.694 12.5175 10.7033C12.5175 10.7033 12.5075 10.7126 12.4874 10.7313L10.9816 12.1163C10.7607 12.2935 10.5198 12.3401 10.2588 12.2562C8.21086 11.5194 6.50425 10.5121 5.13897 9.23436C4.29571 8.45094 3.55785 7.56025 2.92541 6.56232C2.47366 5.84417 2.1223 5.14935 1.87133 4.47784V4.46385C1.83117 4.37991 1.82615 4.28198 1.85627 4.17006C1.88639 4.04882 1.9416 3.95555 2.02191 3.89027L3.51268 2.4773C3.5428 2.44932 3.57793 2.43533 3.61809 2.43533ZM8.60237 3.77835V4.6737C9.00392 4.6737 9.34525 4.80427 9.62633 5.06541C9.90742 5.32655 10.048 5.64365 10.048 6.01672H11.0117C11.0117 5.61567 10.9013 5.24261 10.6804 4.89753C10.4696 4.55245 10.1785 4.28198 9.80703 4.08613C9.43559 3.88094 9.03404 3.77835 8.60237 3.77835Z" fill="white"/>
                        </svg>
                        +323284343
                    </span>
                </div>
            </div>
            <nav className='navbar-content'>
                <a href='/'><img src={logo} alt='sianatech' /></a>
                <div className='links'>
                    <a href='/'>Acceuil</a>
                    <a href='/aboutus'>Qui sommes nous? </a>
                    <div className='dropdown'>
                        <a>Nos services</a>
                        <ul className='dropdown-list'>
                            <div>
                                <li><a href='/Maintenance_Optimisation_Installations'>Maintenance et Optimisation d'Installations</a></li>
                                <li><a href='/Gestion_technique_locaux_Biens'>Gestion technique locaux et Biens</a></li>
                                <li><a href='/Conseil_Audit_Technique'>Conseil et Audit Technique</a></li>
                            </div>
                        </ul>
                    </div>
                    <a href='/contact' target='_blank'>
                        <div className='contact-button'>
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;