export default function receiveLanguage (state = [], action) {
    switch (action.type) {
        case('LANGUAGES'):
            return action.payload.data;
        default:
            return state
    }

}