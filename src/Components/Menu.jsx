import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Menu.css'
import Book from './Book'
const Menu = () => {
    const [data,setData]=useState([])
    const [t,setT]=useState([false])
        function search() {
          const address = 'https://www.googleapis.com/books/v1/volumes?q=';
          const x = document.getElementById("fname");
          axios.get(address+x.value).then(response=>setData(response.data.items))
          .then(() => setT(true));

        }
     return (
    <div>
      <h1> Book Search</h1>
      <section className="allButtons">
      <input type="text" id="fname" />
      <button onClick={search}>Search book </button>
      </section>
      {/* <div>
        {data.map(item=> <li key={item.id} >
            <ul><img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} /></ul>
            <ul>{item.volumeInfo.title}</ul>
        </li>)}
        </div> */}
        <div className='book'>
       {t && data.map(item => (
        <Book
          key={item.id}
          Img={item.volumeInfo.imageLinks.smallThumbnail}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors}
        />
      ))}
      </div>
      
    </div> )
  
}

export default Menu
