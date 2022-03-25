import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [person, setperson] = useState({
    name :"anjelina jolie",
    bio:"Angelina Jolie DCMG is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden",
    img:"https://media-mcetv.ouest-france.fr/wp-content/uploads/2021/08/angelina-jolie-se-mobilise-pour-les-refugies-du-monde-sur-instagram-min.jpg",
    profession:"actrice",
  } 
  );
  const [shows, setshows] = useState(true);
  const [counter, setCounter] = useState(0);
  const interval = setInterval(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, 1000);
  return (
    <div className="App">
       
          <div className='big-card'>
          <button
        type="button"
        onClick={() => setshows(!shows)}
      >click here</button>

      {shows?(
      <div className='card'>
      <img src={person.img}/>
      <div className='ctn'>
      <h1>{person.name}</h1>
      <h1>{person.profession}</h1>
     </div>  
     <ion-icon name="close-circle-outline"
      onClick={() => setshows(!shows)}>
      </ion-icon>
      <p>{person.bio}</p>
      </div> ):null}

      
      
      
      
      <div className="counter">
      <h1>Counter: {counter}</h1>
    </div>

      
  
      </div>
      
  
       
</div>
    
  );
}

export default App;
