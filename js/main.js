// constans of each characters
const gon = document.querySelector('#showGon')
const killua = document.querySelector('#showKillua')
const kurapika = document.querySelector('#showKurapika')
const leorio = document. querySelector('#showLeorio')
// constans of nen types
const gonA = document.querySelector('#gon')
const killuaA = document.querySelector('#killua')
const kurapikaA = document.querySelector('#kurapika')
const leorioA = document. querySelector('#leorio')

// event listeners for characters 
document.querySelector('#gon').addEventListener('click', addGon)
document.querySelector('#killua').addEventListener('click', addKillua)
document.querySelector('#kurapika').addEventListener('click', addKurapika)
document.querySelector('#leorio').addEventListener('click', addLeorio)

// event listeners for types of nen



document.querySelector('#enhancer').addEventListener('click', showEnhancer)
document.querySelector('#trasnmutitor').addEventListener('click', showTransmu)
document.querySelector ('#specialist').addEventListener('click', showSpecialist)
document.querySelector ('#emitter').addEventListener('click', showEmitter)

function showEnhancer(){
    killuaA.classList.add('hidden')
    kurapikaA.classList.add('hidden')
    leorioA.classList.add('hidden')
    gonA.classList.remove('hidden')
}

function showTransmu(){
    gonA.classList.add('hidden')
    kurapikaA.classList.add('hidden')
    leorioA.classList.add('hidden')
    killuaA.classList.remove('hidden')
}

function showSpecialist(){
    gonA.classList.add('hidden')
    killuaA.classList.add('hidden')
    leorioA.classList.add('hidden')
    kurapikaA.classList.remove('hidden')
}

function showEmitter(){
    gonA.classList.add('hidden')
    killuaA.classList.add('hidden')
    kurapikaA.classList.add('hidden')
    leorioA.classList.remove('hidden')
}


function addGon(){
    killua.classList.add('hidden')
    kurapika.classList.add('hidden')
    leorio.classList.add('hidden')
    gon.classList.toggle('hidden')
}

function addKillua(){
    gon.classList.add('hidden')
    kurapika.classList.add('hidden')
    leorio.classList.add('hidden')
    killua.classList.toggle('hidden')
}

function addKurapika(){
    gon.classList.add('hidden')
    killua.classList.add('hidden')
    leorio.classList.add('hidden')
    kurapika.classList.toggle('hidden')
}

function addLeorio(){
    gon.classList.add('hidden')
    killua.classList.add('hidden')
    kurapika.classList.add('hidden')
    leorio.classList.toggle('hidden')
}

