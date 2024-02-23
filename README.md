## Before The Start

This is the Github Repository of the Scientia, article website of COC. It is a place where people can submit their articles and share their literay talents and interesting facts with others.

Developer: [Sadman Araf](https://github.com/Sadman27012021) , Volunteer, Centre Of Circle.

## Technologies Used

### Frontend:

The UI(User Interface) is rendered using a JS Meta Framework named **Sveltekit** which uses svelte at its basis and adds some special developer related feature that allows the developer to effortlessly accomplish some workflow like server-side rendering etc. This mainly utilizes basic HTML, CSS and JS with the magic of svelte which is a compiler based declarative JS component library that allows us to create easy to use reusable components. And as mentioned above, SvelteKit just provides some additional features.

### BaaS (Backend as a Service):

**Firebase** is used for user authentication and database for storing the articles. This leaves the bulk of backend workload to Firebase which is backed by Google. This allows some server heavy tasks to be done without that much effort of creating your own server. State management is also done using the blend of svelte stores module and firebase. Most important components of firebase for this project are _Auth_ and _Firestore_. Svelte stores module is used for managing and storing user state which is provided by firebase.

## Important Pages

### The home page:

This will be the landing page for our website. Its layout will be easy. The navbar, description, banner and at last some predefined featured articles and footer elements. This will be open for unregistered users. There will be a sign in/sign up button for logging in the user. It is primarily planned to use google authentication for simplicity and security. Whenever the user logs in, there will be additional features and options like upload articles and my articles etc. There might be the user’s home page for articles of his choice. In summary, there are two states of the home page.

- When the user is not logged in.
- When the user is logged in.

### All articles page:

There will be a separate state independent all articles page that will contain or list out all of the articles which will be categorized like science, math, history etc. to show the articles. The user might use search filters. And even implement search might be implemented. Simply, this is the page that will contain all of the articles that have been approved by the admin panel.

### Admin page:

This is the page where primarily all of the articles will be displayed. If the admin approves, that specific article will be displayed to the all articles page or briefly, this article will be added to the articles list.

### Send Article Page:

This will be the page where the article request from the user will be accepted. Then, these articles will be displayed in the admin page. This will have the user data, the article body, heading and other staff related to or required for an article.

### Individual Article Page:

This will be the dynamic page where the articles will be displayed individually. Only approved articles by the admin will be allowed to display individually. Otherwise that will be discarded. Here The data that has been stored in the database according to the user interface will be rendered.

## Process Behind Everything:

### Firebase:

As said above, firebase will be used mainly for authentication and database. For authentication, google auth will be used for authentication and security and ease of use. As it is managed by google, there will be less chance for spam accounts. This is fairly easy as importing some methods. Managing state is not so difficult because of combining svelte stores and firebase.
While managing the database, we will use Cloud Firestore provided by firebase which is a no-sql database which is really easy to manage compared to managing your own db.
There will be two db collections.

1. Rough
   This is where all of the data will be stored primarily. Whenever there is a request for an article from the user, we will store the data here. The user data will be saved with the email id for the convenience of loading data. And each user will have their own sub collections.
2. Final
   This is the database which will be used to store admin approved articles. Whenever the admin approves an article, the article will be removed from the rough collection to the final collection. Even if the admin disapproves of the article, it will also be removed from the rough db. Meaning, rough collection will only be used for storing the articles primarily. When the data will be needed for mass display, we will just have to fetch these data directly to the All articles or individual articles page.

### Layout:

All of the pages should contain some common layout like: featured articles, navbar etc. This can be accomplished by `+layout.svelte` component. And as the code is also shared throughout the application, we also will set up some common functionalities within this file.

### Home page:

This is the landing page of the article website. There will be some text and other description and graphic designs. This page must be designed beautifully.

### Individual User page:

#### Individual page:

Here we use the page url svelte stores and dynamic route to deliver the intended data. The data will be fetched using that specific `article/<article name>` route. Svelte dynamic route can be manipulated to display some specific data using the same boilerplate code. So, the process is pretty straightforward. The heading of the article will be used for the url. Every article must have its individual banner. So, The same header of the data will be used for fetching the images assuming that the image will be saved as the same name as the article header which makes the process easier. This is mainly about fetching specific data.

#### User dashboard:

The user must login to contribute to the articles or simply send articles. The user dashboard will have some personalized features like articles for you or others. And this page will allow the user to send the articles. This is the most important page related to state management. As users have to be logged in to see this page and the data must be user specific, state management will play a huge role here.

#### Send article page:

Its functionality is basic. _form action_ will be used which is provided by sveltekit to store the data in the rough data collection. <!--As we implement form actions, we will integrate some of the firstore functions to store the local data to the database.--> There will be mainly The Header, Body, Username, Date (It will be selected automatically using JS datetime) and the Category for Categorization of the articles.

### Admin page functionality:

As said above, the admin page will systematically display all of the articles that are stored in the rough data collection. We will use each loop for rendering the data one by one and use a system similar to the individual page display system. The admin can edit the data as the admin has superior power to other accounts. The admin panel will not be open to the public. The user must input the key which is stored as env variable, to access the admin route.

### All article page:

Here All of the articles stored in the final db will be displayed using the same page url method described above. Just use the final collection instead of rough will be used. This is the page where all of the articles will be shown. So, the page must be designed well. This is also all about fetching data. But instead of fetching individual data, we are mass loading all of the articles that are individually stored in the database.

- Home page, All articles, Individual articles and the admin panel are not state dependent. Meaning it does not matter whether the user is logged in or not. On the other hand, user dashboard and send articles are state dependent.
- Most of the features are open to the user. Though the users must sign up if they want to contribute to the articles.

## Good to have features:

### Search Options:

There are a few good open source options like elasticsearch. It also has some advanced features like full search coverage. (It is not implemented yet.)
