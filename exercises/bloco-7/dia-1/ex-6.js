const skills = ['JavaScript', 'HTML', 'Git', 'Unix', 'CSS'];

const replaceX = (string) => string.replace('x', 'Bebeto');

const mySkills = (string) => {
  skills.sort();
  return `${string} Minhas cinco principais habilidades são: 
  ${skills}`;
}

console.log(mySkills(replaceX("Tryber x aqui!")));
