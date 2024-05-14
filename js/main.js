const { createApp } = Vue

createApp({

    data() {
        return {
            coseDaFare: [
                "Fare la spesa",
                "Mettere benzina",
                "Sistemare la camera",
                "Cucinare la cena",
                "Portare a spasso il cane",
                "Sistemare i vestiti"
            ],
            nuovaMansione: ''
        }
    },
    methods: { 
        aggiungiMansione(){
            if(this.nuovaMansione !== ''){
                this.coseDaFare.push(this.nuovaMansione)
                console.log(this.nuovaMansione)
                this.nuovaMansione = ''
            }
        },
        rimuoviMansione(mansioneDaRimuovere){
            this.coseDaFare = this.coseDaFare.filter(mansione => mansione !== mansioneDaRimuovere);
            console.log('Mansione rimossa:', mansioneDaRimuovere);  
        }
    },
    mounted() {
    }

}).mount('#app')