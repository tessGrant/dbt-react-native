import {AppRegistry} from "react-native";
import App from "./src/App";
import {name as appName} from "./app.json";
// import {Provider} from "react-redux";
import React from "react";

// const AppContainer = () =>
//     <Provider>
//         <App />
//     </Provider>

// AppRegistry.registerComponent(appName, () => AppContainer);
AppRegistry.registerComponent(appName, () => App);
