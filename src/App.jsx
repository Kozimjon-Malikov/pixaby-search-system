import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ImageList from './components/ImageList';
import Search from './components/Search';

const App = () => {
  const [images,setImages]=useState('');
  const [text,setText]=useState('')
  const [load,setLoad]=useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pixabay.com/api/?key=42777821-f8ea44b4ed2981b1475e24dcb&q=${text}&image_type=photo&pretty=true`);
        const data = await response.json();
        setImages(data);
        setLoad(false)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  },[text])
  return (
    <div className='container  mx-auto'>
      <Header/>
      <Search searchText={setText}/>
      <main>
        {load?<p className='text-center text-2xl'>Loading....</p>:<ImageList imgdata={images.hits}/>}
      </main>
    </div>
  );
}

export default App;
