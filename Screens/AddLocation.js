import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { addLocationToFirestore } from "../firebase/FirestoreController";
import { containerStyles } from "../Styles/Styles";

export default function AddLocationScreen({ navigation }) {

    const [locationName, setLocationName] = useState('');
    const [locationDescription, setLocationDescription] = useState('');
    const [locationRating, setLocationRating] = useState(0);

    const saveLocation = () => {
        addLocationToFirestore(locationName, locationDescription, locationRating);
        setLocationName('');
        setLocationDescription('');
        setLocationRating(0);
        navigation.goBack();
        console.log("New Location Added: ", { locationName, locationDescription, locationRating });
    };

    return (
        <View style={containerStyles.wrapper}>
            <TextInput
                label={'Location Name'}
                value={locationName}
                onChangeText={setLocationName}
                style={containerStyles.inputField}
            />

            <TextInput
                label={'Location Description'}
                value={locationDescription}
                onChangeText={setLocationDescription}
                style={containerStyles.inputField}
            />

            <View style={containerStyles.ratingWrapper}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => setLocationRating(index + 1)}>
                        <MaterialIcons
                            name={index < locationRating ? "star" : "star-border"}
                            size={30}
                            color="gold"
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Button mode='contained' onPress={saveLocation} style={containerStyles.submitButton}>
                Add New Location
            </Button>
        </View>
    );
}
