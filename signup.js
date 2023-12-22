Input = document.querySelector("input")

document.getElementById("submit").addEventListener("click", function() {
    if (Input.value.includes("@") && Input.value.includes(".com")) {
        popup()
        
    } else {

        document.getElementById("valid").textContent = "Valid email required"
        document.getElementById("valid").style.color = "red"
        Input.style.border = "2px solid red"
        Input.style.color = "red"

        document.querySelector("section").style.visibility = "hidden"

    }
})

function popup() {

    document.getElementById("valid").textContent = "Valid email required"
    document.getElementById("valid").style.visibility = "hidden"
    Input.style.border = "2px solid grey"
    Input.style.color = "black"

    document.querySelector("main").style.visibility = "hidden"


    document.querySelector("section").style.visibility = "visible"

    document.querySelector("section").innerHTML = `
    
         <img src="images/icon-success.svg" alt="success.svg">

        <h2>Thanks for subscribing!</h2>

        <p class="pop"> A confirmation email has been sent to <span>${Input.value}</span>. Please open it and click the button inside to confirm your subscription.
        </p>

        <button id="dismiss" > Dismiss message </button>

    `
    document.getElementById("dismiss").addEventListener("click", dismiss)
}



function dismiss() {
    document.querySelector("section").style.visibility = "hidden"

    document.querySelector("main").style.visibility = "visible"
    Input.value =""
}