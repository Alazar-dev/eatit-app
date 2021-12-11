import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`py-4 flex flex-row justify-between mr-10`}>
          <Text style={tw`text-2xl ml-6 font-bold`}>Healthy Food</Text>
          <View style={tw`flex flex-row`}>
            <Icon name="sliders" size={20} />
            <Text style={tw`text-xl  text-yellow-600`}>Week</Text>
          </View>
        </View>
        <ScrollView style={tw`p-3`} horizontal>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Monday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Tuesday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Wednesday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Friday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Monday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Saturday</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-gray-500 text-lg`}>Sunday</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <TouchableOpacity onPress={() => navigation.navigate("Breakfast")}>
            <View style={tw`mx-12`}>
              <Image
                style={tw`rounded-full w-48`}
                source={require("../assets/images/download.jpeg")}
              />
              <Text style={tw`font-bold text-yellow-600 text-center`}>
                Breakfast
              </Text>
              <Text style={tw`font-bold text-center text-2xl py-2`}>
                Fish Salad
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
                    215
                  </Text>
                  <Text style={tw`text-yellow-600`}>calories</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Lunch")}
            style={tw`mx-12`}
          >
            <Image
              style={tw`rounded-full w-48`}
              source={require("../assets/images/download.jpeg")}
            />
            <Text style={tw`font-bold text-yellow-600 text-center`}>Lunch</Text>
            <Text style={tw`font-bold text-center text-2xl py-2`}>
              Stir fried beef
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
                  315
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dinner")}>
            <Image
              style={tw`rounded-full w-48`}
              source={require("../assets/images/download.jpeg")}
            />
            <Text style={tw`font-bold text-yellow-600 text-center`}>
              Dinner
            </Text>
            <Text style={tw`font-bold text-center text-2xl py-2`}>
              Chicken Salad with fish
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
                  110
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={tw`flex flex-row justify-between px-14 py-10`}>
          <Text style={tw`text-2xl font-bold`}>Grocery List</Text>
          <View style={tw`flex flex-row`}>
            <Icon size={20} name="sliders" color="#ca8a04" />
            <Text style={tw`ml-3`}>Dec 1-7</Text>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`px-8`}>
            <Text style={tw`font-bold text-lg`}>Oil</Text>
            <Text style={tw`font-bold text-lg`}>Bread</Text>
            <Text style={tw`font-bold text-lg`}>Onion</Text>
            <Text style={tw`font-bold text-lg`}>Fish</Text>
          </View>
          <View style={tw`px-8`}>
            <Text style={tw`font-bold text-lg`}>2 litter</Text>
            <Text style={tw`font-bold text-lg`}>6 pieces</Text>
            <Text style={tw`font-bold text-lg`}>2 kilos</Text>
            <Text style={tw`font-bold text-lg`}>a piece</Text>
          </View>
        </View>
        <View style={tw`flex flex-row justify-between px-14 py-10`}>
          <Text style={tw`text-2xl font-bold`}>One Day Plan</Text>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <Text style={tw`mt-4`}>Budget</Text>
          <View style={tw`w-28`}>
            <Picker>
              <Picker.Item label="Weekly" value="Weekly" />
              <Picker.Item label="Monthly" value="Monthly" />
            </Picker>
          </View>
          <Icon style={tw`mt-2`} name="dollar" />
        </View>
        <View style={tw`flex flex-row justify-center my-8`}>
          <TouchableOpacity style={tw`bg-yellow-600 w-48 rounded-2xl py-3`}>
            <Text style={tw`text-white font-bold text-center`}>Total $ 25</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
