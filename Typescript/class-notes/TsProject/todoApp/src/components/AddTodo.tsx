import { Box, Button, Paper, TextField } from "@mui/material"
import { useState } from "react"


const AddTodo = () => {
    const [task, setTask] = useState("")
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setTask(e.target.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
  return (
    <Paper>
        <Box component="form" onSubmit={handleSubmit}>
            {/* <TextField onChange={(e)=>setTask(e.target.value)}/> */}
            <TextField onChange={handleChange}/>
            <Button type="submit">Save</Button>
        </Box>
    </Paper>
  )
}

export default AddTodo