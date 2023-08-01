import './Header.css'
import logo from '../assests/logo.svg'
export function Header () {
    return (
        <div className="header-container">
            <div className="logo-container">
                <span>&lt;</span>
                <img className="logo" src={logo}/>
                <span>/&gt;</span>
            </div>
        </div>
    )
}