import fetch from 'isomorphic-fetch';

export default {
    getRandom() {
        const endpoint = 'https://yslt-api.herokuapp.com/album.json';
        return fetch(endpoint)
            .then(response => response.json())
            .catch(ex => ex);
    }
};
