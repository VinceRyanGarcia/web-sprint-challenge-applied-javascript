import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const headL = document.createElement('div');
  const auth = document.createElement('div');
  const imgCon = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');

  card.classList.add('card');
  headL.classList.add('headline');
  auth.classList.add('author');
  imgCon.classList.add('img-container');

  headL.textContent = article.headline;
  name.textContent = `By: ${article.authorName}`;
  img.src = article.authorPhoto;

  card.appendChild(headL);
  card.appendChild(auth);
  auth.appendChild(imgCon);
  imgCon.appendChild(img);
  auth.appendChild(name);

  card.addEventListener( 'click', function(event){
    console.log(article.headline);
  } )

  return card;

}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const api = axios.get('https://lambda-times-api.herokuapp.com/articles')
  api.then( (res) => {
    topics.forEach( topic => {
        res.data.articles[topic].forEach( data => {
        document.querySelector( selector ).appendChild( Card( data ) );
        });
    });
    api.catch( (error) => {
      console.log(error);
    } )
})
}
// i hard coded this T_T //
const topics = [
  "javascript",
  "bootstrap",
  "technology",
  "jquery",
  "node"
];

export { Card, cardAppender }