import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Hugo is the BEST!!!</Text>
            </View>
            <Text
                style={{
                    margin: 16,
                    borderWidth: 1,
                    borderColor: "red",
                    padding: 16,
                }}
            >
                This is a test
            </Text>
            <Button title="Press Me!" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
