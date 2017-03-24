import styles from "./SideMenu.module.css";

const SideMenu = (props) => (<div className={styles.menu}>
    {props.children}
</div>);

export default SideMenu;