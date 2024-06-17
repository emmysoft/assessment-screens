import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { router } from 'expo-router';

const home = () => {
    return (
        <View style={tw`flex justify-center items-center gap-8 p-4 bg-[#020912] min-h-full`}>
            <View style={tw`pt-8`}>
                <Image source={require("../../assets/images/myavatar.png")} alt="my-avatar" style={tw`ml-72`} />
            </View>

            <View style={tw`gap-4 m-4`}>
                <Text style={tw`text-white font-bold text-lg text-center`}>Tap to Send</Text>
                <Text style={tw`text-[#E4E4E4] font-bold text-lg text-center`}>Long tap to receive</Text>
                <Image source={require('../../assets/images/lightening.png')} alt="lightening-image" />
            </View>

            <TouchableOpacity onPress={() => router.push('/dashboard')} style={tw`rounded-tl-3xl rounded-tr-3xl bg-[#101A1E] p-4 top-24`}>
                <Image source={require("../../assets/images/drag-icon.png")} alt="drag-icon" style={tw`m-auto`} />
                <View style={tw`flex flex-row justify-start items-center gap-48 min-w-full p-4`}>
                    <View style={tw`gap-2`}>
                        <Text style={tw`text-[#A4A4A3] font-light`}>Good afternoon</Text>
                        <Text style={tw`text-white font-bold`}>Joshua Ajiboye</Text>
                    </View>
                    <Image source={require('../../assets/images/myavatar2.png')} alt='pics' />
                </View>
                <Image source={require('../../assets/images/bottompics.png')} alt="pics" style={tw`p-4`} />
            </TouchableOpacity>
        </View>
    )
}

export default home