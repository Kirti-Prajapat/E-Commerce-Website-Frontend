import axios from "axios";

const Action =()=> async(dispatch)=>{
    try{
        const product = await axios.get("http://localhost:8900/getProducts")
        const res = product.data
        dispatch({type:"success", payload:res})
    } catch(error){
        dispatch({type:"fail", payload:error.message})
    }
}


export default Action;