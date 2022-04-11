import { v4 as uuidv4 } from 'uuid';
import bookcompanyImg from '../images/bookcompanyv3.png';
import UTrackerImg from '../images/covidImg.jpg';
import backendImg from '../images/backendCode.jpg';
import weatherImg from '../images/weatherImage.png';

const projects = [
  {
    id: uuidv4(),
    name: 'BookCompany',
    desc:
      'An application to track your all books, podcasts, songs, and all your other albums in one place.',
    tags:
      '#FullStack #Angular #JavaScript #Node.js #APIs #Firebase #Express #HTML #CSS ',
    sourceLink: 'https://github.com/rodrigo-bravo/bookcompany',
    websiteTitle: 'Live Demo',
    dividor: ' | ',
    websiteLink: 'https://bookcompanyus.com',
    img: bookcompanyImg,
  },
  {
    id: uuidv4(),
    name: 'Backend API Development',
    desc:
      'A backend model to provide a REST API such that the front-end can access the database and queries.',
    tags: '#Backend #Express #Node.js #JavaScript #JWTs #Cookies',
    sourceLink: 'https://github.com/rodrigo-bravo/api-backend',
    img: backendImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'An app to display current weather data of any given city via the OpenWeatherMap API.',
    tags: '#FullStack #JavaScript #Node.js #API #HTML #CSS ',
    sourceLink: 'https://github.com/rodrigo-bravo/weather-app',
    img: weatherImg,
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Data Analysis',
    desc:
      'Exploratory data analysis in SQL of Covid-19 case and death trends by country.',
    tags: '#SQL #Excel',
    sourceLink: 'https://github.com/rodrigo-bravo/covid-data-analysis',
    img: UTrackerImg,
  },
];

export default projects;
