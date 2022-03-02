import {useNavigate} from "react-router-dom"
import{useState} from "react"
import "../styles/Main.scss"

const Main = () =>{
    const navigate = useNavigate();
    const [valorDelInput,setValorDelInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${valorDelInput}`);
    }
    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    return (
      <div>
        <nav>
          <a href="#home">Home</a>
          <a href="#movie">Movie</a>
          <a href="#tv">Tv</a>
          <form>
            <input tipe="text" onChange={handleChange}></input>
            <input type="submit" value="buscar" onSubmit={handleSubmit}></input>
          </form>
        </nav>
      </div>
    );
}
export default Main;