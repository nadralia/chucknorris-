import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [errorMeg, setErrorMeg] = useState({});
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        if (responseJson.status === 400) {
          setErrorMeg(responseJson);
        } else {
          setFilteredDataSource(responseJson.result);
          setMasterDataSource(responseJson.result);
          setErrorMeg("");
        }
      })
      .catch((error) => {
        setErrorMeg(error);
      });
  }, [search]);

  const searchFilterFunction = (text: any) => {
    console.log("text", text);
    // Check if searched text is not blank
    if (text && masterDataSource) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  console.log("filteredDataSource", filteredDataSource);

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.value);
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.value.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  console.log("errorMeg", errorMeg);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          onChangeText={(text: string) => searchFilterFunction(text)}
          onClear={() => searchFilterFunction("")}
          placeholder="Type Here..."
          value={search}
        />
        {errorMeg && <Text style={{ margin: 20 }}>{errorMeg.message}</Text>}
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
});

export default SearchComponent;
