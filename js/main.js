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
        }
    },
    methods: { 
    },
    mounted() {
    }

}).mount('#app')