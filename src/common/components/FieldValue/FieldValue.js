import React, { PropTypes } from "react";
import { Translate } from "react-redux-i18n";

import styles from "./FieldValue.module.css";

const FieldValue = ({ caption, value, className }) => (<div className={styles.fieldValue + (className ? " " + className : "")}>
    <Translate className={styles.caption} value={caption} />
    <Translate className={styles.value} value={value} />
</div>);

FieldValue.propTypes = {
    caption: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
};

export default FieldValue;