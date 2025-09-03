// import DescribingUI from './lessons/01-describing-ui/DescribingUI';
// import AddingInteractivity from './lessons/02-adding-interactivity/AddingInteractivity';
import TicTacToe from './lessons/06-tic-tac-toe/TicTacToe';

export default function App() {

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "1rem", fontFamily: "system-ui, sans-serif" }}>
     <h1>React.dev Learning Journal</h1>
      {/* <DescribingUI />  */}
      {/* <AddingInteractivity /> */}
      <TicTacToe />
    </div>
  )
}

