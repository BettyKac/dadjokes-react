import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleClickUp = () => {
    setLikes(likes + 1);
  };
  const handleClickDown = () => {
    setDislikes(dislikes + 1);
  };
  
  return (
    <div>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>

          <div className="joke__likes">
            <button
              id="btn-up"
              onClick={handleClickUp}
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {likes}
            </span>
            <button
              id="btn-down"
              onClick={handleClickDown}
              className="btn-like btn-like--down"
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {dislikes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
