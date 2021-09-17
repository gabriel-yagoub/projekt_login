// Hårdkodar login och lösen
const namn = "test";
const password = "1234";

// Skapa variabler och koppla ihop med inputfälten, loginknappen och rubrik i HTML-filen

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const fName = document.getElementById("namn");
const fPassword = document.getElementById("password");
const storText = document.getElementById("storText");

// Skapa funkation(er)

function notLoggedInView (){
    storText.textContent = "Logga in";
    document.getElementById("storText").style.color = "black"; 
    document.getElementById("loginInput").style.visibility = "visible";
    document.getElementById("logoutBtn").style.visibility = "hidden";
    document.getElementById("loginBtn").style.visibility = "visible";
    document.getElementById("namn").value = "";
    document.getElementById("password").value = "";
}

if (localStorage.getItem("nmn") !== namn || localStorage.getItem("pwd") !== password) {     // Om användare INTE redan är inloggad
    notLoggedInView();                                                                      // Kör funktion     
    loginBtn.addEventListener("click", function(){
        if (fName.value === namn && fPassword.value === password){                          // Om användaren trycker in rätt uppgifter
        localStorage.setItem("nmn", fName.value);
        localStorage.setItem("pwd", fPassword.value);
        document.getElementById("loginInput").style.visibility = "hidden";
        document.getElementById("loginBtn").style.visibility = "hidden";
        document.getElementById("logoutBtn").style.visibility = "visible";
        storText.textContent = "Välkommen";
        document.getElementById("storText").style.color = "black";
            logoutBtn.addEventListener("click", function(){
                localStorage.removeItem("nmn");
                localStorage.removeItem("pwd");
                notLoggedInView();
                
            });
        }
        else if (fName.value !== namn || fPassword.value !== password){                     // Om användaren trycker in fel uppgifter
            storText.textContent = "Fel inloggning";
            document.getElementById("storText").style.color = "red";
            localStorage.removeItem("nmn");
            localStorage.removeItem("pwd");
            document.getElementById("namn").value = "";
            document.getElementById("password").value = "";

        }
    });
}

else if (localStorage.getItem("nmn") === namn && localStorage.getItem("pwd") === password){ // Om användaren redan ÄR inloggad
    storText.textContent = "Välkommen";
    document.getElementById("loginInput").style.visibility = "hidden";
    document.getElementById("logoutBtn").style.visibility = "visible";
    logoutBtn.addEventListener("click", function(){
        localStorage.removeItem("nmn");
        localStorage.removeItem("pwd");
        notLoggedInView();      
    });
};

