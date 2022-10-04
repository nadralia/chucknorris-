interface Image {
  name: string;
  image: any;
}

const images: Array<Image> = [
  {
    name: "animal",
    image: require("../assets/animal.png"),
  },
  {
    name: "career",
    image: require("../assets/career.png"),
  },
  {
    name: "celebrity",
    image: require("../assets/celebrity.png"),
  },
  {
    name: "dev",
    image: require("../assets/dev.png"),
  },
  {
    name: "explicit",
    image: require("../assets/explicit.png"),
  },
  {
    name: "fashion",
    image: require("../assets/fashion.png"),
  },
  {
    name: "food",
    image: require("../assets/food.png"),
  },
  {
    name: "history",
    image: require("../assets/history.png"),
  },
  {
    name: "money",
    image: require("../assets/money.png"),
  },
  {
    name: "movie",
    image: require("../assets/movie.png"),
  },
  {
    name: "music",
    image: require("../assets/music.png"),
  },
  {
    name: "political",
    image: require("../assets/political.png"),
  },
  {
    name: "religion",
    image: require("../assets/religion.png"),
  },
  {
    name: "science",
    image: require("../assets/science.png"),
  },
  {
    name: "sport",
    image: require("../assets/sport.png"),
  },
  {
    name: "travel",
    image: require("../assets/travel.png"),
  },
];

export const GetImage = (name: string) => {
  const image = images.find((image) => image.name === name);
  return image ? image?.image : null;
};
