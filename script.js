
const Form = () =>{
    const form = document.querySelector('.form'); //query selector pode usar pelo nome da tag se tiver apenas um ou pelo atributo, classe etc. No caso é pela classe
    const result = document.querySelector('.resultado');

    const pessoas = [];

    function EventForm (event){
        event.preventDefault();

        const firstName = document.querySelector('.name');
        const surname = document.querySelector('.surname');
        const weight = document.querySelector('.weight');
        const heigh = document.querySelector('.heigh');   

       //nome .value serve para guardar o valor que foi digitado no input
       
       pessoas.push({
        firstName: firstName.value,
        surname : surname.value,
        weight : weight.value,
        heigh : heigh.value
       });

       console.log(pessoas);

       result.innerHTML += `<p>${firstName.value} ${surname.value} ${weight.value} ${heigh.value} </p>`;
    }

   

   form.addEventListener('submit', EventForm);
}

Form();
    


