import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Container from './Container'

import logo from '../../img/logo-agendaai.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.logo} to='/'>
                    <img src={logo} alt="MyCodes" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/"></Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar