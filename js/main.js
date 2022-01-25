const beggin_text = document.getElementById("editor").innerText;

function expand(){
    document.querySelector("body").classList.toggle("active");
  }

function interpret(){
    let text = document.getElementById("editor").innerText;

    document.getElementById("preview").innerHTML = marked.parse(text);
    if (!(text === beggin_text)){
        localStorage.setItem("text", JSON.stringify(text).replaceAll(";","&*&"));
    }
}

const txt = document.getElementById("editor");
txt.addEventListener('input', interpret);


// on mobile devices
const phn = window.matchMedia('(orientation:portrait)').matches;
if (phn){
  document.querySelector("body").classList.toggle("active");
}



// reloading old content
function sae_reload(){
  let text = localStorage.getItem("text");
  document.getElementById("editor").innerText = JSON.parse(text.replaceAll("&*&",";"));
  interpret();
}

const save = document.getElementById("auto_save");
save.addEventListener("change",function(){
  if (this.checked){
    sae_reload();
    localStorage.setItem("save", "true");
  }
  else{
    interpret();
    localStorage.setItem("save", "false");
  }
});

function reloadChecker(){
  if (localStorage.getItem("save")==="true"){
    sae_reload();
    save.checked = true;
  }
  
  else{
    interpret();
    save.checked = false;
  }
}

window.onload = reloadChecker;


