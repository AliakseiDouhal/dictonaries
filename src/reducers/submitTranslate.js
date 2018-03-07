export default function submitTranslate(state= [], action) {
    console.log('reducer');
    switch(action.type){
        case('TRANSLATE_WORD') :
            console.log('reducer', action.payload);
            return [
                ...state,
                action.payload.data.def[0].tr[0].text
            ];
        default:
            return state
    }

}