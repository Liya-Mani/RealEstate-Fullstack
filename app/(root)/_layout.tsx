import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import{Text, View} from "react-native";

export default function AuthRoutesLayout(){
    const{isSignedIn, isLoaded} = useAuth();
    
    if(!isLoaded) {
        return null;
    }

    //Redirect based on auth state
    if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

    return <Stack screenOptions={{ headerShown: false }} />;
 
}