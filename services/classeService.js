import axios from 'axios';

const API_URL =
  ' http://ec2-23-22-198-28.compute-1.amazonaws.com:3003/api/Classe/';

// Get user Classes
const getClasses = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL);
  // console.log (response.data);

  return response.data.classe;
};

//getById
const getClasseById = async id => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL + id);

  return response.data.classe;
};

const ClasseService = {
  //   createClasse,
  getClasses,
  getClasseById,
};

export default ClasseService;
