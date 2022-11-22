const form433of = document.getElementById("form4-3-3-of")
const form433def = document.getElementById("form4-3-3-def")
const form4321 = document.getElementById("form4-3-2-1")
const goleiroForm1 = document.getElementsByClassName("gol")[0]
const goleiroForm2 = document.getElementsByClassName("gol")[1]
const goleiroForm3 = document.getElementsByClassName("gol")[2]
const latdForm1 = document.getElementsByClassName('latd')[0]
const latdForm2 = document.getElementsByClassName('latd')[1]
const latdForm3 = document.getElementsByClassName('latd')[2]
const lateForm1 = document.getElementsByClassName("late")[0]
const lateForm2 = document.getElementsByClassName("late")[1]
const lateForm3 = document.getElementsByClassName("late")[2]
const zagdForm1 = document.getElementsByClassName("zagd")[0]
const zagdForm2 = document.getElementsByClassName("zagd")[1]
const zagdForm3 = document.getElementsByClassName("zagd")[2]
const zageForm1 = document.getElementsByClassName("zage")[0]
const zageForm2 = document.getElementsByClassName("zage")[1]
const zageForm3 = document.getElementsByClassName("zage")[2]
const meia1Form1 = document.getElementsByClassName("mei1")[0]
const meia1Form2 = document.getElementsByClassName("mei1")[1]
const meia1Form3 = document.getElementsByClassName("mei1")[2]
const meia2Form1 = document.getElementsByClassName("mei2")[0]
const meia2Form2 = document.getElementsByClassName("mei2")[1]
const meia2Form3 = document.getElementsByClassName("mei2")[2]
const meia3Form1 = document.getElementsByClassName("mei3")
[0]
const meia3Form2 = document.getElementsByClassName("mei3")
[1]
const meia3Form3 = document.getElementsByClassName("mei3")
[2]
const ata2Form1 = document.getElementsByClassName("ata2")[0]
const ata2Form2 = document.getElementsByClassName("ata2")[1]
const ata2Form3 = document.getElementsByClassName("ata2")[2]
const ata1Form1 = document.getElementsByClassName("ata1")[0]
const ata1Form2 = document.getElementsByClassName("ata1")[1]
const ata1Form3 = document.getElementsByClassName("ata1")[2]
const ata3Form1 = document.getElementsByClassName("ata3")[0]
const ata3Form2 = document.getElementsByClassName("ata3")[1]
const ata3Form3 = document.getElementsByClassName("ata3")[2]

function selectform433of() {
    form433of.style.display = "block"
    form433def.style.display = "none"
    form4321.style.display = "none"
}

function selectform433def() {
    form433def.style.display = "block"
    form433of.style.display = "none"
    form4321.style.display = "none"
}

function selectform4321() {
    form4321.style.display = "block"
    form433def.style.display = "none"
    form433of.style.display = "none"
}

function golAlisson() {
    goleiroForm1.src = "./imgs/jogadores/Alison.webp"
    goleiroForm1.style.borderRadius = "50%"
    goleiroForm2.src = "./imgs/jogadores/Alison.webp"
    goleiroForm2.style.borderRadius = "50%"
    goleiroForm3.src = "./imgs/jogadores/Alison.webp"
    goleiroForm3.style.borderRadius = "50%"
}

function golEderson() {
    goleiroForm1.src = "./imgs/jogadores/everson.jpg"
    goleiroForm1.style.borderRadius = "50%"
    goleiroForm2.src = "./imgs/jogadores/everson.jpg"
    goleiroForm2.style.borderRadius = "50%"
    goleiroForm3.src = "./imgs/jogadores/everson.jpg"
    goleiroForm3.style.borderRadius = "50%"
}

function golWeverton(){
    goleiroForm1.src = "./imgs/jogadores/weverton.jpg"
    goleiroForm1.style.borderRadius = "50%"
    goleiroForm2.src = "./imgs/jogadores/weverton.jpg"
    goleiroForm2.style.borderRadius = "50%"
    goleiroForm3.src = "./imgs/jogadores/weverton.jpg"
    goleiroForm3.style.borderRadius = "50%"
}

function latdDanilo(){
    latdForm1.src = "./imgs/jogadores/danilo.jpg"
    latdForm1.style.borderRadius = "50%"
    latdForm2.src = "./imgs/jogadores/danilo.jpg"
    latdForm2.style.borderRadius = "50%"
    latdForm3.src = "./imgs/jogadores/danilo.jpg"
    latdForm3.style.borderRadius = "50%"
}

function latdDani(){
    latdForm1.src = "./imgs/jogadores/danialves.jpg"
    latdForm1.style.borderRadius = "50%"
    latdForm2.src = "./imgs/jogadores/danialves.jpg"
    latdForm2.style.borderRadius = "50%"
    latdForm3.src = "./imgs/jogadores/danialves.jpg"
    latdForm3.style.borderRadius = "50%"
}

