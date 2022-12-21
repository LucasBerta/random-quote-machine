import { useState } from 'react';
import './App.scss';
import data from './assets/data.json';

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

function App() {
  const [quote, setQuote] = useState(getFirstRandomQuote());
  const [color, setColor] = useState(getFirstRandomColor());

  function getFirstRandomQuote() {
    return data.quotes[Math.floor(Math.random() * (data.quotes.length - 1))];
  }

  function getRandomQuote() {
    const _quote = data.quotes[Math.floor(Math.random() * (data.quotes.length - 1))];
    if (quote !== _quote) return _quote;
    return getRandomQuote();
  }

  function getFirstRandomColor() {
    return colors[Math.floor(Math.random() * (colors.length - 1))];
  }

  function getRandomColor() {
    const _color = colors[Math.floor(Math.random() * (colors.length - 1))];
    if (color !== _color) return _color;
    return getRandomColor();
  }

  function refreshQuote() {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }

  function getTwitterHref() {
    return (
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote.quote + '" ' + quote.author)
    );
  }

  function getTumblrHref() {
    return (
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(quote.author) +
      '&content=' +
      encodeURIComponent(quote.quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );
  }

  return (
    <div className='app' style={{ backgroundColor: color }}>
      <div id='quote-box' className='card'>
        <span id='text' className='quote' style={{ color }}>
          <i className='quote-icon fa-solid fa-quote-left' style={{ color }}></i>
          {quote.quote}
        </span>
        <span id='author' className='author' style={{ color }}>
          - {quote.author}
        </span>
        <div className='cta'>
          <div className='social-medias'>
            <a id='tweet-quote' href={getTwitterHref()} target='_blank' rel='noreferrer' style={{ backgroundColor: color }}>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a id='tumblr-quote' href={getTumblrHref()} target='_blank' rel='noreferrer' style={{ backgroundColor: color }}>
              <i className='fa-brands fa-tumblr'></i>
            </a>
          </div>
          <button id='new-quote' className='new-quote' style={{ backgroundColor: color }} onClick={refreshQuote}>
            New quote
          </button>
        </div>
      </div>
      <span className='credits'>
        by{' '}
        <a href='https://github.com/LucasBerta' target='_blank' rel='noreferrer'>
          Lucas Berta
        </a>
      </span>
    </div>
  );
}

export default App;
