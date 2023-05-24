import axios from 'axios';

const API_URL =
  ' http://ec2-23-22-198-28.compute-1.amazonaws.com:3003/api/DetailNote/';

// Get user Notes
// const getNotes = async () => {
//   //   const config = {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   };

//   const response = await axios.get (API_URL);
//   // console.log (response.data);

//   return response.data.Note;
// };

// const getNotesByClassId = async id => {
//   //   const config = {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   };

//   const response = await axios.get (API_URL1 + id);
//   // console.log (response.data.note);

//   return response.data.note;
// };

//getById
const getDetailNoteById = async id => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL + id);

  return response.data.detailnote;
};

const DetailNoteService = {
  //   createNote,
  getDetailNoteById,
};

export default DetailNoteService;
