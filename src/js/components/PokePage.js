import PokeList from './PokeList.js';

class PokePage {
    constructor(params) {
        this.params = params;
        this.pokeList = new PokeList({page: this.params.page});
    }

    render () {
        document.getElementById(this.params.id).innerHTML = this.tmpl();

        document.getElementById('more-poke').addEventListener('click', (event) => {
            document.getElementById('more-poke').disabled = true;
            this.params.page++;
            this.pokeList.render({page: this.params.page});
        });
    }

    tmpl() {
        return `
            <div class='filter' id='filter'></div> 
            <div class='poke-wr'>
                <div class='poke-list' id='poke-list'>
                    ${ this.pokeList.render() }
                </div>
                <div class='poke-detail' id='poke-detail'></div>
            </div>
            <button class='more' id='more-poke' disabled>Load More</button>
        `;
    }
}

export default PokePage;
