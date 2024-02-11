import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course goal!"
                />
                <Button color={"purple"} title="Add Goal" />
            </View>
            <View style={styles.goalsContainer}>
                <Text>List Of Goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "violet",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "purple",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 4,
    },
});