function latealexsandro(){
    lateForm1.src = "./imgs/jogadores/alexsandro.jpg"
    lateForm1.style.borderRadius = "50%"
    lateForm2.src = "./imgs/jogadores/alexsandro.jpg"
    lateForm2.style.borderRadius = "50%"
    lateForm3.src = "./imgs/jogadores/alexsandro.jpg"
    lateForm3.style.borderRadius = "50%"
}

function latealextelles(){
    lateForm1.src = "./imgs/jogadores/alextelles.webp"
    lateForm1.style.borderRadius = "50%"
    lateForm2.src = "./imgs/jogadores/alextelles.webp"
    lateForm2.style.borderRadius = "50%"
    lateForm3.src = "./imgs/jogadores/alextelles.webp"
    lateForm3.style.borderRadius = "50%"
}

function zagdmarquinhos(){
    zagdForm1.src = "./imgs/jogadores/marquinhos.jpg"
    zagdForm1.style.borderRadius = "50%"
    zagdForm2.src = "./imgs/jogadores/marquinhos.jpg"
    zagdForm2.style.borderRadius = "50%"
    zagdForm3.src = "./imgs/jogadores/marquinhos.jpg"
    zagdForm3.style.borderRadius = "50%"
}

function zagdbremer(){
    zagdForm1.src = "./imgs/jogadores/bremer.webp"
    zagdForm1.style.borderRadius = "50%"
    zagdForm2.src = "./imgs/jogadores/bremer.webp"
    zagdForm2.style.borderRadius = "50%"
    zagdForm3.src = "./imgs/jogadores/bremer.webp"
    zagdForm3.style.borderRadius = "50%"
}

function zagethiagosilva(){
    zageForm1.src = "./imgs/jogadores/thiagosilva.jpg"
    zageForm1.style.borderRadius = "50%"
    zageForm2.src = "./imgs/jogadores/thiagosilva.jpg"
    zageForm2.style.borderRadius = "50%"
    zageForm3.src = "./imgs/jogadores/thiagosilva.jpg"
    zageForm3.style.borderRadius = "50%"
}

function zagemilitao(){
    zageForm1.src = "./imgs/jogadores/edermilitao.jpg"
    zageForm1.style.borderRadius = "50%"
    zageForm2.src = "./imgs/jogadores/edermilitao.jpg"
    zageForm2.style.borderRadius = "50%"
    zageForm3.src = "./imgs/jogadores/edermilitao.jpg"
    zageForm3.style.borderRadius = "50%"
}

function meia1casemiro() {
    meia1Form1.src = "./imgs/jogadores/casemiro.jpg"
    meia1Form1.style.borderRadius = "50%"
    meia1Form2.src = "./imgs/jogadores/casemiro.jpg"
    meia1Form2.style.borderRadius = "50%"
    meia1Form3.src = "./imgs/jogadores/casemiro.jpg"
    meia1Form3.style.borderRadius = "50%"
}

function meia1fabinho() {
    meia1Form1.src = "./imgs/jogadores/fabinho.jpg"
    meia1Form1.style.borderRadius = "50%"
    meia1Form2.src = "./imgs/jogadores/fabinho.jpg"
    meia1Form2.style.borderRadius = "50%"
    meia1Form3.src = "./imgs/jogadores/fabinho.jpg"
    meia1Form3.style.borderRadius = "50%"
}

function meia2fred() {
    meia2Form1.src = "./imgs/jogadores/fred.jpeg"
    meia2Form1.style.borderRadius = "50%"
    meia2Form2.src = "./imgs/jogadores/fred.jpeg"
    meia2Form2.style.borderRadius = "50%"
    meia2Form3.src = "./imgs/jogadores/fred.jpeg"
    meia2Form3.style.borderRadius = "50%"

}

function meia2paqueta() {
    meia2Form1.src = "./imgs/jogadores/paqueta.jpg"
    meia2Form1.style.borderRadius = "50%"
    meia2Form2.src = "./imgs/jogadores/paqueta.jpg"
    meia2Form2.style.borderRadius = "50%"
    meia2Form3.src = "./imgs/jogadores/paqueta.jpg"
    meia2Form3.style.borderRadius = "50%"

}

function meia2bruno() {
    meia2Form1.src = "./imgs/jogadores/brunoguimaraes.jpg"
    meia2Form1.style.borderRadius = "50%"
    meia2Form2.src = "./imgs/jogadores/brunoguimaraes.jpg"
    meia2Form2.style.borderRadius = "50%"
    meia2Form3.src = "./imgs/jogadores/brunoguimaraes.jpg"
    meia2Form3.style.borderRadius = "50%"

}


