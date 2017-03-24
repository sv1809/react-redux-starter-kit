import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const getCurrentModuleName = location => {
    if (typeof location !== "string") {
        return "";
    }
    if (location.startsWith("/home")) {
        return "home";
    } else if (location.startsWith("/profile")) {
        return "personalAccount";
    } else {
        return "";
    }
};

const Header = ({ location }) => (
    <div className={styles.header}>
        <div className={styles.logoWrapper}>
            <Link className={styles.logo} to="/">
            </Link>
        </div>
        <div className={styles.title}>
            <div className={styles.appTitle}>
                <Translate value='appTitle' />
            </div>
            <div className={styles.titleAdditional}>
                <Translate value={getCurrentModuleName(location)} />
            </div>
        </div>
        <nav className={styles.right} role="navigation">
            <NavLink className={styles.menuItem} to="/home" activeClassName={styles.activeMenuItem} >
                <Translate value='home' />
            </NavLink>
            <NavLink className={styles.menuItem} to="/profile" activeClassName={styles.activeMenuItem} >
                <Translate value='personalAccount' />
            </NavLink>
        </nav>
    </div>
);

const mapStateToProps = (state, ownProps) => ({ location: ownProps.location.pathname });

const HeaderContainer = connect(
    mapStateToProps
)(Header);

export default HeaderContainer;