import React, {useState, useEffect} from 'react'


function NavBar() {

    const [show, handleShow] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });

        return() => window.removeEventListener('scroll')

    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
                alt="Netflix logo"
                className="nav__logo"
            />
            <img 
                src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg" 
                alt="Profile avatar"
                className="nav__avatar"
            />
        </div>
    )
}

export default NavBar
