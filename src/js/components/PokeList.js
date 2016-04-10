import PokeApi from '../utilites/ajax';
import TypeList from './TypeList.js';
import PokeDetail from './PokeDetail.js';
import {loader} from '../utilites/loader.js';
class PokeList extends PokeApi{

    constructor(params) {
        super();
        this.params = params;
        this.limit = 12;
        this.url = 'http://pokeapi.co/api/v1/pokemon/?limit='+this.limit+'&';
    }

    getData(){
        if(this.params.page > 0){
            document.getElementById('more-poke').insertAdjacentHTML('beforeend', loader );
        }
        super.getList(this.url+'&offset='+this.params.page*this.limit).then(
            (val) => {
                this.dataLoad(val);
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }

    dataLoad (val) {
        console.log('SUCCESS', val);
        if ( this.params.page == 0){
            document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
        } else {
            document.getElementById('poke-list').insertAdjacentHTML('beforeend', this.tmpl(val.objects));
            document.getElementById('more-poke').removeChild( document.getElementById('svg') );
        }
        document.getElementById('more-poke').disabled = false;
        let p = Array.prototype.slice.call(document.getElementsByClassName("poke-list__item"));
        p.map( (el) => {
            el.addEventListener('click', (event) => {
                new PokeDetail({
                    id: event.currentTarget.getAttribute('data-id'),
                    count: event.currentTarget.getAttribute('data-key')
                }).render();
            } );
        });
    }

    render () {
        this.getData();
        return loader;
    }

    tmpl (data) {
        return `
            ${data.map( (el, key) => `
                <div class='poke-list__item' data-key='${this.params.page*this.limit+key+1}' data-id='${el.pkdx_id}'>
                    <div class='poke-list__item__img'>
                        <img src='http://pokeapi.co/media/img/${el.pkdx_id}.png' />
                    </div>
                    <h3 class='poke-list__item__title'>${el.name}</h3>
                    ${ new TypeList(el.types).render() }
                </div>
            `).join('')}
        `;
    }
}

export default PokeList;
