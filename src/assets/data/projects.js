import { v4 as uuidv4 } from 'uuid';
import CactusBabyImg from '../images/CactusBaby.png';
import TheArtSpaceIMG from '../images/The Art Space.png';
import HighLifeImg from '../images/HighLife.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Cactus Baby',
    desc: 'An E-Commerce website for all things Succulents. BABY CACTUS is a simple and user-friendly interface with ability to create an account and save your user history, take payment and have off-line access.',
    img: CactusBabyImg,
  },
  {
    id: uuidv4(),
    name: 'The Art Space',
    desc: 'The Art Space is a central hub to discover, engage, and appreciate new and emerging artists and their talents. Artists can sign up for the site and upload their own art. The Art Space is also a gallery to purchase, like, and comment on any particular art piece. Allowing interaction between the user and any available artist.',
    img: TheArtSpaceIMG,
  },
  {
    id: uuidv4(),
    name: 'High Life',
    desc: 'I want to move to another city and search for a job in that city and Also have the option to search for houses around that city',
    img: HighLifeImg,
  },
];

export default projects;
