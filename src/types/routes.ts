import ROUTES from "../constants/routes";

export type ParamList = {
  // AUTH ROUTE ENTRY POINTS
  [ROUTES.AUTH_FORGOT_PASSWORD_SUCCESS]: undefined;
  [ROUTES.AUTH_FORGOT_PASSWORD]: undefined;
  [ROUTES.AUTH_REGISTRATION]: undefined;
  [ROUTES.AUTH_LOGIN]: undefined;
  // MAIN ROUTE ENTRY
  [ROUTES.MAIN_HOME]: undefined;
  [ROUTES.MAIN_FAVOURITES]: undefined;
  [ROUTES.MAIN_JOKE]: undefined;
  [ROUTES.MAIN_SEARCH]: undefined;
};
