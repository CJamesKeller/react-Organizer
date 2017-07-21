import React from "react";
import { Link } from "react-router-dom";

import Category from "./Category";
import EditFacetForm from "./EditFacetForm";
import NewCategoryForm from "./NewCategoryForm";
import PersonPowersBar from "./PersonPowersBar";

const Facet = () => {
    return (
        <div>
            <div>
                <PersonPowersBar />
            </div>
            <div>
                <div className="topControls">
                    <Link to="/tet/" + { props.tetId } >
                        <button>Zoom Out</button>
                    </Link>
                    <button>Edit</button>
                    <EditFacetForm />
                </div>
                <div className="mainContent">
                    <Category />
                    <NewCategoryForm />
                </div>
            </div>
        </div>
    );
};

export default Facet;
