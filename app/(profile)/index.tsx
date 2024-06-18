import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const index = () => {
    return (
        <View style={tw`flex justify-center items-center gap-5 bg-[#0B0B0B] h-full p-4`}>
            <View style={tw`p-4`}>
                <Image source={require("../../assets/images/drag-icon.png")} alt="drag" />
            </View>

            <View style={tw`flex flex-row justify-center items-center w-full gap-32`}>
                <View style={tw`flex justify-center items-center`}>
                    <Text style={tw`text-sm text-[#A4A4A3]`}>Good afternoon</Text>
                    <Text style={tw`text-white font-bold`}>Joshua Ajiboye</Text>
                </View>
                <View style={tw`flex-row justify-end items-center gap-4`}>
                    <Image source={require('../../assets/images/inline-avatar.png')} alt='pics' />
                    <Image source={require('../../assets/images/myavatar2.png')} />
                </View>
            </View>

            <View style={tw`p-4 gap-4`}>
                <TouchableOpacity>
                    <Image source={require("../../assets/images/MyCards.png")} alt='card' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../assets/images/MyCards2.png")} alt='card' />
                </TouchableOpacity>
            </View>

            <View style={tw`p-4 rounded-md`}>
                <View style={tw`flex flex-row justify-between items-center bg-[#1E1E1E] w-full p-4 rounded-tl-xl rounded-tr-xl`}>
                    <Text style={tw`text-[#808080] font-bold`}>RECENT TRANSACTIONS</Text>
                    <Ionicons name='arrow-forward' size={20} color={'#fff'} />
                </View>
                <View style={tw`bg-[#181818] p-4 w-full rounded-bl-xl rounded-br-xl gap-5`}>
                    <View style={tw`flex flex-row justify-between items-center w-full`}>
                        <View style={tw`flex flex-row justify-center items-center gap-2`}>
                            <Image source={require("../../assets/images/transfer-avatar.png")} alt="avatar" />
                            <View style={tw`flex justify-start items-start`}>
                                <Text style={tw`text-white font-bold`}>Sanda King-David Ayodele</Text>
                                <Text style={tw`text-[#808080] font-light`}>Transfer</Text>
                            </View>
                        </View>
                        <Text style={tw`text-[#808080] font-bold`}>&#x20A6;2,999.00</Text>
                    </View>

                    <View style={tw`flex flex-row justify-between items-center`}>
                        <View style={tw`flex flex-row justify-center items-center gap-2`}>
                            <Image source={require("../../assets/images/transfer-avatar2.png")} alt="avatar" />
                            <View style={tw`flex justify-start items-start`}>
                                <Text style={tw`text-white font-bold`}>Bayo Adekunle</Text>
                                <Text style={tw`text-[#808080] font-light`}>Transfer</Text>
                            </View>
                        </View>
                        <Text style={tw`text-[#808080] font-bold`}>&#x20A6;230,800.00</Text>
                    </View>

                    <View style={tw`flex flex-row justify-between items-center`}>
                        <View style={tw`flex flex-row justify-center items-center gap-2`}>
                            <Image source={require("../../assets/images/transfer-avatar3.png")} alt="avatar" />
                            <View style={tw`flex justify-start items-start`}>
                                <Text style={tw`text-white font-bold`}>Simi Adegunle</Text>
                                <Text style={tw`text-[#808080] font-light`}>Transfer</Text>
                            </View>
                        </View>
                        <Text style={tw`text-[#808080] font-bold`}>&#x20A6;230,000.00</Text>
                    </View>
                </View>
            </View>

            <View style={tw`rounded-md p-4`}>
                <View style={tw`flex flex-row justify-between items-center bg-[#1E1E1E] w-full p-4 rounded-tl-xl rounded-tr-xl`}>
                    <Text style={tw`text-[#808080] font-bold`}>BENEFICIARIES</Text>
                    <Ionicons name='arrow-forward' size={20} color={'#fff'} />
                </View>
                <View style={tw`flex flex-row justify-center items-center gap-8 bg-[#181818] min-w-full p-4 rounded-bl-xl rounded-br-xl`}>
                    <View style={tw`flex justify-center items-center gap-2`}>
                        <Image source={require('../../assets/images/johndoe.png')} />
                        <Text style={tw`text-white font-bold`}>Josh</Text>
                    </View>
                    <View style={tw`flex justify-center items-center gap-2`}>
                        <Image source={require('../../assets/images/girl.png')} />
                        <Text style={tw`text-white font-bold`}>Ife</Text>
                    </View>
                    <View style={tw`flex justify-center items-center gap-2`}>
                        <Image source={require('../../assets/images/boy.png')} />
                        <Text style={tw`text-white font-bold`}>King-David</Text>
                    </View>
                    <TouchableOpacity style={tw`rounded-full bg-[#242C30] p-2`}>
                        <Ionicons name='add' size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default index;