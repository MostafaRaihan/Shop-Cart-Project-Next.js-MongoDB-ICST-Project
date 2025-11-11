import { addProduct } from "@/app/actions/product";
import "./AddProduct.css"; 

const AddProduct = () => {
	return (
		<div className="add-product-container">
			<form className="add-product-form" action={addProduct}>
				<h2 className="form-title">Add New Product</h2>

				<label htmlFor="title">Product Title</label>
				<input
					id="title"
					type="text"
					name="title"
					placeholder="Enter Product Title"
					required
				/>

				<label htmlFor="price">Product Price</label>
				<input
					id="price"
					type="number"
					name="price"
					placeholder="Enter Product Price"
					required
				/>

				<label htmlFor="image">Image URL</label>
				<input
					id="image"
					type="text"
					name="image"
					placeholder="Enter Image URL"
					required
				/>

				<button type="submit">Add New Product</button>
			</form>
		</div>
	);
};

export default AddProduct;
