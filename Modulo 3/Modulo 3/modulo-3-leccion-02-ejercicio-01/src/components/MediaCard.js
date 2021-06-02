import React from "react";

const MediaCard = () => {
  return (
    <div className="App">
      <div>
        <div className="img-photo">
          <img src="" className="App-photo" alt="logo" />
        </div>
        <div className="text">
          <h2>Alex Guerrero</h2>
          <span>Lunes 26 de junio de 2017</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rerum
        enim repellat accusantium ad, nulla aut, qui fugiat ipsam quibusdam
        optio nesciunt voluptatem, officiis inventore. Error placeat velit
        laudantium voluptatem.
      </p>
      <div>
        <small>Leer más</small>
        <span>
          37<i className="fas fa-heart"></i>
        </span>
      </div>
    </div>
  );
};

export default MediaCard;
