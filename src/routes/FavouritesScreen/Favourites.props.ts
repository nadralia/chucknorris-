import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamList } from "../../types/routes";

import ROUTES from "../../constants/routes";

export type FavouritesProps = NativeStackScreenProps<
  ParamList,
  ROUTES.MAIN_FAVOURITES
>;

export type FavouritesGeneratedProps = {};
