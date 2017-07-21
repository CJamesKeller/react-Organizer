import React from 'react';

import EditPersonForm from "./EditPersonForm";

const Person = () => {
    return (
        <div>
            <div className="infoWrapper">
                <h1>{ props.name }</h1>
                <p>{ props.info }</p>
                <button>Edit</button>
            </div>
            <div className="editWrapper">
                <EditPersonForm />
            </div>
        </div>
    );
};

export default Person;
