import PokeApi from '../utilites/ajax.js';
import {loader} from '../utilites/loader';

class PokeDetail extends PokeApi {
    constructor(params) {
        super(params);
        this.params = params;
        this.url = 'http://pokeapi.co/api/v1/pokemon';
    }

    render () {

        document.getElementById('poke-detail').innerHTML = this.tmpl_loader();
        super.getList(this.url+'/'+this.params.id+'/').then(
            (val) => {
                document.getElementById('poke-detail').innerHTML = this.tmpl(val);
                document.getElementById('close').addEventListener('click', this.clearDetail);
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }

    clearDetail(event) {
        document.getElementById('poke-detail').innerHTML = '';
    }

    type_list_tmpl(types){
        return `
            ${types.map( type => `
                ${type.name}
            `)}
        `;
    }

    format_count (val) {
        let count = val.toString();

        switch(count.length) {
            case 1:
                return '#00'+count;
            case 2:
                return '#0'+count;
            default:
                return '#'+count;
        };
    }

    tmpl_loader () {
        return `
            <div class="poke-detail__item">
                <div class='bg-cover-fix'></div>
                    <div class="poke-detail__item -fix">
                    ${loader}
                </div>
            </div>
        `;
    }
    tmpl (poke) {
        return `
            <div class="poke-detail__item">
                <div class='bg-cover-fix'></div>

                <div class="poke-detail__item -fix">
                    <span class='close' id='close'>X</span>
                    <div class="poke-detail__item__img">
                        <img src="http://pokeapi.co/media/img/${poke.pkdx_id}.png" />
                    </div>
                    <h2 class="poke-detail__item__title">${poke.name} ${this.format_count(this.params.count)}</h2>
                    <div class="poke-detail__item__abilities abilities">
                        <div class="abilities__type">Type:</div> <div class="abilities__value">${this.type_list_tmpl(poke.types)}</div>
                        <div class="abilities__type">Attack:</div> <div class="abilities__value">${poke.attack}</div>
                        <div class="abilities__type">Defence:</div> <div class="abilities__value">${poke.defence}</div>
                        <div class="abilities__type">HP:</div> <div class="abilities__value">${poke.hp}</div>
                        <div class="abilities__type">SP Attack:</div> <div class="abilities__value">${poke.sp_atk}</div>
                        <div class="abilities__type">SP Defence:</div> <div class="abilities__value">${poke.sp_def}</div>
                        <div class="abilities__type">Speed:</div> <div class="abilities__value">${poke.speed}</div>
                        <div class="abilities__type">Weight:</div> <div class="abilities__value">${poke.weight}</div>
                        <div class="abilities__type">Total moves:</div> <div class="abilities__value">${poke.moves.length}</div>
                    </div>
                </div>
            </div>
        `;
    }

}

export default PokeDetail;
