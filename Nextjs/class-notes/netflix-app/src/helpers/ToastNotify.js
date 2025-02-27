 import {toast} from "react-toastify"

 export const toastSuccessNotify=(msg)=>{
     toast.success(msg, {
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
 });} 
 
 export const toastWarnNotify = (msg) => {
   toast.warn(msg, {
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });
 };
 export const toastErrorNotify = (msg) => {
   toast.error(msg, {
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });
 };