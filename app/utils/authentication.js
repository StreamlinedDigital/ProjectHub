import GithubAPI from 'github-api';

function Authentication(){
  const localStoragerUser = JSON.parse(localStorage.getItem("ghuser"))
  // let gh;
  // if(localStoragerUser !== null){
   const gh = new GithubAPI({
    username: localStoragerUser[0],
    password: localStoragerUser[1]
  });
  // }

    return gh
}

export default Authentication;
