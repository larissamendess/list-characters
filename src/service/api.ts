import axios from "axios";
import type { typesCharacters } from "../types/typesCharacters";

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const getCharacters = async (page = 1, search: string): Promise<ApiResponse<typesCharacters>> => {
  const response = await axios.get(`https://swapi.dev/api/people/?page=${page}&search=${search}`);
  return response.data;
};