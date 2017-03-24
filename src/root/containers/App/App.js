import { Route, Redirect, Switch } from "react-router-dom";

import NotFound from "../../../common/components/NotFound";
import Header from "../../components/Header";
import Home from "../../../home";
import Profile from "../../../profile";

export default props => (<main>
    <Header {...props} />
    <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
    </Switch>
</main>);