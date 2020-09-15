export default{

	computed:{
		espacoPorVirgula(){
			return this.message.replace(/\s/g, ",");
		},

		tamanhoPalavra(){
			return this.message.split(' ').map( x => `${x} (${x.length})`).join(' ');
		}

	}
}