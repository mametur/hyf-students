
export const getClassesByModuleName = async (event) => {
    event.preventDefault();
    const moduleInput = document.getElementById('module').value;
    if(moduleInput === '' || moduleInput === null){
        alert('please fill in a module name');
        return;
    }

    try {
        const response = await fetch(`/api/modules/${moduleInput}`)
        const modules = await response.json();
        
        if(modules.data.length === 0) {
            alert('please enter a valid module name');
            return;
        }
        const renderedData = render(modules);
     
        document.querySelector('#show_querry').innerHTML = '';
        
        document.querySelector('#show_querry').appendChild(renderedData) ; 
        
    } catch (error) {
        error.message;
    }

}


const render = (dataObject) => {
    const divEl = document.createElement('div');
    const hEl = document.createElement('h3');
    hEl.innerHTML = `${dataObject.data[0].moduleName} module is being taught in the following classes:`;
divEl.appendChild(hEl);
    const ulEl = document.createElement('ul');
    ulEl.style.listStyle = 'none'
    dataObject.data.forEach(element => {
        const liEl = document.createElement('li');
        liEl.innerHTML = element.className;
        ulEl.appendChild(liEl);
    });
divEl.appendChild(ulEl);

    return divEl;
}