function meia3neymar() {
    meia3Form1.src = "./imgs/jogadores/neymar.webp"
    meia3Form1.style.borderRadius = "50%"
    meia3Form2.src = "./imgs/jogadores/neymar.webp"
    meia3Form2.style.borderRadius = "50%"
    meia3Form3.src = "./imgs/jogadores/neymar.webp"
    meia3Form3.style.borderRadius = "50%"
}

function meia3everton() {
    meia3Form1.src = "./imgs/jogadores/everton.jpg"
    meia3Form1.style.borderRadius = "50%"
    meia3Form2.src = "./imgs/jogadores/everton.jpg"
    meia3Form2.style.borderRadius = "50%"
    meia3Form3.src = "./imgs/jogadores/everton.jpg"
    meia3Form3.style.borderRadius = "50%"
}

function atac2raphinha() {
    ata2Form1.src = "./imgs/jogadores/raphinha.png"
    ata2Form1.style.borderRadius = "50%"
    ata2Form2.src = "./imgs/jogadores/raphinha.png"
    ata2Form2.style.borderRadius = "50%"
    ata2Form3.src = "./imgs/jogadores/raphinha.png"
    ata2Form3.style.borderRadius = "50%"
}

function atac2antony() {
    ata2Form1.src = "./imgs/jogadores/antony.jpg"
    ata2Form1.style.borderRadius = "50%"
    ata2Form2.src = "./imgs/jogadores/antony.jpg"
    ata2Form2.style.borderRadius = "50%"
    ata2Form3.src = "./imgs/jogadores/antony.jpg"
    ata2Form3.style.borderRadius = "50%"
}

function atac2rodrygo() {
    ata2Form1.src = "./imgs/jogadores/rodrygo.jpg"
    ata2Form1.style.borderRadius = "50%"
    ata2Form2.src = "./imgs/jogadores/rodrygo.jpg"
    ata2Form2.style.borderRadius = "50%"
    ata2Form3.src = "./imgs/jogadores/rodrygo.jpg"
    ata2Form3.style.borderRadius = "50%"
}

function atac1vinijr() {
    ata1Form1.src = "./imgs/jogadores/vinijr.webp"
    ata1Form1.style.borderRadius = "50%"
    ata1Form2.src = "./imgs/jogadores/vinijr.webp"
    ata1Form2.style.borderRadius = "50%"
    ata1Form3.src = "./imgs/jogadores/vinijr.webp"
    ata1Form3.style.borderRadius = "50%"
} 

function atac1martinelli() {
    ata1Form1.src = "./imgs/jogadores/martinelli.webp"
    ata1Form1.style.borderRadius = "50%"
    ata1Form2.src = "./imgs/jogadores/martinelli.webp"
    ata1Form2.style.borderRadius = "50%"
    ata1Form3.src = "./imgs/jogadores/martinelli.webp"
    ata1Form3.style.borderRadius = "50%"
}

function atac1neymar() {
    ata1Form1.src = "./imgs/jogadores/neymar.webp"
    ata1Form1.style.borderRadius = "50%"
    ata1Form2.src = "./imgs/jogadores/neymar.webp"
    ata1Form2.style.borderRadius = "50%"
    ata1Form3.src = "./imgs/jogadores/neymar.webp"
    ata1Form3.style.borderRadius = "50%"
}

function atac3richarlison() {
    ata3Form1.src = "./imgs/jogadores/richarlison.jpg"
    ata3Form1.style.borderRadius = "50%"
    ata3Form2.src = "./imgs/jogadores/richarlison.jpg"
    ata3Form2.style.borderRadius = "50%"
    ata3Form3.src = "./imgs/jogadores/richarlison.jpg"
    ata3Form3.style.borderRadius = "50%"

}

function atac3pedro() {
    ata3Form1.src = "./imgs/jogadores/pedro.jpg"
    ata3Form1.style.borderRadius = "50%"
    ata3Form2.src = "./imgs/jogadores/pedro.jpg"
    ata3Form2.style.borderRadius = "50%"
    ata3Form3.src = "./imgs/jogadores/pedro.jpg"
    ata3Form3.style.borderRadius = "50%"
}

function atac3gabrieljesus() {
    ata3Form1.src = "./imgs/jogadores/gabrieljesus.jpg"
    ata3Form1.style.borderRadius = "50%"
    ata3Form2.src = "./imgs/jogadores/gabrieljesus.jpg"
    ata3Form2.style.borderRadius = "50%"
    ata3Form3.src = "./imgs/jogadores/gabrieljesus.jpg"
    ata3Form3.style.borderRadius = "50%"
}
