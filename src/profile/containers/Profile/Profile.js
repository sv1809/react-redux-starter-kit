import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import styles from "./Profile.module.css";
import SideMenu from "../../../common/components/SideMenu";
import SideMenuItem from "../../../common/components/SideMenuItem";
import NotFound from "../../../common/components/NotFound";
import Info from "../../info";

class Profile extends React.Component {
    render = () => {
        return (<div className={styles.profile + " content"}>
            <SideMenu>
                <SideMenuItem name="profile.info" link={`${this.props.match.url}/info`} />
                <SideMenuItem name="profile.changePassword" link={`${this.props.match.url}/password`} />
            </SideMenu>
            <Switch>
                <Route exact path="/profile" component={() => <Redirect to={`${this.props.match.url}/info`} />} />
                <Route path={`${this.props.match.url}/info`} component={Info} />
                {/*<Route path="/profile" component={Profile} />*/}
                <Route component={NotFound} />
            </Switch>
        </div>);
    }
}

const mapStateToProps = state => ({ profile: state.profile });

export default connect(
    mapStateToProps,
    {}
)(Profile);