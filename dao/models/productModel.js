import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const collection = 'products'

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    category: {type: String, required: true},
    availability: {type: String, required: true}
});

productSchema.plugin(mongoosePaginate);

const productModel = mongoose.model(collection, productSchema);

export default productModel;