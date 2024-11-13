window.addEventListener("load", () => {

    let controlRange = document.querySelector(".control__range");
    let controlNumber = document.querySelector(".control__number");
    let mainForm = document.querySelector(".main__form");
    let passwordDom = document.querySelector(".generate__mail");

    let checkMinus = document.querySelector("#minus");
    let checkMayus = document.querySelector("#mayus");
    let checkNumbers = document.querySelector("#numbers");
    let checkSymbols = document.querySelector("#symbols");

    let copyPass = document.querySelector(".generate__icon");

    let valueRange = 5;


    //SLIDER LONGITUD
    controlRange.addEventListener("input", () => {
        valueRange = controlRange.value;
        controlNumber.innerText = valueRange;
    });



    function getLower(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getMayus(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getNumber(){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
    }

    function getSymbol(){
        return String.fromCharCode(Math.floor(Math.random() * 15) + 33); 
    }



    mainForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let password = "";

        let count = 0; 


        if(checkMinus.checked || checkMayus.checked || checkNumbers.checked || checkSymbols.checked){
            do{
                if(checkMinus.checked && count < valueRange){
                    password += getLower();
                    count++;
                }
        
                if(checkMayus.checked && count < valueRange){
                    password += getMayus();
                    count++;
                }
        
                if(checkNumbers.checked && count < valueRange){
                    password += getNumber();
                    count++;
                }
        
                if(checkSymbols.checked && count < valueRange){
                    password += getSymbol();
                    count++;
                }
    
            }while(count < valueRange);

            
        }

        passwordDom.innerText = password;
        
     
        
        

    });

    copyPass.addEventListener("click", () => {
        let passwordCopy = passwordDom.innerText;

        navigator.clipboard.writeText(passwordCopy);

        alert("La contraseña se ha copiado en su portapapeles");
    });


    console.log(getLower(), getMayus(), getNumber(), getSymbol());
});