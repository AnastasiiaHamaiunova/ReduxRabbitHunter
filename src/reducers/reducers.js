export function positionReducer (state = {x: 0, y: 0}, action){
    switch(action.type){
        case 'CHANGE_POSITION':
            return Object.assign({}, {x: action.x, y: action.y});

        default:
            return state;
    }
}
export function huntersReducer(state = [], action){
    switch(action.type){
        case 'ADD_HUNTER':
            return [...state, Object.assign({}, action.hunter)];

        default:
            return state;
    }
}