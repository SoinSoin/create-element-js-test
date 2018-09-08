class childCompont {
    constructor(component, id) {
        this.id = id;
        this.component = component;
    }
};

function iterate(numb, temp, arr) {
    var i = 0;
    arr = [];
    console.log(temp);
    while (i < numb) {
        var myComponent = new childCompont(temp, i);
        arr.push(myComponent);
        i++;
    }
    return arr;
}

function inDOM(anArr, parentDIV) {
    anArr.forEach(element => {
        document.querySelector(parentDIV).insertAdjacentHTML('beforeend', element.component);
    });
}
let composant = iterate(1, '<div class="column is-2" style="background:blue">'+i+'</div>');
inDOM(composant,'#parent');