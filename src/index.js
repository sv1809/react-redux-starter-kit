import { render } from "react-dom";

import Root from "./root/Root";
import configureStore from "./configureStore";

const store = configureStore();

render(<Root store={store} />,
    document.getElementById("root"));

// if (module.hot) {
//     module.hot.accept("root/routes", () => {
//         System.import("root/routes")
//             .then(res => {
//                 const NewRoot = res.default;
//                 render(
//                     <NewRoot store={store} />,
//                     document.getElementById("root")
//                 );
//             });
//     });
// }