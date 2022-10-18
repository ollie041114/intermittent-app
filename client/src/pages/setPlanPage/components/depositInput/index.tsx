import React, { Dispatch, SetStateAction } from "react";
import CurrencyInput from "react-native-currency-input";
import {
    Alert,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";

export const DepositInput = ({
    setDeposit,
    deposit,
}: {
    setDeposit: Dispatch<SetStateAction<number>>;
    deposit: number;
}) => {
    const onChanged = (value: number | null) => {
        setDeposit(value || 0);
    };

    return (
        <View style={{ width: "70%" }}>
            <CurrencyInput
                style={styles.textInput}
                prefix="W "
                onChangeValue={onChanged}
                value={deposit}
                delimiter=","
                separator="."
                precision={0}
                defaultValue="0"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
