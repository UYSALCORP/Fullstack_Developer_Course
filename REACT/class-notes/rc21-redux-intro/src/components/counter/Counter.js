import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {
  //! Değişkenler (useState diyelim) useSelector hook'u ile getirilir.
  const {sayac, text} = useSelector((state)=>state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac} </h1>
      <h2>{text} </h2>
      <div>
        <button
          className="counter-button positive"
          onClick={()=>dispatch(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          onClick={()=>dispatch(sifirla())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={()=>dispatch(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
}

export default Counter