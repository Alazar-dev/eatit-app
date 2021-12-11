import React from "react";
import tw from "tailwind-react-native-classnames";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Signup({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`p-0`}>
          <Image
            style={tw`w-full rounded-xl h-64`}
            source={require("../../assets/images/download.jpeg")}
            alt=""
          />
        </View>
        <View style={tw`py-5 px-8`}>
          <View style={tw`flex flex-row justify-between pb-10 px-14`}>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text>Sign-in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text>Sign-up</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`w-60`}>
            <Text>Full Name</Text>
            <TextInput style={tw`border-b-2 border-gray-400`} />
            <Text>Email</Text>
            <TextInput style={tw`border-b-2 border-gray-400`} />
            <Text>Password</Text>
            <TextInput style={tw`border-b-2 border-gray-400`} />
          </View>
          <View style={tw`flex flex-row justify-between px-5`}>
            <View style={tw`flex flex-row mt-3`}>
              <Text style={tw`mr-2 font-bold`}>Salary</Text>
              <TextInput style={tw`border rounded-lg w-14 p-2 h-8`} />
            </View>
            <View style={tw`w-28`}>
              <Picker>
                <Picker.Item label="Weekly" value="Weekly" />
                <Picker.Item label="Monthly" value="Monthly" />
              </Picker>
            </View>
          </View>
          <View style={tw`flex flex-row justify-between px-5`}>
            <View style={tw`flex flex-row mt-3`}>
              <Text style={tw`mt-2 mr-5 font-bold`}>Age</Text>
              <TextInput style={tw`border rounded-lg w-14 p-2 h-8`} />
            </View>
            <View style={tw`w-28`}>
              <Picker>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={tw`flex items-center w-full py-10`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={tw`bg-yellow-700 w-72 flex items-center py-4 rounded-3xl`}
          >
            <Text style={tw`text-white`}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
