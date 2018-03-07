import axios from 'axios';

const ROOT_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
const API_KEY = 'dict.1.1.20180306T132849Z.14ff39f8256705e3.d1b5b2e90994d13c87274dc55cd1688bc6471575';

let submitAction = function(word) {
/*
    const request = axios.get(ROOT_URL + API_KEY + '&lang=en-ru' + '&text=' + word)
*/
    return dispatch => {
        dispatch({type: 'GET_DATA_REQUEST'});
        axios.get(ROOT_URL + API_KEY + '&lang=en-ru' + '&text=' + word)
            .then(resp => {
                dispatch({type: 'TRANSLATE_WORD', payload: resp})
            })
            .catch(err => {
                dispatch({type: 'ERROR', payload: err});
                console.log(err);

            })
    }
    /*    .then((resp) => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        });
        console.log(request);
    return {
        type: 'TRANSLATE_WORD',
        payload: request
    }*/
};

let test = function (word) {
    console.log('cancel');
    const request = axios.get(ROOT_URL + API_KEY + '&lang=en-ru' + '&text=' + word)
        .then((resp) => {
            console.dir(resp);
        })
        .catch(err => {
            console.log(err);
        });
    return {
        type: 'TRANSLATE_WORD',
        payload: request
    }


};

export default {test, submitAction};

/*
let submitAction = function(word) {
    console.log('submit');

    return {
        type: 'TRANSLATE_WORD',
        payload: word
    }


};
let test = function(word) {
    console.log('test');

    return {
        type: 'TRANSLATE_WORD',
        payload: word
    }


};

module.exports = {submitAction, test};
*/
