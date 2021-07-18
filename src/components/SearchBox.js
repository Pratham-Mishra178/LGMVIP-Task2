    import React from 'react';
    import '../containers/styles.css';

    const SearchBox=({searchfeild, searchChange})=>{
        return(
                <div className='pa2'>
                    <input 
                    className='pa2 ba bg-light-gray bod'
                    type="search" 
                    placeholder='search clients' 
                    onChange={searchChange}/>
                </div>
            );
    }

    export default SearchBox;
