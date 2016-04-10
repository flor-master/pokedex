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
        this.pokeList = [];
        this.pokeTypeForFilter = null;
    }

    getData(){
        if(this.params.page > 0){
            document.getElementById('more-poke').insertAdjacentHTML('beforeend', loader );
        }
        super.getList(this.url+'&offset='+this.params.page*this.limit).then(
            (val) => {
                this.pokeList = this.pokeList.concat(val.objects);
                this.dataLoad(val);
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }

    addEventShowDetail () {
        let p = Array.prototype.slice.call(document.getElementsByClassName("poke-list__item"));
        p.map( (el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                new PokeDetail({
                    id: event.currentTarget.getAttribute('data-id'),
                    count: event.currentTarget.getAttribute('data-key')
                }).render();
            } );
        });
    }


    filterPoke(pokeTypeForFilter){
        console.log(pokeTypeForFilter);
        this.pokeTypeForFilter = pokeTypeForFilter;
        let filteredPokeList = this.pokeList.filter( (el) => {
            for (var i=0; i<el.types.length; i++){
                if (el.types[i].name == this.pokeTypeForFilter) {
                    return true;
                }
            }
            return false;
        });

        return filteredPokeList;
    }

    addEventShowTypes () {

        let types = Array.prototype.slice.call(document.querySelectorAll(".type-list__item"));

        types.map( (type) => {
            type.addEventListener('click', (event) => {

                event.stopImmediatePropagation();
                let pokeTypeForFilter = event.currentTarget.getAttribute('data-type');
                let filteredPokeList = this.filterPoke(pokeTypeForFilter);
                console.log(filteredPokeList);

                document.getElementById('poke-list').innerHTML = this.tmpl(filteredPokeList);
                let filterEl = document.getElementById('filter');
                filterEl.innerHTML = pokeTypeForFilter;
                filterEl.style.display = 'inline-block';
                this.addEventShowDetail();
                filterEl.addEventListener('click', (el) => {
                    this.pokeTypeForFilter = null;
                    document.getElementById('poke-list').innerHTML = this.tmpl(this.pokeList);
                    el.target.style.display = 'none';
                    this.addEventShowDetail();
                    this.addEventShowTypes(); 
                });

            });
        });
    }

    dataLoad (val) {
        if (this.pokeTypeForFilter != null){
            val.objects = this.filterPoke(this.pokeTypeForFilter);
            document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
            document.getElementById('more-poke').removeChild( document.getElementById('svg') );
        }else{
            if ( this.params.page == 0){
                document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
            } else {
                document.getElementById('poke-list').insertAdjacentHTML('beforeend', this.tmpl(val.objects));
                document.getElementById('more-poke').removeChild( document.getElementById('svg') );
            }
        }
        document.getElementById('more-poke').disabled = false;
        this.addEventShowDetail();
        this.addEventShowTypes();
    }

    render (params = null) {
        this.params.page = (params) ? params.page : 0;
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
