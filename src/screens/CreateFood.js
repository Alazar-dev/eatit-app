import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "expo-checkbox";
import tw from "tailwind-react-native-classnames";

export default function CreateFood({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-3 py-6 ml-6 flex flex-row`} horizontal>
          <View style={tw`px-4`}>
            <TouchableOpacity onPress={() => navigation.navigate("Breakfast")}>
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
            <TouchableOpacity>
              <Text style={tw`text-black font-bold text-lg`}>
                Create{"\n"} Food
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`px-14 py-6`}>
          <Text>Name of the Food</Text>
          <TextInput style={tw`border-b-2 border-gray-400`} />
        </View>
        <View>
          <View style={tw`flex flex-row justify-between px-14 py-10`}>
            <Text style={tw`text-2xl font-bold`}>Ingredients</Text>
          </View>
          <Text style={tw`font-bold pb-6 ml-14 text-lg`}>Vegetables</Text>
          <View style={tw`flex flex-row justify-center`}>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Tomato</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Potato</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Carrot</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Onion</Text>
              </View>
            </View>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Garlic</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Cabbage</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Broccoli</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Zucchini</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={tw`font-bold py-6 ml-14 text-lg`}>Meat</Text>
          <View style={tw`flex flex-row justify-center`}>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Beef</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Hum</Text>
              </View>
            </View>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Chicken</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Banana</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={tw`font-bold py-6 ml-14 text-lg`}>Dairy</Text>
          <View style={tw`flex flex-row justify-center`}>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Cheese</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Milk</Text>
              </View>
            </View>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Cream</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Yoghurt</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={tw`font-bold py-6 ml-14 text-lg`}>Fruits</Text>
          <View style={tw`flex flex-row justify-center`}>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Mango</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Banana</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Orange</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Apples</Text>
              </View>
            </View>
            <View style={tw`px-8`}>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Papaya</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Cherry</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Lemon</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <CheckBox />
                <Text style={tw`font-bold text-lg pl-3`}>Coconut</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex flex-row justify-center mt-8 py-16`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={tw`bg-yellow-600 w-48 rounded-2xl py-3`}
            >
              <Text style={tw`text-white font-bold text-center`}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
