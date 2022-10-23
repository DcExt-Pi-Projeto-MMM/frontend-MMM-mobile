import axios from "axios";

const Login = () => {
    return(
        axios.post('/user_login', {
            username: 'john1904',
            password: 'spiderman'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    )
}

export default Login
