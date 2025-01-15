import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const OgrenciItem = () => {
  //! Context (Consumer) Globalde tanımladığım (context alanı(app.js)) değerleri burada çağırmak.
  const { students, changeColor } = useContext(StudentContext);
  return (
    <div>
      {students.map((student)=>(
        <div style={{backgroundColor:student.color}} key={student.id}>
        <h3>NAME: {student.name}</h3>
        <h4>EMAİL: {student.email} </h4>
        <h4> AGE: {student.age}</h4>
        Color: <input type="text" value={student.color}
        onChange={(e)=>changeColor(student.id, e.target.value)}
        />
      </div>
      ))}
      
    </div>
  );
};

export default OgrenciItem;
