// const BASE_URL = "http://localhost:8080/fitness360/";
const BASE_URL = "https://fitness360app.onrender.com/fitness360/";

export const GetUsers = {
    getAllUsers: () => `${BASE_URL}user`,
};

export const totalUser = `${BASE_URL}totaluser`;
export const totalTrainer = `${BASE_URL}trainercount`;


export const Users = `${BASE_URL}user`;


export const Trainers = `${BASE_URL}trainer`;
export const Login = `${BASE_URL}login`;

// home trainer 
export const knowTrainer = {
    getAllTrainer: () => `${BASE_URL}knowtrainer`, // Pagination handled by service file
};



// # local
// # B_URL = "http://localhost:8080/fitness360/"

// # live
// B_URL = "https://fitness360app.onrender.com"