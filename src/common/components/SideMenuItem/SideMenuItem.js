import { PropTypes } from "react";
import { NavLink } from "react-router-dom";
import { Translate } from "react-redux-i18n";

import styles from "./SideMenuItem.module.css";

const SideMenuItem = (props) => (<NavLink className={styles.item} to={props.link} activeClassName={styles.active}>
    <div className={styles.link} ><Translate value={props.name} /></div>
</NavLink>);

SideMenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default SideMenuItem;