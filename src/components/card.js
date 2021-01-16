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
//Create Elements
  const card = document.createElement('div');
  const headL = document.createElement('div');
  const auth = document.createElement('div');
  const imgCon = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');
//ClassNames
  card.classList.add('card');
  headL.classList.add('headline');
  auth.classList.add('author');
  imgCon.classList.add('img-container');
//This adds content for the images and photos
  headL.textContent = article.headline;
  name.textContent = `By: ${article.authorName}`;
  img.src = article.authorPhoto;
//This appends the elements
  card.appendChild(headL);
  card.appendChild(auth);
  auth.appendChild(imgCon);
  imgCon.appendChild(img);
  auth.appendChild(name);
//EventListener 
  card.addEventListener( 'click', function(event){
    console.log(article.headline);  
  })

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

  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then((response)=>{  // creating a card from each and every article obj
      const picture = response.data.articles.bootstrap;
          picture.forEach((youcanputanythinginhere)=>{
            document.querySelector(selector).appendChild(Card(youcanputanythinginhere));
      });
      const art = response.data.articles.javascript;
          art.forEach((youcanputanythinginhere)=>{
            document.querySelector(selector).appendChild(Card(youcanputanythinginhere));
      });
      const jquery = response.data.articles.jquery;
          jquery.forEach((youcanputanythinginhere)=>{
            document.querySelector(selector).appendChild(Card(youcanputanythinginheres));
      });
      const nA = response.data.articles.node;
          nA.forEach((youcanputanythinginhere)=>{
            document.querySelector(selector).appendChild(Card(youcanputanythinginhere));
      });
      const tech = response.data.articles.technology;
          tech.forEach((youcanputanythinginhere)=>{
            document.querySelector(selector).appendChild(Card(youcanputanythinginhere));
      });
  })
  .catch((error)=>{
      console.log('error', error)
  })
  
};
export { Card, cardAppender }
