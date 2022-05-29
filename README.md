# CINEFY - Movie Recommendation Web App
## Microsoft Engage 2022
<p align="center">
<img src="static\cinefy.png" alt="Banner" width="800"  />
      </p>

## Table of contents
- [Technology Stack](#technology-stack)
- [Navigating Through The App](#navigating-through-the-app)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Recommendations System](#recommendations-system) 
- [Useful Links](#useful-links)
- [Resources](#resources)
- [Support and Contact](#support-and-contact)

## Technology Stack
<div>
      <p align ="center">
        <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" alt="Python" width="110px" />
        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="FireBase" width="60px" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="Html" width="80px" />
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Css" width="80px" />
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript" width="80px" />      
        <img src="https://github.com/devicons/devicon/blob/master/icons/flask/flask-original-wordmark.svg" alt="Flask" width="80px"/>
      </p>
</div>


- Python used in data processing for recommendations.
- Flask for backend.
- Firebase was used for the database for sign up and sign in.
- HTML, CSS and JavaScript for frontend.

![Python](https://img.shields.io/badge/Python-3.8-blueviolet)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-fcba03)
![Firebase](https://img.shields.io/badge/Database-Firebase-blue)
<br/>[(Back to top)](#table-of-contents)

## Prerequisites

- Python
- TMDB API Key

## Navigating Through The App
### Sign Up

Register to the application via email and password.

<img src="static\Login_v5\images\Signup.JPG" alt="Sign up screen" width="700"/>

### Sign In

After signing up in, users can now log in using their registered email and password.

<img src="static\Login_v5\images\Login.JPG" alt="Sign in screen" width="700"/>

### Home

The Home window appers where the users can search for their favourite shows, views movies and TV shows sorted according to their genres.

<img src="static\Login_v5\images\Home.JPG" alt="home" width="700"/>

### Search

Users can search any movie easily using the search bar with an autocomplete feature and get all the information like genres, release date, overview, etc. about that movie.

<img src="static\Login_v5\images\Search.JPG" alt="search" width="700"/>

### Movie Information

After searching a movies the page is rendered to view all the information about that movie like genres, release date, overview cast etc.

<img src="static\Login_v5\images\MovieSearch.JPG" alt="movie info page" width="700"/>

### Cast Details

Users can get information about the any cast member by clicking on their respective card.

<img src="static\Login_v5\images\cast.JPG" alt="cast details" width="700"/>
<img src="static\Login_v5\images\cast-info.JPG" alt="cast info" width="700"/>

### Sentiment Analysis

Users can also find the sentiment anlysis of movie the reviews given by the people who've already watched the movie.

<img src="static\Login_v5\images\Sentiment.JPG" alt="sentiment analysis" width="700"/>

### Recommendations

Users are also recommended movies of similar kind as their search using content-based filtering.

<img src="static\Login_v5\images\Recommendations.JPG" alt="recommendations" width="700"/>

### Genre-based sorting

The movies are displayed in various catalogues based on their different genres.

<img src="static\Login_v5\images\Genres.JPG" alt="genres" width="700"/>

### Trending Movies

Users can also find the most-trending movies on the home page.

<img src="static\Login_v5\images\Trending.JPG" alt="trending" width="700"/>

### Logout

Finally users can logout using the logout button in the navbar.

<img src="static\Login_v5\images\logout.JPG" alt="logout" width="700"/>

<br/>[(Back to top)](#table-of-contents)

##  Installation
To use this project, follow the steps below:

#### 1. Clone this repository.
Initialise git on your terminal.

```bash
git init
git clone https://github.com/ShubhiYadav03/Cinefy-App.git
```

#### 2. Install all the libraries mentioned in the requirements.txt file with the command-
```sh
  pip install -r requirements.txt
```

#### 3. Get the API key
Get your API key from https://www.themoviedb.org/
-Create an account in https://www.themoviedb.org/
-Click on the API link from the left hand sidebar in your account settings and fill all the details to apply for API key.
-If you are asked for the website URL, give "NA" if you don't have one.
-You will see the API key in your API sidebar once your request is approved.

#### 4. Add the API key
Replace the value of `my_api_key` with your API key in (line no. 15 and 31) of static/recommend.js file and (line no. 8) of static/api.js and hit save.

#### Download Dataset

In order to run the preprocessing files download `movies_metadata.csv` and `credits.csv` from [Kaggle](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset).

#### 5. Start the Server
Open your terminal/command prompt from your project directory and run the file `main.py` by executing the command-
```sh
  python main.py
```

Go to your browser and type http://127.0.0.1:5000/ in the address bar.
<br/>[(Back to top)](#table-of-contents)

## Recommendations System

Recommendation engines need to know you better to be effective with their suggestion. Therefore, the information they collect and integrate is a critical aspect of the process. This can be information relating to explicit interactions, for example, information about your past activity, your ratings, reviews and other information about your profile, such as gender, age, or investment objectives. These can combine with implicit interactions such as the device you use for access, clicks on a link, location, and dates.

### Content-Based filtering

Content-based filtering is a type of recommender system that attempts to guess what a user may like based on that user’s activity.

Content-based filtering makes recommendations by using keywords and attributes assigned to objects in a database (e.g., items in an online marketplace) and matching them to a user profile. The user profile is created based on data derived from a user’s actions, such as purchases, ratings (likes and dislikes), downloads, items searched for on a website and/or placed in a cart, and clicks on product links.

### Similarity Score

The system decide which item is most similar to the item user likes through the similarity scores.
   
It is a numerical value ranges between zero to one which helps to determine how much two items are similar to each other on a scale of zero to one. This similarity score is obtained measuring the similarity between the text details of both of the items. So, similarity score is the measure of similarity between given text details of two items. This can be done by cosine-similarity.
   
### How Cosine Similarity works?

Cosine similarity is a metric used to measure how similar the documents are irrespective of their size. Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space. The cosine similarity is advantageous because even if the two similar documents are far apart by the Euclidean distance (due to the size of the document), chances are they may still be oriented closer together. The smaller the angle, higher the cosine similarity.
<br/>
  
![image](https://user-images.githubusercontent.com/36665975/70401457-a7530680-1a55-11ea-9158-97d4e8515ca4.png)

  
More about Cosine Similarity : [Understanding the Math behind Cosine Similarity](https://www.machinelearningplus.com/nlp/cosine-similarity/)

### Sources of the datasets 

1. [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [List of movies in 2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [List of movies in 2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [List of movies in 2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)
<br/>[(Back to top)](#table-of-contents)

## Useful Links

- [Demo Video](https://youtu.be/OKKK1GOnlIU)
- [Sprint Document](https://www.canva.com/design/DAFB-H8KJUg/ewr48ojlpZUaZg7rDi1EiA/view?utm_content=DAFB-H8KJUg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

<br/>[(Back to top)](#table-of-contents)

## Resources
- [Recommendation System](https://www.youtube.com/watch?v=1xtrIEwY_zY)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Getting started with Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
- [Web Development using Flask](https://www.geeksforgeeks.org/python-introduction-to-web-development-using-flask/)

## Support and Contact

Feel free to contact me on shubhi.yadav.1234@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-lightgrey)](https://www.linkedin.com/in/shubhi-yadav-a155121b9/) [![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter)](https://twitter.com/crosXHead) 
<br/>[(Back to top)](#table-of-contents)


