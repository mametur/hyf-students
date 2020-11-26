

 export class students {
    student = '';
    LastName = '';
    module = [];
    class=''

    constructor(data){
        Object.assign(this,data)
       
        
    }
    render(){
         const container = document.createElement('div');
        container.innerHTML = ` <h1> Here is students' Information </h1> \n student: ${this.student} ${this.LastName}`;
        container.className = 'container';

         const classname = document.createElement('p')
         classname.innerHTML = `class: ${this.class}`
        

        const renderedmoduls = this.module
            renderedmoduls.forEach(mode=>{
                const m = document.createElement('div');
                m.innerHTML =`model: ${mode}`;
                m.id = 'mode';
             container.appendChild(m);
            })
     container.appendChild(classname);
        return container;

    }
}

export const getstudent =(e)=>{
    debugger;
    e.preventDefault();
    const student = document.getElementById('student').value;

    fetch(`api/students/${student}`)
    .then(res => res.json())
    .then(data=>{
        if (data.length === 0){
            return alert('Sorry we dont have the student in our Database or you have misspelled the name wrong!');};
        let d = {
            student: data[0].Student,
            LastName:data[0].LastName,
            class:data[0].class,
            module:[data[0].module,data[1].module]
        }
      console.log(d);
        const render = new students(d);
        const renderdata = render.render();
        const container =document.getElementById('show_querry');
        container.appendChild(renderdata)
    
    })
   

}