"use client"
import { Button } from "@mui/material";


export default function Home() {
  return (
    <main className="">
      <Button variant="contained" href="#text-buttons">Hello World</Button>
      <Button  color="secondary">Hello World</Button>
      <Button variant="contained" color="success">Hello World</Button>
      <Button variant="contained" color="error">Hello World</Button>
      <Button variant="contained" onClick={()=>{console.log("ok");}}>Hello World</Button>
    </main>
  )
}
