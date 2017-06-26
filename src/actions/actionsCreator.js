export const changePosition = () => {
    let x = Math.floor((Math.random() * 500) + 1);
    let y = Math.floor((Math.random() * 500) + 1);

    return {
        type: 'CHANGE_POSITION',
        x,
        y
    }
}
export const addHunter = (hunter) => ({
        type: 'ADD_HUNTER',
        hunter
    })
