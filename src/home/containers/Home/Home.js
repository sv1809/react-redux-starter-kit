import { connect } from "react-redux";

import styles from "./Home.module.css";

class Home extends React.Component {
    render = () => (<div className={styles.home}>{this.props.text}</div>)
}

const mapStateToProps = state => ({ text: state.home.text });

export default connect(
    mapStateToProps,
    {}
)(Home);