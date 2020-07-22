

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
    // Perform check if all fields are present and allow submission only if all fields are present else change nothing
    let allFieldsPresent = true;
    const fields = document.getElementsByClassName("form-input");
    for (var field of fields) {
        // NOTE: 'required' attribute doesn't trim. Still allows submission. Needs refactorization.
        if (field.value.trim() === "") allFieldsPresent = false; 
    }

    if (allFieldsPresent) {
        event.preventDefault();
        document.getElementById("connect").innerHTML = "Thank you for your message!";
        document.getElementById("message").innerHTML = "I will get in touch with you shortly."
        const connectForm = document.getElementById("connect-form");
        if(connectForm.parentNode) connectForm.parentNode.removeChild(connectForm);
    }  
    else return;
})