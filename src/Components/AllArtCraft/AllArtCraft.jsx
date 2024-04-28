import { useLoaderData } from "react-router-dom";
import AllArtCraftCard from "../AllArtCraftCard/AllArtCraftCard";

const AllArtCraft = () => {
    const paintings = useLoaderData();


    return (
        <div>
            <section className='mt-28 mx-6'>
                <h2 className="text-3xl lg:text-5xl font-bold  text-center">All Art & Craft</h2>
                <div>
                    {paintings?.map(painting => <AllArtCraftCard key={painting._id} painting={painting}></AllArtCraftCard>)}
                </div>
            </section>
        </div>
    );
};

export default AllArtCraft;