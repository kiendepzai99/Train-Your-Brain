import axios from "axios";
import ApiConstants from "../constants/ApiConstants";

const validateUser = () => axios.get(
    ApiConstants.CHECK_AUTH_URL,
    {
        withCredentials: true
    }
);

const login = (loginInfo) => axios.post(
    ApiConstants.LOGIN_URL,
    loginInfo,
    {
        withCredentials: true
    }
);

const authService = {
    validateUser,
    login
}

export default authService;