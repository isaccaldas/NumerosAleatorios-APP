const numero = document.querySelector(".number");
const btn = document.querySelector(".generate");

const numeroAletorio = () =>{
// gera um número entre 0 e 1
const rand = Math.floor(Math.random() * 10 + 1 );
numero.innerHTML = rand;
};

btn.addEventListener("click", numeroAletorio);

//numeroAletorio();