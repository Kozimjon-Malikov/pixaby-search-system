import React, { useState } from 'react';

const Search = ({searchText}) => {
    const [searchData,setSearchData]=useState('')
    const saveForm=(e)=>{
        e.preventDefault();
        searchText(searchData);
    }
    return (
        <div className='mx-auto w-full sm:w-1/2 md:w-1/2  my-2 p-2  rounded-lg'>
            <form onSubmit={saveForm}>
                <label htmlFor="search"></label>
                <input value={searchData}  onChange={e=>setSearchData(e.target.value)} className='border border-stone-500 focus:border-blue-500 py-2 w-7/12 sm:w-9/12 md:w-9/12 outline-none mx-2 focus:border px-1' type="search" name="search" id="search" />
                <button className='bg-blue-500 border-none text-white w-4/12 sm:w-2/12 md:w-2/12  py-2 outline-0 rounded-sm text-lg font-medium' type='submit'>Search</button>
            </form>
        </div>
    );
}

export default Search;
