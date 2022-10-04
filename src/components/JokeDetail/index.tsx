import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface JokeType {
  categories: string[];
  created_at: string;
  value: string;
  icon_url: string;
  url: string;
  id: string;
  updated_at: string;
}

const Joke = ({ joke }: { joke: JokeType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Category : {joke.categories}</Text>
      <Text>{joke.value}</Text>
    </View>
  );
};

const JokeDetail = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const [joke, setJoke] = useState<JokeType>({
    id: "",
    value: "",
    categories: [],
    created_at: "",
    icon_url: "",
    updated_at: "",
    url: "",
  });

  console.log("-------route-----", route);

  const [loading, setLoading] = useState(true);

  const fetchJoke = async (category: string) => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke(route.params.category);
  }, [route.params.category]);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.jokeContainer}>
        {joke && !loading && <Joke joke={joke} />}
        {!joke && <p>Loading...</p>}
      </View>
    </View>
  );
};

export default JokeDetail;
