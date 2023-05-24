import axios from 'axios';

const API_URL =
  'http://ec2-23-22-198-28.compute-1.amazonaws.com:3003/api/Note/';
const API_URL1 =
  ' http://ec2-23-22-198-28.compute-1.amazonaws.com:3003/api/ClassNote/';

// Get user Notes
const getNotes = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL);
  // console.log (response.data);

  return response.data.Note;
};

const getNotesByClassId = async id => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL1 + id);
  // console.log (response.data.note);

  return response.data.note;
};

//getById
const getNoteById = async id => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get (API_URL + id);

  return response.data.Note;
};

const NoteService = {
  //   createNote,
  getNotes,
  getNoteById,
  getNotesByClassId,
};

export default NoteService;
