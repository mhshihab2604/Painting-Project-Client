import { Link, useLoaderData, useParams } from 'react-router-dom';

const PaintingCardDetails = () => {
    // Color and size array

    const paintings = useLoaderData();
        const { _id } = useParams();
        const painting = paintings.find(painting => painting._id === _id);
        console.log(painting);
    return (
        <div className='mx-2'>
            <section className='flex flex-col lg:flex-row justify-center items-center container mx-auto'>
                <div className="flex justify-center bg-base-200 p-5">
                    <img className="w-[500px] h-[600px] object-cover" src={painting.image } alt="" />
                </div>
                <div className="bg-card mx-auto w-full max-w-md rounded-lg bg-base-100 shadow-2xl">
                    {/* Product Title */}
                    <div className="flex flex-col  px-6 pt-6">
                        <h3 className="text-2xl font-semibold ">{painting.item_name}</h3>
                        <p className="text-sm text-gray-500 dark:text-white/60">{painting.short_description}</p>
                    </div>
                    {/* Category and price */}
                    <div className="flex flex-col gap-4 p-6">
                        <div className="flex items-end justify-between">
                            <h2 className="text-center text-2xl font-medium">{painting.price}</h2>
                            <p className="rounded-lg bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] p-2 text-center text-sm text-white">Category: {painting.subcategory_name}</p>
                        </div>
                        {/* Color choosing option */}
                        <div>
                            <label className="font-medium text-xl peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="size">Painter Details:</label>
                            <div className="mt-2 " id="size">
                                <h1 className="font-medium">Painter: {painting.name}</h1>
                                <h1 className="font-medium">Painter Email: {painting.email}</h1>
                            </div>
                        </div>
                        <div>
                            <label className="text-xl font-medium" htmlFor="color">Rating:</label>
                            <div className="mt-2 flex items-center gap-3" id="color">
                                <h1 className="rounded-full bg-[#F3F3F3] px-5 py-2 font-medium">{painting.rating}</h1>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        {/* Size choosing option */}
                        <div>
                            <label className="font-medium text-xl peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="size">Details:</label>
                            <div className="mt-2 " id="size">
                                <h1 className="font-medium">Stock: {painting.stock}</h1>
                                <h1 className="font-medium">Process Time: {painting.processing_time}</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="w-full rounded-lg bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                        <Link to={`/updateCraft/${_id}`}>
                            <button className="btn w-full text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">Update Craft</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaintingCardDetails;
