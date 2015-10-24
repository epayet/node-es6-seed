import request from 'request-promise';
import config from '../config.json';

let requestApi = {
    get(url){
        return request(`${config.apiUrl}${url}`).then(response => JSON.parse(response));
    }
};

export default requestApi;