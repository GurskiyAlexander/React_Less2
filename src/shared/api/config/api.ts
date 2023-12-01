import axios from 'axios'

export const mainApi = axios.create({
  baseURL: 'https://stoplight.io/mocks/kode-education/kode-bank/27774161',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer 123',
  },
})

export const authApi = axios.create({
  baseURL: 'https://stoplight.io/mocks/kode-education/kode-bank/27774162/',
  headers: {
    Accept: 'application/json',
  },
})
