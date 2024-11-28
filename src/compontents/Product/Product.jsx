
const Product = () => {
    const hendleAddProduct =(e) =>{
        e.preventDefault();
        const form =e.target;
        const title =form.title.value;
        const name =form.name.value;
        const price =form.price.value;
        const photo =form.photo.value;
        const products ={title,name,price,photo}
        console.log(products);
        fetch('http://localhost:5000/items',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('data successfull')
            }
        })
    }
    return (
        <div className="w-8/12 mx-auto bg-slate-500 p-4">
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
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Product Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Product Price" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-cyan-500 border-none">Product Add</button>
                </div>
            </form>
        </div>
    );
};

export default Product;