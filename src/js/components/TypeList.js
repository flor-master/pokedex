class TypeList {
    constructor(params) {
        this.types = params
    }
    render() {
        return `
            <div class='poke-list__item__types type-list'>
                ${ this.types.map(type => `
                    <span class='type-list__item'>${type.name}</span>
                `).join('') }
            </div>
        `;
    }
}

export default TypeList;
