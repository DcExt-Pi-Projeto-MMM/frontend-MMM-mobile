import axios from "axios";

const Login = () => {
   return(
      axios.post('http://localhost:3000', {
          username: usuario,
          password: password
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log('erro');
      })
  )
}
export default Login
