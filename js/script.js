console.log("java collegato");

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue",
            imgRandom: "https://picsum.photos/200/300",
            imgAlt: "immagine random",
        }
    },
}).mount("#app");