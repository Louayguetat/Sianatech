

const TickStyle = ({text, serviceStyle, id}) =>{
    return(
        <div className={serviceStyle} id={id ? (id) : ''}>
            <div className='tick'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 45" fill={id ? ('#fff') : ('#000')}>
                    <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                </svg>                            
                <div className='container-overlay'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10L8.53553 13.5356L15.6058 6.46448" stroke={id? ('#F00') : ('#fff')} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                          
                </div>
            </div>
            <span> {text} </span>
        </div>
    )
}

export default TickStyle;