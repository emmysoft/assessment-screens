import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { router } from 'expo-router';

const index = () => {
    return (
        <View style={tw`flex-1 justify-center items-center gap-5 p-4 bg-[#020912]`}>
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

export default index;