import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://pokeapi.salestock.net/api/v2/'
})

export function GET (endpoint, params = {}) {
  return instance.get(endpoint, {params})
}
