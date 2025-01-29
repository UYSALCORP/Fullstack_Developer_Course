
const initial={
  yapilacaklar:[
    {id:1, task:"Redux öğreniyorum!", completed:false},
    {id:2, task:"Akşam yemeğini ye!", completed:true}
  ]
}
//mutfak
const todoReducer = (state=initial, {type, payload}) => {
  switch (type) {
    // case "ekle":
    
    default:
      return state
  }
}

export default todoReducer