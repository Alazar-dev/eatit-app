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
          <View>
            <View style={tw`w-60`}>
              <Text>Full Name</Text>
              <TextInput style={tw`border-b-2 border-gray-400`} />
              <Text>Email</Text>
              <TextInput style={tw`border-b-2 border-gray-400`} />
              <Text>Password</Text>
              <TextInput style={tw`border-b-2 border-gray-400`} />
              <TouchableOpacity>
                <Text style={tw`text-red-500`}>Forgot Password?</Text>
              </TouchableOpacity>
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
