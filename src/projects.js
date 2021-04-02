let projects = [
{
    id: 0,
    name: 'JOVA',
    description: 'A Full Stack Web Application built with React, Nextjs and Tailwind. React-Simple-Maps is used for the map display of the US. We use the Pro-Publica Congress API to get the political data and Twitter widgets for the Twitter feed.',
    mission: 'JOVA is a user interface for users to get information on their respective congresspeople and to learn more about them and their voting positions. We strive to refamiliarize users with their representatives',
    github:'https://github.com/jenesh/jova',
    live:'https://jova.vercel.app/',
    images: ['../pics/jovacountrymap.png','../pics/jovastatecongressppl.png','../pics/jovacongressinfopage.png','../pics/jovavotingpositions.png','../jovastatereps.png']
},
{
    id: 1,
    name: 'myTunes',
    description:'A Full-Stack Web Application built with React and Nodejs. Using the Spotify Search API I can search albums and their metadata that I then cache in my PostgreSQL database. I use React to display results and Nodejs to make requests to the Spotify API and my own backend',
    mission:'Mytunes is a full-stack application in which users can post, comment on, and discuss albums that they are listening to.',
    github:'https://github.com/ojones311/mytunes',
    live:'https://mytunesoj.netlify.app/',
    images:['../pics/mytunes-home.png','../pics/mytunes-profile.png','../pics/mytunes-search.png','../pics/mytunes-albums.png']
},
{   
    id: 2,
    name: 'MemeMe',
    description: 'A Full-Stack Web Application built with React and Nodejs. Using React JS for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSql for database management.' ,
    mission: 'MemeMe is a social media site where users can post their favorite memes. Users can add friends and see the memes their friends post as well.',
    github: 'https://github.com/ojones311/MemeMe',
    live:'https://meme-me-ny.herokuapp.com/',
    images: ['../pics/meme-me-profile.png','../pics/meme-me-login.png','../pics/meme-me-feed.png','../pics/meme-me-post.png']
},
{
    id: 3,
    name: 'Bored App',
    description: 'A frontend app built with React where visitors can use the activity loader button to get a random activity from the Bored API. The activity is sent to the Custom Google Search API as a search term and used to request search results.',
    mission:'The Bored App aims to give people something to do when they are bored. Inspired from pandemic life.',
    github: 'https://github.com/ojones311/boredapp',
    live: 'https://boredportal.netlify.app/',
    images: ['../pics/boredportalAL.png', '../pics/boredportalresults.png']
},
{
    id: 4,
    name: 'Choral',
    description:'A Full Stack Web Application built with React and Express. Howler JS and the Web Audio API are used for audio processing. Media Player API is used for recording',
    mission: 'Choral is a remote musical playground where multiple users can collaborate on a single song. Its our solution for remote musical collaboration',
    github: 'https://github.com/PeterFiorentino/Choral',
    live: 'https://choral.herokuapp.com/',
    images: ['../pics/choral-feed.png','../pics/choral-profile.png','../pics/choral-addreef.png','../pics/choral-reef1.png','../pics/choral-reef2.png']
},
{   
    id: 5,
    name: 'Twitter-Clone',
    description: 'A HTML and CSS Twitter Clone. Built with HTML and CSS.',
    mission: ' A simple Twitter clone of their landing page.',
    github: 'https://github.com/ojones311/Pursuit-Core-Web-Twitter-CSS-Assignment',
    live:'',
    images: ['../pics/twitterclone.png']
},
]


module.exports = projects