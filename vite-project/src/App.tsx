
export default function App(){
  return(
    <div>
      <h1>Meu projeto</h1>

      <Aluno nome="Ana Caroline" idade={25} />

      <Aluno nome="Matheus Fraga" idade={24} />

      <Aluno nome="Lucas Silva" idade={36} />
    </div>
  )
}


interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps){
  return(
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}