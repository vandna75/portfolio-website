import { useState } from 'react'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <header className="header">

            <a href="#home" className="logo">
                Vandna.
            </a>



            <div
                id="menu-icon"
                className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
            </div>




            <nav className={menuOpen ? 'navbar active' : 'navbar'}>

                <a href="#home" class="active" onClick={() => setMenuOpen(false)}>
                    Home
                </a>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                    About
                </a>

                <a href="#resume" onClick={() => setMenuOpen(false)}>
                    Resume
                </a>

                <a href="#projects" onClick={() => setMenuOpen(false)}>
                    Projects
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>

            </nav>

        </header>
    )
}

export default Navbar