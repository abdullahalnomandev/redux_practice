const increment = (nr) => {
  return {
    type: "INCREMENT",
    payLoad:nr
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const loggedIn = ()=>{
    return {
        type :"SIGN_IN"
    }
}
export  {increment,decrement,loggedIn}
