import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div className="container text-center mt-4">
      <button onClick={()=>setVisible(!visible)} className="btn btn-danger">{visible ? "Gizle" : "Göster"}</button>
      { visible && <LifeCycleMethods />}
    </div>
  );
}

export default App;
