import CreateInstance from "../Utils/CreateInstance";

const Product =()=>{
    const  generate  = async ()=>{
        try{
            const res = await CreateInstance.get("products")
            console.log(res.data);
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <div>
            <button onClick={generate} >
                    Get products
            </button>
        </div>
    )
}
export default Product;