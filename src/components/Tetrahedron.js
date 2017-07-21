import React from "react";
import { Link } from "react-router-dom";

const Tetrahedron = () => {
    return (
        <div>
            <p>An "interactive" [not] image will go here.</p>
            <Link to="/facet/" + { props.facetName } >Link to facet</Link>
        </div>
    );
};

export default Tetrahedron;
