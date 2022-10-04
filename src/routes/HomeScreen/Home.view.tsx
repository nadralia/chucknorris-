import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "../../components/Category";
import SearchComponent from "../../components/Search";

const HomeView = () => {
  const [categories, setCategories] = React.useState([]);
  const [searching , setSearching] = React.useState("");
  const getCategories = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    setCategories(data);
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <View>
      <ScrollView>
        <View>
          <SearchComponent />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {" "}
            Select Any Joke Category
          </Text>
        </View>
        <View>
          {categories &&
            categories.map((category) => (
              <Category key={category} category={category} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeView;
