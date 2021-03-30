const dropdiv = document.querySelector('.drop-signature');
const dropfile = document.querySelector('#search');
const filebutton = document.querySelector('#filebutton')

let file;
let validExtensionsFile = ["image/png", "image/jpeg", "image/jpg"];
//Entre dans la div en drag
dropdiv.addEventListener("dragover", (event) => {
    event.preventDefault();
})

//Sort de la div en drag
dropdiv.addEventListener("dragleave", () => {
})

dropdiv.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    fileCheking(file)
})

filebutton.addEventListener('click', () => {
    dropfile.click();
})

dropfile.addEventListener('change', (event) => {
   file = dropfile.files[0];
   fileCheking(file);   
})

function fileCheking(file) {
    let fileType = file.type;
    if (validExtensionsFile.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropdiv.innerHTML = imgTag;
            dropdiv.classList.add("active-drop");
        }
        fileReader.readAsDataURL(file);

    }
    else{
        alert("veuillez inserer une image en .png");
    }
}