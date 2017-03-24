import React from "react";
import { connect } from "react-redux";

export default function SetModule(willMountAction) {
    return Container => {
        class SetModuleContainer extends React.Component {
            componentWillMount() {
                this.props.willMountAction();
            }

            render() {
                return (
                    <Container {...this.props} />
                );
            }
        }

        return connect(
            null, {
                willMountAction
            }
        )(SetModuleContainer);
    };
}