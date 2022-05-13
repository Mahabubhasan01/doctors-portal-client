import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary w-32">{children}</button>
        </div>
    );
};

export default PrimaryButton;