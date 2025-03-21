import { star_data } from './interfaces';

export const stars_data: star_data[] = [
  {
    name: 'moon',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    picture: '/assets/destination/image-moon.png',
    avg_distance: '384,400 km',
    travel_time: '3 days',
  },
  {
    name: 'mars',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    picture: '/assets/destination/image-mars.png',
    avg_distance: '225 mil. km',
    travel_time: '9 months',
  },
  {
    name: 'europa',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    picture: '/assets/destination/image-europa.png',
    avg_distance: '628 mil. km',
    travel_time: '3 years',
  },
  {
    name: 'titan',
    picture: '/assets/destination/image-titan.png',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avg_distance: '1.6 bil. km',
    travel_time: '7 years',
  },
];
