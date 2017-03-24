import { Translate } from "react-redux-i18n";

import * as styles from "./NotFound.module.css";

export default () => (<div className={styles.notFound}>
    <div className={styles.notFoundText}><Translate value="notFound" /></div>
</div>);