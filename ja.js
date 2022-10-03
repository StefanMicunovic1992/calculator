let rezultat = document.querySelector("#rezultat");

let btns = Array.from(document.querySelectorAll("button"));
console.log(btns);

btns.map(btns => {
    btns.addEventListener("click", (e)=>{
        switch(e.target.innerText){
            case 'AC':
                rezultat.innerText = '';
                break;
            case '<-':
                if(rezultat.innerText){
                    rezultat.innerText = rezultat.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    rezultat.innerText = eval(rezultat.innerText);
                } catch {
                    rezultat.innerText = 'Greska'
                }
                break;
            default:
                rezultat.innerText += e.target.innerText
        }
    })
})