# News-App

This is a responsive News App built using HTML, CSS, and JavaScript that fetches the latest news articles based on different categories or user search queries. The application uses the NewsAPI to pull in current news from around the world.


### Features

- Category-based Navigation: Choose between various categories like Sports, Politics, Education, and Finance.
- Search Functionality: Search for news articles related to a specific query.
- Responsive Design: The UI is built to adapt to different screen sizes.
- Click-to-Open Article: Click on any news card to view the full article in a new tab.


### Project Structure

The project consists of the following files:

- index.html: The main HTML structure of the application.
- style.css: Contains styles for the entire webpage, including the navbar, search bar, and news cards.
- app.js: Handles all the JavaScript functionalities, such as fetching news articles and dynamically rendering them.
- /assets/Logo1.jpeg: Placeholder for the company logo.


### Getting Started

##### Prerequisites

To run this project locally, you need a text editor and a browser that supports modern JavaScript.

##### Installation

1. Clone the repository:
git clone https://github.com/yourusername/news-app.git

2. Navigate to the project directory:
cd news-app

3. Open index.html in your browser:
open index.html


### Usage

- Navigation: Click on a category (e.g., Sports, Politics) in the navbar to see related news.
- Search: Type a search query in the search bar and click the search icon to see results.
- Reset: Click the logo to refresh and load the default news feed.


### API Integration

The project uses the [NewsAPI](https://newsapi.org/) for fetching news articles. The API endpoint is defined as:

const URL = "https://newsapi.org/v2/everything?q=";
const API\_KEY = "YOUR\_API\_KEY";

Replace YOUR\_API\_KEY with your own API key from [NewsAPI](https://newsapi.org/).


### Author

Vardhman Mehta - [Github Profile](https://github.com/Vardhman-Mehta)
