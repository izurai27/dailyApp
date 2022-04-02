const displayPassword = () => {
    const inputTarget = document.getElementById('togglePassword').previousElementSibling
    console.log(document.getElementById('togglePassword'))
    const type = inputTarget.getAttribute("type") === "password" ? "text" : "password";
    inputTarget.setAttribute("type", type);
    document.getElementById('togglePassword').classList.toggle("bi-eye");
}

export default displayPassword