
export const getArtist =(e)=>{
  debugger;
  e.preventDefault();
  const id = document.getElementById('artist').value;
  
  fetch(`api/artists/${id}`)
  .then(res => res.json())
  .then(data => {
    //console.log(data.Name)
    const h3 = document.createElement('h3');
    h3.className = 'text-center';
    h3.innerHTML =`Your Artist is ${data.Name}`;
    document.getElementById('root')
      .appendChild(h3);
  })
  .catch(err => console.error(err));

  
}