import dogImage from '../assets/images/animals/dog.jpg';
import catImage from '../assets/images/animals/cat.jpg';
import donkeyImage from '../assets/images/animals/donkey.jpg';
import dog2Image from '../assets/images/animals/dog2.jpg';
import rabbitImage from '../assets/images/animals/rabbit.jpg';
import fishImage from '../assets/images/animals/fish.jpg';

export const initialAnimals = [
  {
    id: 1,
    name: "Песик",
    image: dogImage,
    description: "очень добрый и безобидный"
    
  },
  {
    id: 2,
    name: "Котик",
    image: catImage,
    description: "Король джунглей, крупная хищная кошка из семейства кошачьих"
  },
  {
    id: 3,
    name: "Осел",
    image: donkeyImage,
    description: "любит драконов"
  },
  {
    id: 4,
    name: "Собачка",
    image: dog2Image,
    description: "подозрительный песик"
  },
  {
    id: 5,
    name: "Кролик",
    image: rabbitImage,
    description: "интересное животное"
  },
  {
    id: 6,
    name: "Рыбка",
    image: fishImage,
    description: "просто милая рыбка, плаввает в океане туда-сюда"
  }
];


export const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('animalCards');
    return saved ? JSON.parse(saved) : initialAnimals;
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    return initialAnimals;
  }
};