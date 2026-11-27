import { useAuth } from '@clerk/expo';
import { Redirect } from "expo-router";
import{Text, View} from "react-native";

export default function Index(){
    const{isSignedIn, isLoaded} = useAuth();
    
    if(!isLoaded) return null;

    //Redirect based on auth state
    if (isSignedIn) {
        return <Redirect href="/(root)/(tabs)" />;

    }
    
    return <Redirect href="/(auth)/sign-in" />;
 
}