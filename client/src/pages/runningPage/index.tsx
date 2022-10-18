import { ProgressCircleWrapper } from "./components/progressCircleWrapper";
import { Pedo } from "./components/pedometer";
import React from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";

import { CustomButton } from "../../shared/customButton";
import { StackNavigationProp } from "@react-navigation/stack";
export const RunningPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <ProgressCircleWrapper />
                    <Pedo />
                    <View style={{ marginTop: 25 }}></View>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("Running Finished Page");
                        }}
                        backgroundColor="black"
                        text="Finish running"
                    ></CustomButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
        minHeight: Dimensions.get("window").height - 50,
    },
});
