import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://free.currconv.com/api/v7",
});

const baseURL = 'http://free.currconv.com/api/v7';

export function getConversao(convertido, converter) {
  const url = `/convert?q=${convertido}_${converter}&compact=ultra&apiKey=03850b55c33fbf81d2f2`;
  const requestUrl = `${baseURL}${url}`;
  return httpClient.get(requestUrl);
}

export function getArrayMoedas() {
  const url = '/currencies?apiKey=03850b55c33fbf81d2f2';
  const requestUrl = `${baseURL}${url}`;
  return httpClient.get(requestUrl);
}
