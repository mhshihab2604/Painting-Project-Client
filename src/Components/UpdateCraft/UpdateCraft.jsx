// export default UpdateCraft;
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';
const UpdateCraft = () => {
    const painting = useLoaderData();
    const {_id, item_name, name, email, subcategory_name, customization,  processing_time, stock, price, rating, short_description, image} = painting || {};
    const handleUpdateCraft = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const processing_time = form.processing_time.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const image = form.image.value;
        const updateCraft = {name, email, item_name, subcategory_name, customization, stock, processing_time, price, rating, short_description, image};
        console.log(updateCraft);

        fetch(`http://localhost:5000/painting/${_id}` ,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Painting Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div>
        <Helmet>
            <title>Update Craft</title>
        </Helmet>
        <section className="p-6 dark:text-gray-800">
            <form onSubmit={handleUpdateCraft} className="container w-full p-8 mx-auto dark:text-black space-y-6 rounded-md shadow bg-gradient-to-r from-[#03cdb5] to-[#C8143A]">
                <h2 className="w-full text-3xl font-bold text-center">Update Craft</h2>
                <section className="flex flex-col lg:flex-row justify-between pt-10 gap-10">
                    <div className="w-full lg:w-1/2">
                        <div className="form-control">
                            <label className="block mb-1 ml-1">User Name</label>
                            <input name="name" defaultValue={name} type="text" placeholder="Enter Name" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">User Email</label>
                            <input name="email" defaultValue={email} type="text" placeholder="Enter Email" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Item Name</label>
                            <input name="item_name" defaultValue={item_name} type="text" placeholder="Enter Item Name" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Subcategory Name</label>
                            <input type="text" name="subcategory_name" defaultValue={subcategory_name} placeholder="Enter Subcategory Name" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Customization</label>
                            <input type="text" name="customization" defaultValue={customization} placeholder="Enter Customization" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Stock Status </label>
                            <input type="text" name="stock" defaultValue={stock} placeholder="Stock Status " required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Processing Time</label>
                            <input type="text" name="processing_time" defaultValue={processing_time}  placeholder="Processing Time" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Price</label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter Price" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Rating</label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter Rating" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                        <div className="form-control">
                            <label className="block mb-1 ml-1">Short Description</label>
                            <input type="text" name="short_description" defaultValue={short_description} placeholder="Enter Short Description" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                        </div>
                    </div>
                </section>
                <div className="form-control">
                    <label className="block mb-1 ml-1">Image</label>
                    <input type="text" name="image" defaultValue={image} placeholder="Enter photo URL" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                </div>
                <div className="bg-gradient-to-r from-[#DD9895] to-[#B2E5F3]">
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 focus:dark:ring-[#331A15] hover:dark:ring-[#331A15] dark:text-gray-50">Update Craft</button>
                </div>
            </form>
        </section>
    </div>
    );
};

export default UpdateCraft;