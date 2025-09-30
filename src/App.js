import { useState, useEffect } from 'react';

import Header from './components/Header';
import Items from './components/Items'

import './App.css';

const API_URL = 'https://hacker-news.firebaseio.com/v0/';

function App() {
  const [item, setItem] = useState(0);
  const [story, setStory] = useState(null);
  const [stories, setStories] = useState([]);

  function handleNext() {
    setItem(prev => prev + 1);
  }

  function handlePrev() {
    if (item > 0) {
      setItem(prev => prev - 1);
    }
  }

  async function getItem(id) {
      const url = API_URL + 'item/' + id + '.json';
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }

  async function fetchData() {
    if ( item == 0 ) {
      const url = API_URL + 'beststories.json';
      const response = await fetch(url);
      const stories = await response.json();
      setStories((prevItems) => [...stories]);
      let story = await getItem(stories[item]);
        setStory(story);
    } else {
      let story = await getItem(stories[item]);
      setStory(story);
    }
  }


  useEffect(() => {
    fetchData(); // Load initial data
  }, [item]);
 

    return (
      <>
        <Header />
        <Items index={item} story={story} handleNext={handleNext} handlePrev={handlePrev}/>
      </>
    );
}

export default App;
