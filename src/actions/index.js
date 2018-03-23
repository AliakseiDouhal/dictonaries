import axios from 'axios';

const ROOT_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/';
const API_KEY = 'dict.1.1.20180306T132849Z.14ff39f8256705e3.d1b5b2e90994d13c87274dc55cd1688bc6471575';

let submitAction = function(word, direction) {
    return dispatch => {
        dispatch({type: 'GET_DATA_REQUEST'});
        axios.get(ROOT_URL + 'lookup?key=' + API_KEY + '&lang='+  direction + '&text=' + word)
            .then(resp => {
                dispatch({type: 'TRANSLATE_WORD', payload: resp})
            })
            .catch(err => {
                dispatch({type: 'ERROR', payload: err});

            })
    }
};

let getLanguage = function () {
  return dispatch => {
      dispatch({type: 'RECEIVE_LANGUAGES'});
      axios.get(ROOT_URL + 'getLangs?key=' + API_KEY)
          .then(resp => {
              dispatch({type: 'LANGUAGES', payload: resp})
          })
          .catch(err => {
              dispatch({type: 'ERROR', payload: err});

          })
  }
};

let setDirectionTranslate = function (direction) {
    return {
        type:'SET_DIRECTION',
        payload: direction
    }
};

export default {submitAction, getLanguage, setDirectionTranslate};
