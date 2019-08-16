// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsUrl = 'https://lambda-times-backend.herokuapp.com/articles'
axios.get(cardsUrl)
    .then(Response=>{
        const js = Response.data.articles.javascript;
        const bootstrap = Response.data.articles.bootstrap;
        const technology = Response.data.articles.technology;
        const jquery = Response.data.articles.jquery;
        const node = Response.data.articles.node;
        const  allTabs = document.querySelectorAll('.tab');
        const arr = Array.from(allTabs);
        const arrayLoop = (arr)=>{
            arr.forEach(element => {
                CardComponent(element)
            });
        }
        arr.forEach(element=>{
            element.addEventListener('click', e=>{
                const cardContainer = document.querySelector('.cards-container')
                cardContainer.innerHTML = ''
                console.log(cardContainer)
                e.preventDefault();
                switch(true){
                    case (element.textContent === 'javascript'):
                    arrayLoop(js)
                    break;
                    case (element.textContent === 'bootstrap'):
                        arrayLoop(bootstrap)
                        break;
                    case (element.textContent === 'technology'):
                        console.log('technology')
                        arrayLoop(technology)
                        break;
                    case (element.textContent === 'jquery'):
                        arrayLoop(jquery)
                        break;
                    case (element.textContent === 'node.js'):
                        arrayLoop(node)
                        break;
                    default:
                        console.log('Sorry,'); 
                }
            })
        })
    })
    .catch(Err=>{
        console.error('There was an error with the axios get call');
        console.error("Error: ", Err );
    });

    const cardContainer = document.querySelector('.cards-container')
    function CardComponent(params) {
        const card = document.createElement('div');
        card.classList.add('card');
        //headline;
        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = params.headline;
        card.appendChild(headline); 
        //author div
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author); 
        //image container 
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
        const img = document.createElement('img');
        img.src = params.authorPhoto;
        imgContainer.appendChild(img);
        //author name
        const spanName  = document.createElement('span');
        spanName.textContent ='By ' + params.authorName;
        author.appendChild(spanName);
        cardContainer.appendChild(card)
    }
