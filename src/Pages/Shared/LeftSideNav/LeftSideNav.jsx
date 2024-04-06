import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
        // console.log(categories) ;
    }, [])
    return (
        <div className="space-y-3">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link
                className="block ml-4 text-xl font-semibold"
                    category={category.id}
                    to={`/catagory/${category.id}`}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;