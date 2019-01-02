import axios from 'axios';

const baseUrl = 'http://www.json-generator.com/api/json/get'


const API = {
  getRandomUsers: () => {
    return axios.get(`${baseUrl}/cfEhMBpvci?indent=2`)
      .then( data => {
        return data.data;
      })
  }

}

export default API;
