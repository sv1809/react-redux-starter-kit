import { PropTypes } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";
import { setLocale } from "react-redux-i18n";

import NotFound from "../common/components/NotFound";
import App from "./containers/App";
import history from "../history";
import * as languages from "./constants/languages";

class Intl extends React.Component {

    componentWillMount = () => {
        const language = localStorage.getItem("language") || (navigator.languages && navigator.languages[0]) ||
            navigator.language ||
            navigator.userLanguage;
        this.props.setLanguage(language);
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.language !== this.props.language) {
            localStorage.setItem("language", nextProps.language);
        }
    }

    render() {
        return (<div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </ConnectedRouter>
            <div className="change-language-wrapper">
                <span className={this.props.language.indexOf(languages.RU) !== -1 ? "active" : ""} onClick={() => this.props.setLanguage(languages.RU)}>ru</span>
                <span className={this.props.language.indexOf(languages.EN) !== -1 ? "active" : ""} onClick={() => this.props.setLanguage(languages.EN)}>en</span>
            </div>
        </div>);
    }
}

Intl.prototypes = {
    language: PropTypes.string.isRequired,
    messages: PropTypes.object.isRequired,
    setLanguage: PropTypes.func.isRequired,
};

const IntlContainer = connect(
    state => ({ language: state.i18n.locale }),
    dispatch => ({
        setLanguage: language => dispatch(setLocale(language)),
    })
)(Intl);

const Root = ({ store }) => (<Provider store={store}>
    <IntlContainer />
</Provider >);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;