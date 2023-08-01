import { getData } from "./util";

export const getPokemonList = async (API_URI) => {
  let response = await getData(API_URI);
  return response;
};
