import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import tw from 'twrnc';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';


SplashScreen.preventAutoHideAsync();

const onboarding = () => {
    // Keep the splash screen visible while we fetch resources
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(Entypo.font);
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={tw`flex-1 justify-center items-center gap-5 p-4 bg-[#020912]`}>
            <Image source={require('../../assets/images/onboarding.png')} alt="onboarding"/>
            <TouchableOpacity onPress={() => router.push('/home')} style={tw`rounded-md flex flex-row justify-center items-center px-12 py-3 bg-[#FB5521]`}>
                <Text style={tw`text-white text-center text-5xl font-light`}>Send</Text>
            </TouchableOpacity>
            <Text style={tw`text-white text-center text-5xl`}>Receive</Text>
            <Text style={tw`text-white text-center text-5xl`}>Connect</Text>

            <TouchableOpacity onPress={() => router.push('/dashboard')} style={tw`rounded-md flex flex-row justify-center items-center px-3 py-2 bg-[#FFFFFF]`}>
                <Text style={tw`text-white text-center text-[#020912] text-lg`}>Go to Dashboard</Text>
                <Image source={require("../../assets/images/arrow-right.png")} alt="arrow-right" />
            </TouchableOpacity>
        </View>
    )
}

export default onboarding;