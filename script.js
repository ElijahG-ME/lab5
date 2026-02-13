function validate(elements){
    const username = elements[0].value.trim();    
    const errorusername = document.getElementById("error-username");
    let usernameValid = true; 

    if (username === ""){
        errorusername.style.display  = "inline";
        errorusername.textContent = "Username is required";
        elements[0].classList.add("error-border");
        usernameValid = false;
    }

    const email = elements[1].value.trim();
    const erroremail = document.getElementById("error-email");
    let emailValid = true; 
    if (email === "" || !email.includes("@") || !email.includes(".")){
        erroremail.style.display  = "inline";
        erroremail.textContent = "Enter a valid email address";
        elements[1].classList.add("error-border");
        emailValid = false;
    }

    const password = elements[2].value.trim();
    const errorpassword = document.getElementById("error-password");
    let passwordValid = true; 
    if (password.length < 8){
        errorpassword.style.display  = "inline";
        errorpassword.textContent = "Password must be at least 8 characters";
        elements[2].classList.add("error-border");
        passwordValid = false;
    }

    const terms = document.getElementById("terms");
    const errorterms = document.getElementById("error-terms");
    let termsValid = true;
    if (!terms.checked) {
        errorterms.style.display = "inline";
        errorterms.textContent = "You must accept the terms";
        termsValid = false;
    }


    if (usernameValid && passwordValid && emailValid && termsValid) {
        return true;
    }
    return false;
    
}

function main(){
    document.addEventListener("DOMContentLoaded", () => {
        console.log("buh");
        

        const elements = document.querySelectorAll("#username, #email, #password");

        elements.forEach((element) => {
            element.addEventListener("focus", () => {
                element.style.backgroundColor = "#fffae0";
            });

            element.addEventListener("blur", () => {
                element.style.backgroundColor = "#ffffff";
            });
        });

        elements[0].addEventListener("input", () => {
            const username = elements[0].value.trim();
            const errorusername = document.getElementById("error-username");
            if (username != ""){
                elements[0].classList.remove("error-border");
                errorusername.textContent = "";
                errorusername.style.display = "none";
                usernameValid = true
            }

        });
        elements[1].addEventListener("input", () => {
            const email = elements[1].value.trim();
            const erroremail = document.getElementById("error-email");
            if (email != "" && email.includes("@") && email.includes(".")){
                elements[1].classList.remove("error-border");
                erroremail.textContent = "";
                erroremail.style.display = "none";
                emailValid = true
            }

        });
        elements[2].addEventListener("input", () => {
            const password = elements[2].value.trim();
            const errorpassword = document.getElementById("error-password");
            if (password.length >= 8){
                elements[2].classList.remove("error-border");
                errorpassword.textContent = "";
                errorpassword.style.display = "none";
                passwordValid = true
            }

        });

        const terms = document.getElementById("terms");
        const errorterms = document.getElementById("error-terms");
        terms.addEventListener("click", () => {
            if (terms.checked) {
                errorterms.style.display = "none";
                errorterms.textContent = "";
                termsValid = true
            }

        });


        submit = document.getElementById("signup-form");
        submit.addEventListener("submit", (e) => {
            e.preventDefault();
            let valid = validate(elements);
            if(valid) alert("Successfully signed up");
        });

    });

    const tiles = document.querySelectorAll(".thumb");

    
    tiles.forEach((tile) => {
        tile.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                tile.click(); 
            }
        });   
        tile.addEventListener("click", () => {
            tiles.forEach((tile) => {tile.classList.remove("expanded")});
            tile.classList.add("expanded");
            document.getElementById("image-caption").textContent = `You selected: ${tile.dataset.city}`;
        })
    });


}
main();