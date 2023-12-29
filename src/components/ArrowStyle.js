

const ArrowStyle = ({text, serviceStyle, id}) =>{
    return(
        <div className={serviceStyle} id={id? (id) : ''}>
            <div className='go-to'>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" viewBox="0 0 42 45" fill={id? ('#fff') : '#000'}>
                    <path d="M41 22.6431C41 34.4981 31.9876 44 21 44C10.0124 44 1 34.4981 1 22.6431C1 10.7881 10.0124 1.28619 21 1.28619C31.9876 1.28619 41 10.7881 41 22.6431Z" stroke="white" stroke-width="2"/>
                </svg>                            
                <div className='container-overlay'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                        <path d="M10.0718 18.6232H23.8909M23.8909 18.6232L18.3632 12.7384M23.8909 18.6232L18.3632 24.508" stroke={id? '#f00' : 'fff'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
                </div>
            </div>
            <span> {text} </span>
        </div>
    )
}

export default ArrowStyle;