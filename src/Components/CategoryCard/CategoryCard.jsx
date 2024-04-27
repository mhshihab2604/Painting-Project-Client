import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const{ name, image} = category || {};
    return (
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl border-2 p-2">
                <figure className="px-10  bg-base-100 shadow-2xl">
                    <img className="h-52" src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions">
                    <Link to="/categoriesCard"><button className="btn bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;