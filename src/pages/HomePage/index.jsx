import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke'; 

export const HomePage = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const getApiJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJoke(data.result); 
    };
    getApiJoke();
  }, []);

  return (
    <>
      {joke.map((vtip) => (
        <Joke
          key={vtip.id}
          userAvatar={vtip.avatar}
          userName={vtip.name}
          text={vtip.text}
          initialLikes={vtip.likes}
          initialDislikes={vtip.dislikes}
        />
      ))}
    </>
  );
};
