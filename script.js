function goToGreeting() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        localStorage.setItem("userName", name);
        window.location.href = "greetings.html";
    } else {
        alert("Please enter your name!");
    }
}
