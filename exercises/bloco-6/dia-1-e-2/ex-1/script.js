// import validation from "popup-validation/src/index.js";
new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 5
    },
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true
    },
    adress: {
      required: true
    },
    city: {
      required: true
    }, 
    state: {
      required: true
    }
  },
  messages: {
    name: 'Campo obrigatório',
    email: 'Campo obrigatório'
  }
});


// const nome = document.querySelector('.name');
// const email = document.querySelector('.email');
// const cpf = document.querySelector('.cpf');
// const adress = document.querySelector('.adress');
// const complement = document.querySelector('.complement');
// const city = document.querySelector('.city');
// const resume = document.querySelector('.resume');
// const office = document.querySelector('.office');
// const officeDescription = document.querySelector('.office-description');
// const date = document.querySelector('.begin');
// const body = document.getElementsByTagName('body')[0];
// const required = [nome, email, cpf, adress, city, state, resume, office, officeDescription, date];
// validation.init();

// criar opções de estados

const state = document.getElementById('state');

function createStates(states) {
  for (index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.innerHTML = states[index];
    state.appendChild(option);
  }
}

createStates(['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']);

// validate fields
