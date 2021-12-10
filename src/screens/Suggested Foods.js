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

export default function SuggestedFoods({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-3 py-6 ml-6 flex flex-row`} horizontal>
          <View style={tw`px-4`}>
            <TouchableOpacity>
              <Text style={tw`text-black font-bold text-lg`}>
                Suggested {"\n"} Foods
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`px-4`}>
            <TouchableOpacity>
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
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
          <View style={tw`mx-6`}>
            <Image
              style={tw`rounded-full h-28 w-28`}
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
                  500
                </Text>
                <Text style={tw`text-yellow-600`}>calories</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
