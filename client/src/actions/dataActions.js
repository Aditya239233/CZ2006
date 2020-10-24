import axios from "axios";
import { HBD_DATA } from "./types";

// get the csv file
export const getData = () => (dispatch) => {
    axios.get('/api/data')
    .then( res => {
        dispatch({
            type: HBD_DATA,
            payload: res.data
        })
    }).catch(e => console.log(e))
}