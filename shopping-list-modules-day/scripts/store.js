import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id){
    return this.items.find(item => item.id === id);
}



export default { items, hideCheckedItems, findById };