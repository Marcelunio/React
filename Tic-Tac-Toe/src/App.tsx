import { useState } from 'react'
import circle from './assets/circle.svg'
import cross from './assets/cross.svg'
var winconditions: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
var board:number[]=
[ 0,0,0,
  0,0,0,
  0,0,0]
var isP1Turn=true;

function TicTacToeSquare({index}:{index:number})
{
  
   var [isChecked,setChecked]=useState(false);
   var [Squareimg,setSquareimg]=useState<string|null>(null);
   var [alttext,setalttext]=useState<string>("");
   function handleOnclick()
  {
     if(!isChecked)
    {
      setSquareimg((isP1Turn)? cross:circle);
      setalttext((isP1Turn)? "cross":"circle");
      board[index]=isP1Turn? 1:-1;
      isP1Turn=(!isP1Turn);
      setChecked(true);
      console.log(Squareimg)
    }
  }
   return(
    <div className='col w-20 h-20' onClick={handleOnclick}>
    <img className='w-100 h-100' src={Squareimg} alt={alttext}></img>
    </div>
   )

}

function App() {
  


  
  return(
  <>
  <div className='container center-text'>
  <div className='row'>
  <TicTacToeSquare index={1}></TicTacToeSquare>
  <TicTacToeSquare index={2}></TicTacToeSquare>
  <TicTacToeSquare index={3}></TicTacToeSquare>
  </div>
  <div className='row'>
  <TicTacToeSquare index={4}></TicTacToeSquare>
  <TicTacToeSquare index={5}></TicTacToeSquare>
  <TicTacToeSquare index={6}></TicTacToeSquare>
  </div>
  <div className='row'>
  <TicTacToeSquare index={7}></TicTacToeSquare>
  <TicTacToeSquare index={8}></TicTacToeSquare>
  <TicTacToeSquare index={9}></TicTacToeSquare>
  </div>
  </div>
  </>
  )
}

export default App
