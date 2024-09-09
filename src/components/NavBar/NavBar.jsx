
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
const logo = "./tienda.png"; 

export function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <NavLink to="/" className={styles.navbarLogoLink}>
                <img src={logo} alt="tienda" className={styles.navbarLogo} />
            </NavLink>
            <div className={styles.navLinks}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Inicio</NavLink>
                <NavLink to="/category/Fuego" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Fuego</NavLink>
                <NavLink to="/category/Premium" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Premium</NavLink>
                <NavLink to="/category/Clasico" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Clasico</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

