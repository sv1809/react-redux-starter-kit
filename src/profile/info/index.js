import Bundle from "../../common/components/Bundle";
import mod from "bundle-loader?lazy!./module";

export default props => (<Bundle load={mod} {...props}>
    {(Component) => <Component {...props} />}
</Bundle>);