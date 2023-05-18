/* MEU EXERCICIO
let emailsAlunos = ["Aluno1@gmail.com", "Aluno2@gmail.com", "Aluno3@gmail.com", "Aluno4@gmail.com", "Aluno5@gmail.com", "Aluno6@gmail.com"];
emailsAlunos.forEach((item, num, array) => {
    console.log(`Email enviado para ${item}  com sucesso! as ordens foram ${num}, lista dos enviados ${array}`)
  });*/
// meu exercicio estava certo, percorri a Array inteira

  //correção
  let email = ["Aluno1@gmail.com", "Aluno2@gmail.com", "Aluno3@gmail.com", "Aluno4@gmail.com", "Aluno5@gmail.com", "Aluno6@gmail.com"]
  email.forEach((valor) => {
    console.log(`Email enviado para ${valor} com sucesso!`)
  });