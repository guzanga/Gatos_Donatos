import './App.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Main from "./Components/Main";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <div className="quadro">
            <Main img="gordo.png" text ="Gato gordinho" desc="Gatinho fofinho e gordinho muito comilão" value="Adote e traga felicidade"></Main>
            <Main img="tricolor.png" text ="Gato tricolor" desc="Gatinho muito brincalhão e alegre, com certeza vai alegrar a sua casa" value="Adote e traga felicidade"></Main>
            <Main img="dorminhoco.png" text ="Gato dorminhoco" desc="Gatinho que adora uma boa soneca, perfeito para donos que gostam de curtir preguiça com um animalzinho" value="Adote e traga felicidade"></Main>
            <Main img="frajola.png" text ="Gato frajola" desc="Gatinho preto e branco estilo frajolinha que vai deixar sua casa cada vez glamurosa" value="Adote e traga felicidade"></Main>

        </div>
        <Header></Header>
    </div>

  );
}

export default App;
