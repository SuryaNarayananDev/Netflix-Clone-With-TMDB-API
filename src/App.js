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
//https://ca-times.brightspotcdn.com/dims4/default/087112f/2147483647/strip/true/crop/5906x3937+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F58%2F4e%2Fa59edfeb4c00b85217973e5560f6%2Fsquidgame-unit-104-442.jpg

//https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/d264d3c293494a33c5dbc15d221ba966.jpg

//https://assetsio.gnwcdn.com/squid-game-board-game-artwork.jpg?width=970&quality=80&format=jpg&dpr=2&auto=webp