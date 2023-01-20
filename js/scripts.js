// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.
// console.log('int ok')
const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello Vue!',
        messageH1: 'Mepiace Vue.js',
        image: {
            imageTitle: 'Vue.js',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
            imageClass: 'imgHello'
        }
    }
    }
}).mount('#app')