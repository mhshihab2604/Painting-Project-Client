// import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PaintingCard from '../PaintingCard/PaintingCard';
import { useEffect, useState } from 'react';
const CategoriesCard = () => {
    const {id} = useParams();
    const category = id.split(' ').join('&')
    const [paintings, setPaintings] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
        .then(res => res.json())
        .then(data => setPaintings(data))
    })
    console.log(paintings);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 container mx-auto max-w-6xl">
                    {paintings?.map(painting => <PaintingCard key={painting._id} painting={painting}></PaintingCard>)}
            </div>
        </div>
    );
};

export default CategoriesCard;