import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import Favourites from "./routes/FavouritesScreen";
import HomeScreen from "./routes/HomeScreen";
import SearchComponent from "./components/Search";
import ROUTES from "./constants/routes";
import JokeDetail from "./components/JokeDetail";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const FavouritesStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ROUTES.MAIN_HOME}
        component={HomeScreen}
        options={{
          title: "Home",
          headerShown: false,
          headerTintColor: "#0e8df2",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <HomeStack.Screen name="Favourites" component={Favourites} />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.MAIN_JOKE}
        component={JokeDetail}
      />
    </HomeStack.Navigator>
  );
};

const FavouritesStackScreen = () => {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name={ROUTES.MAIN_FAVOURITES}
        component={Favourites}
        options={{
          title: "Favourites",
          headerTintColor: "#0e8df2",
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </FavouritesStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={ROUTES.MAIN_SEARCH}
        component={SearchComponent}
        options={{
          title: "Search",
          headerTintColor: "#0e8df2",
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator initialRouteName={ROUTES.MAIN_HOME}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              title: "Home",
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="home"
                  size={30}
                  color={focused ? "#0e8df2" : "#c8e5fc"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={FavouritesStackScreen}
            options={{
              title: "Favourites",
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="list"
                  size={30}
                  color={focused ? "#0e8df2" : "#c8e5fc"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
              title: "Search",
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="search"
                  size={30}
                  color={focused ? "#0e8df2" : "#c8e5fc"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
