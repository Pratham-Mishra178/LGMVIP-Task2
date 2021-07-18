import React from 'react';

const Scroll = (props) => {
    return(
        //used to provide a scroll view
        <div>
            {props.children}
        </div>
    )
};

export default Scroll;
