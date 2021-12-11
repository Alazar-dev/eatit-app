import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import CheckBox from "expo-checkbox";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ShareFood({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex flex-row justify-between px-14 py-8`}>
          <Text style={tw`text-3xl font-bold`}>Share Food</Text>
        </View>
        <View style={tw`flex flex-row justify-between px-14 py-2`}>
          <Text style={tw`text-2xl font-bold`}>Share Food To Your Friend</Text>
          <View style={tw`flex flex-row`}>
            <Icon size={20} name="sliders" color="#ca8a04" />
            <Text style={tw`ml-3`}>Dec 1-7</Text>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`px-8`}>
            <View style={tw`flex flex-row`}>
              <CheckBox />
              <Text style={tw`font-bold text-lg pl-3`}>Week 1</Text>
            </View>
            <View style={tw`flex flex-row`}>
              <CheckBox />
              <Text style={tw`font-bold text-lg pl-3`}>Week 2</Text>
            </View>
            <View style={tw`flex flex-row`}>
              <CheckBox />
              <Text style={tw`font-bold text-lg pl-3`}>Week 3</Text>
            </View>
            <View style={tw`flex flex-row`}>
              <CheckBox />
              <Text style={tw`font-bold text-lg pl-3`}>Week 4</Text>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center py-4`}>
          <Text style={tw`font-bold text-2xl`}>To:</Text>
          <TextInput
            placeholder="Enter email address to share"
            style={tw`pl-3 border w-60 rounded-xl`}
          />
        </View>
        <View style={tw`flex flex-row justify-end mt-4 pr-10`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={tw`bg-yellow-600 w-48 rounded-2xl py-3 w-20`}
          >
            <Text style={tw`text-white font-bold text-center`}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row justify-between px-12 py-4`}>
          <Image
            style={tw`w-14 h-14 rounded-full`}
            source={require("../assets/images/download.jpeg")}
          />
          <Text style={tw`font-bold text-xl px-8`}>
            Dawit Shared you 1 week food plan
          </Text>
        </View>
        <View style={tw`flex flex-row justify-between px-12 py-4`}>
          <Image
            style={tw`w-14 h-14 rounded-full`}
            source={require("../assets/images/download.jpeg")}
          />
          <Text style={tw`font-bold text-xl px-8`}>
            Dawit Shared you 1 week food plan
          </Text>
        </View>
        <View style={tw`flex flex-row justify-between px-12 py-4`}>
          <Image
            style={tw`w-14 h-14 rounded-full`}
            source={require("../assets/images/download.jpeg")}
          />
          <Text style={tw`font-bold text-xl px-8`}>
            Dawit Shared you 1 week food plan
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
