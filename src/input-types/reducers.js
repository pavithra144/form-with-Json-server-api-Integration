export const initialState = {
    nameText: '',
    checkBoxArr: [{
        id: 1, label: 'CB1', checked: false
    }, {
        id: 2, label: 'CB2', checked: false
    },
    {
        id: 3, label: 'CB3', checked: false
    }, {
        id: 4, label: 'CB4', checked: false
    }],
    radioArr: [{
        id: 1, label: 'Female', checked: false
    }, {
        id: 2, label: 'Male', checked: false
    }],
    dropdownArr: [
        { id: 1, label: 'DB1', isSelected: false },
        { id: 2, label: 'DB2', isSelected: false },
        { id: 3, label: 'DB3', isSelected: false },
        { id: 4, label: 'DB4', isSelected: false }],
    fileUpload: null
}

export const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case 'SET_TEXT': {
            return { ...state, nameText: action.payload }
        }
        case 'SET_CHECKBOX': {
            return {
                ...state, checkBoxArr: state.checkBoxArr.map((item) => {
                    if (item.label === action.payload) {
                        return { ...item, checked: !item.checked }
                    }
                    return item;
                })
            }
        }
        case 'SET_RADIO': {
            return {
                ...state, radioArr: state.radioArr.map((item) => {
                    if (item.label === action.payload) {
                        return { ...item, checked: !item.checked }
                    }
                    return item;
                })
            }
        }
        case 'SET_DROPDOWN': {
            return {
                ...state, dropdownArr: state.dropdownArr.map((item) => {
                    if (item.label === action.payload) {
                        return { ...item, isSelected: item.label === action.payload }
                    }
                    return item;
                })
            }
        }
        case 'SET_FILEUPLOAD': {
            return {
                ...state, fileUpload: action.payload
            }
        }
        default:
            return state;
    }
}