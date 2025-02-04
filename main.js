const checked = document.getElementById("checked");
checked.addEventListener("click", e => {
    if (e.target.checked) {
        e.target.classList.add("checked");
    } else {
        e.target.classList.remove("checked");
    }
})