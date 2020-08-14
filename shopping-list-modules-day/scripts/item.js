//We will run the validateName function whenever we create an item or update its name, 
//to prevent items from having blank names.
function validateName(name){
    //if (name === '' || name === undefined || name === null) 
    if (!name) {
        throw new TypeError("Name must not be blank");
    }
};

function create(name) {
    return {
        id: cuid(),
        name,
        checked: false,
    }
};

export default { validateName, create };


