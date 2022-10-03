Vue.createApp({
    data(){
        return{
            input:null,
            message: "",
            howMany:0,
            errorMSG: "Must not be a negative number",
        }
    },
    methods:{
        show(input,howMany){
           this.message = input.repeat(howMany)
        //    Setting this.message = input.reapeat(howMany) means message is now set to whatever you put in repeated howMany amount of times
            
    }}
}).mount("#app")