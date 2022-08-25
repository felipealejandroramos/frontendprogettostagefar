import utenteattivo from "./utenteattivo";
import { useState ,useEffect} from "react";
import "./App.css"
import lista from "./lista"
import interuttore from "./interuttore";
import toggle from "./gestioneapi/toggle"
import gestioneacesso from "./gestioneapi/gestioneacesso"
import racoglilista from "./gestioneapi/racoglilista";
import creautente from "./gestioneapi/creautenti"
import eliminaeventi from "./gestioneapi/eliminaeventi";
import creaeventi from "./gestioneapi/creaeventi";
export default function App() {
  const [evento, setEvento] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [utente, setUtente] = useState("");
  useEffect(()=>{ setUtente(utenteattivo.mostrautete())
     console.log("funziona ?")},[utenteattivo.mostrautete()])

  if (utente===""){
      return (
        <div className="App">
          <input
            type="text"
            placeholder="nome"
            onChange={(event) => setNome(event.target.value)}
            value={nome}
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
            placeholder="password"
          />
          
          <button onClick={()=>{gestioneacesso(nome,password); setTimeout(setUtente(utenteattivo.mostrautete()),5000);setNome("");setPassword("");setTimeout(racoglilista(),5000)}}>Login</button>
          <button onClick={()=>creautente(nome,password)}>singup</button>
        </div>
      )
    }
  else{ 
    
    return (
      <div div className="App">
             
        <input
          type="text"
          placeholder="evento"
          onChange={(event) => setEvento(event.target.value)}
          value={evento}
        />
        <button onClick={()=>{racoglilista()}}>agiorna</button>
        <button onClick={()=>{creaeventi(evento);setTimeout(racoglilista(),5000)}}> crea</button>
        <button onClick={()=>{eliminaeventi(evento);setTimeout(racoglilista(),5000)}}> elimina</button>
        { lista.mostralista().map( ev=><div> <h1>{ev.nome}  {interuttore(ev.completato)}</h1>  <button onClick={()=>{toggle(ev.nome);setTimeout(racoglilista(),5000)}}>completato</button>   </div>) }


      </div>
    )
    }
}
