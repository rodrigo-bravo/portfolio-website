import { v4 as uuidv4 } from 'uuid';
import bookcompanyImg from '../images/bookcompany.webp';
import UTrackerImg from '../images/covidImg.webp';
import backendImg from '../images/backendCode.webp';
import weatherImg from '../images/weatherImageCover.webp';
import portfolioImg from '../images/portfolioImg.webp';

const projects = [
  {
    id: uuidv4(),
    name: 'BookCompany',
    desc: 'An application with Angular to track your books, podcasts, songs, and other albums all in one place.',
    tags: '#FullStack #Angular #JavaScript #NodeJS #APIs #Firebase #Express #HTML #CSS ',
    sourceLink: 'https://github.com/rodrigo-bravo/bookcompany',
    websiteTitle: 'Live Demo',
    dividor: ' | ',
    websiteLink: 'https://bookcompanyus.com',
    img: bookcompanyImg,
  },
  {
    id: uuidv4(),
    name: 'Backend API Development',
    desc: 'A backend model to provide a REST API such that the front-end can access the database and queries.',
    tags: '#Backend #Express #NodeJS #JavaScript #JWTs #Cookies #MongoDB',
    sourceLink: 'https://github.com/rodrigo-bravo/api-backend',
    img: backendImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: 'An API-connected website to display current weather data of any given city via the OpenWeatherMap API.',
    tags: '#FullStack #JavaScript #NodeJS #API #HTML #CSS ',
    sourceLink: 'https://github.com/rodrigo-bravo/weather-app',
    img: weatherImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc: 'Multi-page responsive portfolio website with high SEO, performance, and accessibility scores.',
    tags: '#Frontend #React #Routing #NodeJS',
    sourceLink: 'https://github.com/rodrigo-bravo/portfolio',
    img: portfolioImg,
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Data Analysis',
    desc: 'Exploratory data analysis using SQL of Covid-19 case and death trends by country.',
    tags: '#SQL #Excel',
    sourceLink: 'https://github.com/rodrigo-bravo/covid-data-analysis',
    img: UTrackerImg,
  },
];

export default projects;
