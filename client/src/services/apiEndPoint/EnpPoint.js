const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Users = `${BASE_URL}user`;
export const Trainers = `${BASE_URL}trainer`;
export const Login = `${BASE_URL}login`;
export const oAuthLogin = `${BASE_URL}oauth`

export const totalUser = `${BASE_URL}totaluser`;
export const totalTrainer = `${BASE_URL}trainercount`;

// home trainer 
export const knowTrainer = {
    getAllTrainer: () => `${BASE_URL}knowtrainer`, // Pagination handled by service file
};

export const workout = `${BASE_URL}workout`;