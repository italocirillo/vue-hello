console.log("java collegato");

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue",
            imgRandom: "https://picsum.photos/200/300",
            imgAlt: "immagine random",
            coloreTitolo: "",
        }
    },
    methods: {
        cambiaColoreRosso(){
            this.coloreTitolo="rosso";
        },
        cambiaColoreBianco(){
            this.coloreTitolo="bianco";
        },
        cambiaColoreVerde(){
            this.coloreTitolo="verde";
        }
    }
}).mount("#app");