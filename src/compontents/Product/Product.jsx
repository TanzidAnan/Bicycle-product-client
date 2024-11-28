
const Product = () => {
    const hendleAddProduct =(e) =>{
        e.preventDefault();
        const form =e.target;
        const title =form.title.value;
        const name =form.name.value;
        const price =form.price.value;
        const products ={title,name,price}
        console.log(products);
    }
    return (
        <div className="w-8/12 mx-auto bg-slate-500 p-20">
            <h1 className="text-3xl font-semibold text-center">product</h1>
            <form onSubmit={hendleAddProduct}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Product title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="name" name="price" placeholder="Product Price" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-cyan-500 border-none">Product Add</button>
                </div>
            </form>
        </div>
    );
};

export default Product;