const mongoose=require("mongoose");
const uri = "mongodb://127.0.0.1/shop";
mongoose.connect(uri);

//create a schema
const productsSchema=mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean
});

//create a model
const Product=new mongoose.model('Product',productsSchema);

const main = async () =>{
    try{

    }
    catch(error){
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
}
main();