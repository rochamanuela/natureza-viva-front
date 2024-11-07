function togglePassword() {
    const senhaInput = document.getElementById("senhaID");
    const button = event.target;

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        button.innerHTML = "<span class='material-symbols-outlined icon-style'>visibility_off</span>";
    } else {
        senhaInput.type = "password";
        button.innerHTML = "<span class='material-icons-outlined icon-style'>visibility</span>";
    }
}