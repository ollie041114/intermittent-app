import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { CustomButton } from "../../shared/customButton";
import { Plan } from "shared/entities/plan.entity";
import { RunningPlan } from "shared/entities/runningPlan.entity";
import { TodayPlan } from "./components/todayPlan";
import { dateNowKR } from "utils/getDateNow";

const weekNamesArray: string[] = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
];

export const CheckPlanPage = ({
    route,
    navigation,
}: {
    route: any;
    navigation: StackNavigationProp<any, any>;
}) => {
    //checkbox array

    const currentDate: Date = dateNowKR();
    const currentWeekday: number = currentDate.getDay();
    const currentWeekdayName: string = weekNamesArray[currentWeekday];
    const { plansFromServer } = route.params;
    const plansToday: Plan[] = [];
    plansFromServer.forEach((planRead: any) => {
        if (Object.keys(planRead).length == 0) return;
        if (!planRead[currentWeekdayName]) return;
        const planAdd = new Plan();
        planAdd.depositAmount = planRead.depositAmount;
        planAdd.hoursPerDay = planRead.hoursPerDay;
        planAdd.weekMap.set("mon", planRead.mon);
        planAdd.weekMap.set("tue", planRead.tue);
        planAdd.weekMap.set("wed", planRead.wed);
        planAdd.weekMap.set("thu", planRead.thu);
        planAdd.weekMap.set("fri", planRead.fri);
        planAdd.weekMap.set("sat", planRead.sat);
        planAdd.weekMap.set("sun", planRead.sun);
        plansToday.push(planAdd);
    });
    const [selectedPlan, selectPlan] = useState(new Plan());
    const [selected, select] = useState(false);

    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    {plansToday.length > 0 ? (
                        <View style={styles.container}>
                            <Text style={styles.title}>
                                Choose the training plan for{" "}
                                {currentWeekdayName}
                            </Text>
                            {plansToday.map((plan, i) => {
                                return (
                                    <TodayPlan
                                        select={select}
                                        selectPlan={selectPlan}
                                        plan={plan}
                                        key={i}
                                    ></TodayPlan>
                                );
                            })}

                            <CustomButton
                                onPress={() => {
                                    const runningPlan: RunningPlan = {
                                        depositAmount:
                                            selectedPlan.depositAmount,
                                        hoursPerDay: selectedPlan.hoursPerDay,
                                    };
                                    navigation.navigate("Start Running Page", {
                                        startTime: Date.now(),
                                        runningPlan,
                                    });
                                }}
                                backgroundColor={selected ? "black" : "grey"}
                                text="Start running"
                            ></CustomButton>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.title}>
                                Currently is not a training day
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        margin: 40,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        paddingBottom: 50,
        minHeight: Dimensions.get("window").height - 50,
    },
    text: {
        color: "gray",
    },
});
