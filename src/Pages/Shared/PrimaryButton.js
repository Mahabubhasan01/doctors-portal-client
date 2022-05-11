import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary w-32">{children}</button>
        </div>
    );
};

export default PrimaryButton;