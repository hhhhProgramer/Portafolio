ScrollReveal().reveal(".information", { delay: 300 });
ScrollReveal().reveal(".presentation", { delay: 300 });
ScrollReveal().reveal(".redes", { delay: 300 });
let tajets = document.getElementsByClassName("tarjet");
for (let index = 0; index < tajets.length; index++) {
    ScrollReveal().reveal('.tarjet', { delay: 300 });
    ScrollReveal().reveal('.tarjet-text', { delay: 300 });
}
for (let index = 0; index < tajets.length; index++) {
    ScrollReveal().reveal('.card', { delay: 300 });
}

let codes = ["document.getElementById('msg').innerText='hello world'", "document.getElementById('msg').innerText='Programador'"];
let index = 0;
let contLetter = 0;
let text = "";

function write() {
    document.getElementById('code').innerText = codes[index].substr(0, contLetter);

    if (contLetter != codes[index].length) {
        contLetter++;
        setTimeout("write()", 100);
    } else {
        let l = codes[index].lastIndexOf("'") - 42;
        let word = codes[index].substr(42, l); //(codes[index].length - 5);
        document.getElementById('msg').innerText = word;
        contLetter = 0;
        index == codes.length - 1 ? index = 0 : index++;
        setTimeout("write()", 1000);
    }

}

write();