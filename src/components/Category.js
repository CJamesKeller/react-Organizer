import React from "react";

import Thing from "./Thing";
import EditCategoryForm from "./EditCategoryForm";

const Category = () => {
    return (
        <div>
            <EditCategoryForm />
            <hr />
            <Thing />
        </div>
    );
};

export default Category;
