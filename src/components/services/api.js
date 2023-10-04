import axios from 'axios';

export const fetchPhotos = async () => {
  const API_KEY = '38894004-6d48aacf53b986fdbdf72bda8'

  const { data } = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=38894004-6d48aacf53b986fdbdf72bda8&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

