import { useLoaderData } from 'react-router-dom';
import PaintingCard from '../PaintingCard/PaintingCard';
const CategoriesCard = () => {
    const paintings = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 container mx-auto">
                    {paintings?.map(painting => <PaintingCard key={painting._id} painting={painting}></PaintingCard>)}
            </div>
        </div>
    );
};

export default CategoriesCard;