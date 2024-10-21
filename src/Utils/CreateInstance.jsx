import axios from "axios"

const CreateInstance =  axios.create({
        baseURL:"https://fakestoreapi.com/"
    })

export default CreateInstance