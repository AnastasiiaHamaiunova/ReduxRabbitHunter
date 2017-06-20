export const changePosition = (x, y) => {
    return {
        type: 'CHANGE_POSITION',
        x,
        y
    }
}
export const addHunter = (hunter) => {
    return{
        type: 'ADD_HUNTER',
        hunter
    }
}