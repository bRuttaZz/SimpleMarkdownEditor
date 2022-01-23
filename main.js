

function expand(){
    document.querySelector("body").classList.toggle("active");
  }

function interpret(){
    text = document.getElementById("editor").innerText;
    document.getElementById("preview").innerHTML = marked.parse(text);
}

interpret();

const txt = document.getElementById("editor");
txt.addEventListener('input', interpret);
