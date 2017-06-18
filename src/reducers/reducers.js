export default function positionReducer (state = {}, action){
    switch(action.type){
        case 'CHANGE_POSITION':
            return Object.assign({}, {x: action.x, y: action.y});

        default:
            return state;
    }
}