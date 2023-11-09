interface alunoprops{
    nome : string;
    idade : number;
  }
  
  
export function Aluno({nome, idade}: alunoprops){
    return (
      <div>
        <h1>Aluno: {nome}</h1>
        <h3>idade: {idade}</h3>
      </div>
    )
  }