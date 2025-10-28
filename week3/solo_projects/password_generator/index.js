const generatePassBtn = document.getElementById("generate-pass-btn")
const pass1El = document.getElementById("pass1-el")
const pass2El = document.getElementById("pass2-el")

generatePassBtn.addEventListener("click", function () {
    pass1El.value = generateStrongPassword(15)
    pass2El.value = generateStrongPassword(15)
})

pass1El.addEventListener("click", function () {
    copyPassword(pass1El.value)
})

pass2El.addEventListener("click", function () {
    copyPassword(pass2El.value)
})

function generateStrongPassword(length) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const all = upper + lower + numbers + symbols;
    let password = "";

    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = password.length; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}
function copyPassword(value) {
    if (value) {
        navigator.clipboard.writeText(value).then(() => {
            const passCopiedEl = document.getElementById("pass-copied-el");
            passCopiedEl.classList.add("show");

            setTimeout(() => passCopiedEl.classList.remove("show"), 1000);
        });
    }
}
