export default function directionTranslate ( state=[], action ) {
    switch (action.type) {
        case ('SET_DIRECTION'):
            return action.payload;
        default:
            return state
    }
}