console.log("ciao");

// https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue

createApp({
    data() {
        return {
            randomEmail: []    //creare un array vuoto dove mettere le 10 email creare 


        }
    },
    methods: {
        callApi() {

            for (let i = 0; i < 10; i++) {         //creare un ciclo che crea 10 email 
                const element = this.randomEmail[i];
                console.log(element);
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {


                        this.randomEmail.push(response.data.response)// prendo .data e dentro .response che sarebbe l'email e la push nel nuovo array

                        console.log(this.randomEmail);
                    })

            }

        }
    },
    mounted() {
        this.callApi()   //richiamo la funzione in mounted
    }


}).mount('#app')



