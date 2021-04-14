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

export function createJog(jog) {
  return axios({
    method: 'post',
    url: 'https://jogtracker.herokuapp.com/api/v1/data/jog',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jog-tracker-token')}`,
    },
    data: {
      date: jog.date,
      time: jog.time,
      distance: jog.distance,
    }
  })
}

export function updateJog(jog) {
  return axios({
    method: 'put',
    url: 'https://jogtracker.herokuapp.com/api/v1/data/jog',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jog-tracker-token')}`,
    },
    data: {
      date: jog.date,
      time: jog.time,
      distance: jog.distance,
      jog_id: jog.id,
      user_id: jog.user_id,
    }
  })
}