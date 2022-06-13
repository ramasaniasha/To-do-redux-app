import React from 'react';

const initialData = {
    list: []
}
// const [list,setList] = useState([]);
const Todoreducer = (state = initialData, action) => {
    console.log(action.playload)
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.playload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }]
            }
        case "DELETE_TODO":        
          
            const newlist = state.list.filter((item)=> item.id !== action.id)
            // const response = axios.post(`http://localhost:3008/test`,{newlist});
            return {
                ...state,
                list: newlist,
                // id
            }
        default: return state;
    }
}
export default Todoreducer;