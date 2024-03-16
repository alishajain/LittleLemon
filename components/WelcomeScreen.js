import { View, Text } from "react-native";

export default function WelcomeScreen() {
    return (
        <View style={{backgroundColor: 'darkgrey'}}>
            <Text
            style={{
                fontSize: 30,
                color: '#EDEFEE',
                padding: 40,
                textAlign: 'center',
            }}
            >
                Welcome to Little Lemon
                <Text
                style= {{
                    fontSize: 24,
                    padding: 20,
                    marginVertical: 8,
                    color: '#EDEFEE',
                    textAlign: 'center'
                }}
                >
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </Text>
        </View>
    );
}