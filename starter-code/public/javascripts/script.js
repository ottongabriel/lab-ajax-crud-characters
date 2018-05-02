document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



$(document).ready( () => {




  document.getElementById('fetch-all').onclick = function(){

    axios({
      method: "GET",
      url: `http://localhost:3000/characters`, 
      // params: "" ,
    })
    .then(response => {
      console.log('response: ', response);
  
      response.data.forEach(oneCharacter => {
  
        $('#info').append(`
        <h1> Name: ${oneCharacter.name}</h1>
        <p> Occupation: ${oneCharacter.occupation}</p>
        <p> Cartoon: ${oneCharacter.cartoon}</p>
        <p> Weapon: ${oneCharacter.weapon}</p>
        `)
      });
    })
    .catch(err =>{
      console.log('err: ', err);
    })

 


  }
  
  // document.getElementById('fetch-one').onclick = function(){


  //   const whichPoke = $('.which-poke').val();
    
  //   axios({
  //     method: "GET",
  //     url: `https://localhost:3000/characters`, 
  //     // params: "" ,
  //   })
  //   .then(theThingWeGetBackFromApi => {

  //     $('.pokeinfo').append(
  //       `
  //         <h3> ${theThingWeGetBackFromApi.data.name} </h3>
  //         <h4> height: ${theThingWeGetBackFromApi.data.height} </h4>
  //         <h4> weight: ${theThingWeGetBackFromApi.data.weight} </h4>
  //       `)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
    
  // }
  







  // document.getElementById('delete-one').onclick = function(){
        
  // }
  
  // document.getElementById('edit-character-form').onsubmit = function(){
            
  // }
  
  // document.getElementById('new-character-form').onsubmit = function(){
                
  // }
})