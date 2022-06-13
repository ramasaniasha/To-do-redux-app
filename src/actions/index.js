import axios from 'axios';
import { useDispatch } from "react-redux";


let nextTodoId = 0;
// const dispatch = useDispatch();
export const addTodo = (data) => {
    return {
        type: "ADD_TODO",

        playload: {
            id: ++nextTodoId,
            data: data
        }
    }
}
// export const apitestfunction = async(id)=>{
//     const response = await axios
//       .post(`http://localhost:3008/test/${id}`)
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(deleteTodo(response.data));
//   };

export const apitestfunction = (id) => async (dispatch) => {
    // console.log("ash",playload);
    const response = await axios
        .post(`http://localhost:3008/test`, [id])
        console.log(response);
    if (response && response.status === 201) {
        console.log("asha",id)
        dispatch(
            {
                type: "DELETE_TODO",
                id
            }
        )
  
    }
 }
export const deleteTodo = (id) => {
    console.log(id)
    return {
        type: "DELETE_TODO",
        id
    }
}
export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}