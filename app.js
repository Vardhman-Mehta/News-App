const API_KEY = "d2dfd5459f9a47de983d1ba2abbd41e5";
const URL = "https://newsapi.org/v2/everything?q=";

const cardsContainer = document.querySelector(".cards-container");
const newsCardTemplate = document.getElementById("template-card");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const companyLogo = document.getElementById("company-logo");

window.addEventListener('load', () => fetchNews("India"));
document.getElementById("sports").addEventListener("click", () => onNavItemClick("sports"));
document.getElementById("politics").addEventListener("click", () => onNavItemClick("politics"));
document.getElementById("education").addEventListener("click", () => onNavItemClick("education"));
document.getElementById("finance").addEventListener("click", () => onNavItemClick("finance"));


function reload(){
    window.location.reload();
}

async function fetchNews(query){
    const response = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        if(!article.urlToImage){
            return;
        }
        const cardClone = newsCardTemplate.content.cloneNode(true);
        // console.log(cardClone);
        fillDataInCard(cardClone, article);
        cardsContainer.append(cardClone);
    });
}

function fillDataInCard(cardClone, article){
    const newsImage = cardClone.getElementById("news-image");
    const newsTitle = cardClone.getElementById("news-title");
    const newsSource = cardClone.getElementById("news-source");
    const newsDescription = cardClone.getElementById("news-description");

    newsImage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDescription.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });

    if(article.source.name && date){
        newsSource.innerHTML = `${article.source.name} : ${date}`;
    }
    else if(article.source.name && !date){
        newsSource.innerHTML = `${article.source.name}`;
    }

    // cardClone.firstElementChild.addEventListener("click", () => {
    //     window.open(article.url, "_blank");
    // });

    cardClone.querySelector(".card").addEventListener('click', () => {
        window.open(article.url, '_blank');  // Open the article in a new tab
    });
}

let currActiveNav = null;
async function onNavItemClick(id){
    console.log(id);
    fetchNews(id);
    let navItem = document.getElementById(id);
    if(currActiveNav){
        currActiveNav.classList.remove('active');
    }
    currActiveNav = navItem;
    currActiveNav.classList.add('active');
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    if(!query) return;
    fetchNews(query);
    if(currActiveNav) currActiveNav.classList.remove("active");
    currActiveNav = null;
});

companyLogo.addEventListener("click", () => {
    reload();
});