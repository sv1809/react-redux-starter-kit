import { injectAsyncReducer } from "../../configureStore";

class Bundle extends React.Component {
    state = {
        mod: null
    }

    _isMounted = false;

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    componentDidMount = () => {
        this._isMounted = true;
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            if (mod.reducers != null && this.props.name != null) {
                injectAsyncReducer(this.props.name, mod.reducers);
            }
            if (this._isMounted) {
                this.setState({
                    mod: mod.default ? mod.default : mod
                });
            }
        });
    }

    render() {
        return this.state.mod != null ? this.props.children(this.state.mod) : null;
    }
}

export default Bundle;