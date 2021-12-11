import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Lunch({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-3 py-6 ml-6  flex flex-row`} horizontal>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-black font-bold text-lg`}>
                Suggested {"\n"} Foods
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Change Food")}
            >
              <Text style={tw`text-black font-bold text-lg`}>
                Change {"\n"} Food
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Create Food")}
            >
              <Text style={tw`text-black font-bold text-lg`}>
                Create{"\n"} Food
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tw`flex flex-row justify-center`}
          onPress={() => navigation.navigate("breakfast")}
        >
          <View style={tw`mx-12`}>
            <Image
              style={tw`rounded-full w-48`}
              source={require("../assets/images/download.jpeg")}
            />
            <Text style={tw`font-bold text-yellow-600 text-center`}>Lunch</Text>
            <Text style={tw`font-bold text-center text-2xl py-2`}>
              Stir Fried Beef
            </Text>
            <View style={tw`flex flex-row justify-between px-6`}>
              <View>
                <Text
                  style={tw`font-bold text-3xl text-center text-yellow-600`}
                >
                  25
                </Text>
                <Text style={tw`text-yellow-600`}>dollars</Text>
              </View>
              <View>
                <Text
                  style={tw`font-bold text-3xl text-center text-yellow-600`}
                >
                  255
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={tw`flex flex-row justify-between px-14 pt-10`}>
            <Text style={tw`text-2xl font-bold`}>Ingredients</Text>
          </View>
          <View style={tw`flex `}>
            <View style={tw`pl-14`}>
              <Text style={tw`text-lg`}>
                Meat, cheese, mushroom0m, broccoli, cauliflower, onion,
                tomatoes, oil, bread
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center my-8`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Share Food")}
            style={tw`bg-yellow-600 w-48 rounded-2xl py-3`}
          >
            <Text style={tw`text-white font-bold text-center`}>Share Food</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
