var app = new Vue({
	
	el: '#app', //esto es el div q tiene la app de vue 
	data: { //en data estan todas las variables o arrays q vayamos a usar 
		frase:  '', 
        loading: true
	}, 
    methods: {
        
      async  getFrase(){
          this.loading = true
        await  axios.get("https://api.adviceslip.com/advice").then(response =>{
            console.log(response)
            this.frase = response.data.slip
            this.loading = false
           })
           .catch( response =>{
            console.log("error", response)
           } );
        }
    },
    mounted() {
        this.getFrase()
    },
});