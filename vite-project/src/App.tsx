import { Header } from "./componets/header"
import { Aluno } from "./componets/aluno"
import { Footer } from "./componets/footer"

export default function app(){
  return(
    <div>
      <Header title=""/>
      <Aluno nome=" Alan" idade={20}/>
      <Aluno nome=" Alan" idade={20}/>
      <Aluno nome=" Alan" idade={20}/>
      <Footer/>
    </div>
  )
}