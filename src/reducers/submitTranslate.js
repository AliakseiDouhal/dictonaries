export default function submitTranslate(state = [], action) {
    switch(action.type){
        case('TRANSLATE_WORD') :
            return [
                action.payload.data.def[0].tr[0].text
            ];
        case ('ERROR'):
            return [];
        default:
            return state
    }

}