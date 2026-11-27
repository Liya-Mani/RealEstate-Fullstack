import{Text, View, ScrollView, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import react from 'react'
import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";

export default function Profile(){
    const router = useRouter();
    const {signOut} = useAuth();
    
    const handleSignOut = async () => {
       try {
        await signOut();
        router.replace("/sign-in")
       } catch(error) {
        console.error("Error signing out:", error)
       }
    }

    return(
     <SafeAreaView>
        <Text> Profile </Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>SignOut</Text>
            </TouchableOpacity>
     </SafeAreaView>
    );
}