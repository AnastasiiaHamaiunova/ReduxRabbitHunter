export function positionReducer (state = {x: 0, y: 0}, action){
    switch(action.type){
        case 'CHANGE_POSITION':
            return Object.assign({}, {x: action.x, y: action.y});

        default:
            return state;
    }
}
export function huntersReducer(state, action){
    if(state === undefined){
        let storageState = localStorage.getItem('hunters');
        if(storageState !== null){
            state = JSON.parse(storageState);
        }
        else{
            state = [];
        }
    }

    switch(action.type){
        case 'ADD_HUNTER':
            let hunters =  [...state, Object.assign({}, action.hunter)];
            localStorage.setItem('hunters',JSON.stringify(hunters));
            return hunters;
        default:
            return state;
    }
}