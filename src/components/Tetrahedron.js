import React from "react";
import { Link } from "react-router-dom";

const Tetrahedron = () => {
    return (
        <div className="Tetrahedron">
            <p>An "interactive" image will go here.</p>
            <p>For now, a link to Google:</p>
            <Link to="https://www.google.com">Google</Link>
            {/* <Link to="/facet/" + { props.facetName } >Link to facet</Link> */}
        </div>
    );
};

export default Tetrahedron;
