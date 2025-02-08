function goToGreeting() {
    let name = document.getElementById("nameInput").value;
    
    if (name.trim() === "") {
        alert("Please enter your name!");
    } else {
        localStorage.setItem("userName", name);
        window.location.href = "greetings.html";
    }
}
