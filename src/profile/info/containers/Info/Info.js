// import { PropTypes } from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";

import FieldValue from "../../../../common/components/FieldValue";
import styles from "./Info.module.css";

class UserInfo extends React.Component {

    componentWillMount = () => {
    }

    render() {
        return (<div>
            <h3 className={styles.title}><Translate value="profile.infoAboutUser" /></h3>
            <div className={styles.body}>
                <FieldValue caption="profile.userName" value={this.props.user.name} className={styles.profileField} />
                <FieldValue caption="profile.login" value={this.props.user.login} className={styles.profileField} />
                <FieldValue caption="profile.email" value={this.props.user.email} className={styles.profileField} />
            </div>
        </div>);
    }
}

const mapStateToProps = state => ({ user: state.profile.currentUser });

export default connect(
    mapStateToProps,
    {}
)(UserInfo);