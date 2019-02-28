import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export function getUsers(keyword) {
  return axios.get('/search/users', {
    params: {
      q: keyword
    }
  })
}

export function getUser(user) {
  return axios.get(`/users/${user}`)
}
