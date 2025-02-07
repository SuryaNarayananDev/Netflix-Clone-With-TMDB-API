import React from 'react';
import Navbar from './components/nav/nav.js';
import Banner from './components/banner/banner.js'
import Poster from './components/poster/poster.js';
import {Docu_genre,trend_genre,Action_genre,Horror_genre,Comedy_genre,Romance_genre,Orginals_genre} from './components/constants/urls.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Poster title="Orginals" url={Orginals_genre}/>
      <Poster title="Top 10" url={trend_genre} isSmall/>
      <Poster title="Action" url={Action_genre} isSmall/>
      <Poster title="Horror" url={Horror_genre} isSmall/>
      <Poster title="Romance" url={Romance_genre} isSmall/>
      <Poster title="Comedy" url={Comedy_genre} isSmall/>
      <Poster title="Documentation" url={Docu_genre} isSmall/>
    </div>
  );
}

export default App;
