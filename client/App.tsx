import React, { type PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { RunningPage } from "./src/pages/runningPage";
import { LoginPage } from "./src/pages/loginPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainPage } from "./src/pages/mainPage";
import { SetPlanPage } from "./src/pages/setPlanPage";
import { CheckPlanPage } from "./src/pages/checkPlanPage";
import { RunningFinishedPage } from "./src/pages/runningFinishedPage";

import { Provider } from "react-redux";
import store from "./src/reduxStore";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login Page">
                    <Stack.Screen
                        name="Start Running Page"
                        component={RunningPage}
                        options={{ title: "Start runngng" }}
                    />
                    <Stack.Screen name="Login Page" component={LoginPage} />
                    <Stack.Screen name="Main Page" component={MainPage} />
                    <Stack.Screen
                        name="Set Plan Page"
                        component={SetPlanPage}
                    />
                    <Stack.Screen
                        name="Check Plan Page"
                        component={CheckPlanPage}
                    />
                    <Stack.Screen
                        name="Running Finished Page"
                        component={RunningFinishedPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
