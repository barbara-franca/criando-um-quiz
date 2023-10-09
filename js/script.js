const btnRestart = document.querySelector(".finish button");
const btnproximo = document.querySelector(".content button");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const questoes = document.querySelector(".questoes")
const respostas = document.querySelector(".respostas")

let indiceatual = 0;
let perguntasCorretas = 0;

function certa(){
    const certa = document.getElementById("certa")
    certa.style.background = "green"
    let erradas = document.querySelectorAll("#errada");
    for (let index = 0; index < erradas.length; index++) {
        erradas[index].style.backgroundColor = "red";
    
    }
    perguntasCorretas++;
}
function errada(){
    const certa = document.getElementById("certa")
    certa.style.background = "green"
    let erradas = document.querySelectorAll("#errada");
    for (let index = 0; index < erradas.length; index++) {
        erradas[index].style.backgroundColor = "red";
    }
}
function questao1(){
    const indiceatual = 0;
    spnQtd.innerHTML = `${indiceatual + 1}/3`;
    respostas.innerHTML = "";
    questoes.innerHTML = "quanto é 1 + 1 ?";
    const div1 = document.createElement("div");
    div1.innerHTML = `<button onclick="certa()" id="certa">2</button>`;
    const div2 = document.createElement("div");
    div2.innerHTML = `<button onclick="errada()" id="errada">4</button>`;
    const div3 = document.createElement("div");
    div3.innerHTML = `<button onclick="errada()" id="errada">3</button>`;
   
    respostas.appendChild(div1);
    respostas.appendChild(div2);
    respostas.appendChild(div3);

    btnproximo.addEventListener("click", questao2);
};

questao1()

function questao2(){
    spnQtd.innerHTML = `${indiceatual + 2}/3`;
    respostas.innerHTML = ""
    questoes.innerHTML = "Quem e o membro mais velho do BTS";
    const div1 = document.createElement("div");
      div1.innerHTML = `<button onclick="errada()" id="errada">RM</button>`;
    const div2 = document.createElement("div");
      div2.innerHTML = `<button onclick="errada()" id="errada">Yoongi</button>`;
    const div3 = document.createElement("div");
      div3.innerHTML = `<button onclick="certa()" id="certa">Seokjin</button>`;

    respostas.appendChild(div1);
    respostas.appendChild(div2);
    respostas.appendChild(div3);

    btnproximo.addEventListener("click", questao3);
};

questao1()

function questao3(){
    spnQtd.innerHTML = `${indiceatual + 3}/4`;
    respostas.innerHTML = ""
    questoes.innerHTML = "Qual o maior animal do mundo?";
    const div1 = document.createElement("div");
      div1.innerHTML = `<button onclick="errada()" id="errada">Girafa</button>`;
    const div2 = document.createElement("div");
      div2.innerHTML = `<button onclick="certa()" id="certa">Baleia Azul</button>`;
    const div3 = document.createElement("div");
      div3.innerHTML = `<button onclick="errada()" id="errada">Elefante</button>`;
    
      respostas.appendChild(div1);
      respostas.appendChild(div2);
      respostas.appendChild(div3);

      btnproximo.addEventListener("click", questao4);
      
};

questao1()

function questao4(){
    spnQtd.innerHTML = `${indiceatual + 4}/4`;
    respostas.innerHTML = ""
    questoes.innerHTML = "Quais dessas flores é uma margarida?";
    const div1 = document.createElement("div");
      div1.innerHTML = `<button onclick="certa()" id="certa"> <img src="img/margarida.png"> </button>`;
    const div2 = document.createElement("div");
      div2.innerHTML = `<button onclick="errada()" id="errada"> <img src="img/girassol.png"> </button>`;
    const div3 = document.createElement("div");
      div3.innerHTML = `<button onclick="errada()" id="errada"> <img src="img/tulipa.png"> </button>`;
    
      respostas.appendChild(div1);
      respostas.appendChild(div2);
      respostas.appendChild(div3);

      btnproximo.addEventListener("click", finish);
      
};

function finish() {
    textFinish.innerHTML = `você acertou ${perguntasCorretas} de 4`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}
btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    indiceatual = 0;
    perguntasCorretas = 0;
    window.location.reload();
};