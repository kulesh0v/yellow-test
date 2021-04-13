import axios from 'axios';

export function auth() {
  return axios({
    method: 'post',
    url: 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    data: 'uuid=hello',
  });
}

export function getJogs() {
  return axios({
    method: 'get',
    url: 'https://jogtracker.herokuapp.com/api/v1/data/sync',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jog-tracker-token')}`,
    }
  })
}