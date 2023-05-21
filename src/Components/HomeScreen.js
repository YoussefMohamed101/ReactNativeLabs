import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderMovie = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() => {
          navigation.navigate("Movie", { id: item.id });
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.moviePoster}
        />
        <Text style={styles.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    movieContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    moviePoster: {
      width: 80,
      height: 120,
      marginRight: 10,
    },
    movieTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
