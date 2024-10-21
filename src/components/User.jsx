import CreateInstance from "../Utils/CreateInstance";

const User =()=>{
    const generateUser = async()=>{
     try{
        const res = await CreateInstance.post("/auth/login", {
            username: "mor_2314",
            password: "83r5^_"
         } )
         console.log(res.data);
     }catch(err){
        console.log(err.message);
     }
    }
    return (
        <div>
            <button onClick={generateUser} >
                getUsers
            </button>
        </div>
    )
}
export default User;