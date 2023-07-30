

import React, { useEffect, useState } from 'react';
import FavPlayer from './Favorite.json';

const FavoritePage = () => {
  const [player, setPlayer] = useState([]);
  const [favPlayers, setFavPlayers] = useState([]);

  useEffect(() => {
    setPlayer(FavPlayer);

  }, []);

  const addToFavorites = (player) => {
    setFavPlayers([...favPlayers, player]);
    alert("Added")
  };

  const removeFromFavorites = (player) => {
    const updatedFavorites = favPlayers.filter((favPlayer) => favPlayer.player_name !== player.player_name);
    setFavPlayers(updatedFavorites);
    alert("Removed")
  };

  return (
    <>

      
      <div className='container-fluid'>
        <div className='row'>
          {player.map((item) => {
            const isFavorite = favPlayers.some((favPlayer) => favPlayer.player_name === item.player_name);

            return (
              <div key={item.player_name} className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4'>
                <div className='shadow'>
                  <div className='text-center'>
                    <img src={item.image} alt='img' className='img-fluid' style={{ height: "300px" }} />
                  </div>
                  <div className='px-5 mx-4 py-3'>
                    <p><span className='fw-bold'>Player Name </span> :- {item.player_name}</p>
                    <p><span className='fw-bold' style={{ marginRight: "60px" }}>DOB  </span> :- {item.born}</p>
                    <p><span className='fw-bold' style={{ marginRight: "40px" }}>Batting </span> :- {item.batting}</p>
                    <p><span className='fw-bold' style={{ marginRight: "33px" }}>Bowling</span> :- {item.Bowling_Style}</p>
                    <p><span className='fw-bold' style={{ marginRight: "60px" }}>Role </span> :- {item.Role}</p>

                    {isFavorite ? (
                      <button className='btn fw-bold btn-primary' onClick={() => removeFromFavorites(item)}>Remove Favorite</button>
                    ) : (
                      <button className='btn fw-bold btn-danger' onClick={() => addToFavorites(item)}>Add to Favorite </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
