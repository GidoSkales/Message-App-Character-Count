// {}
// []
const charCount = document.getElementById('char');
const textArea = document.getElementById('area');
const max = 200;

const calc = () => {
    textArea.addEventListener("keypress", (vg)=>{
        const makeCalc = textArea.value.length;
        const warNN = document.querySelector("#warn");
        if (vg.keyCode == 13) {
            console.log(makeCalc);
        charCount.innerHTML = makeCalc;
        }
        else {
            // 
        }
        if(makeCalc > 200){
            textArea.style.color = "red";
            charCount.appendChild(warNN);
            warNN.style.display = "block";
        }
        else if(makeCalc < 200){
            textArea.style.color = "";
            charCount.removeChild(warNN) = false;
            warNN.style.display = "block";
        }
    });
}
calc();