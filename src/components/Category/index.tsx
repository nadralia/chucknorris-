import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import ROUTES from "../../constants/routes";

import { GetImage } from "../../utils/backgroundImage";

const Category = ({ category }: { category: string }) => {
  const navigation = useNavigation();

  const imageSource = GetImage(category);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.MAIN_JOKE, { category })}
    >
      <View style={styles.container}>
        <ImageBackground source={imageSource}>
          <Text style={styles.text}>{category}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
