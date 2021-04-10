ScrollReveal(".information", { delay: 500 });
ScrollReveal(".presentation", { delay: 500 });
ScrollReveal(".redes", { delay: 500 });

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