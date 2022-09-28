import React, { useState } from 'react'
import "../css/Content.css"
import NoteMaker from './NoteMaker'
import Note from './Note'
import Modal from './Modal'
import PinNotesCont from './PinNotesCont'
import ReactPaginate from "react-paginate"

const Content = () => {
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");
const[tag,setTag]=useState("")
const[notes,setNotes]=useState([])
const[editId,setEditId]=useState("")
const[pageNumber,setPageNumber]=useState(0)
const[pinnedId,setPinnedId]=useState([])

const notesPerPage=6;
const pagesVisited=pageNumber*notesPerPage

const displayNotes=notes.slice(pagesVisited,pagesVisited+notesPerPage)

// localStorage.setItem("notes",JSON.stringify(notes))

const pageCount=Math.ceil(notes.length/notesPerPage)

const changePage=({selected})=>{
setPageNumber(selected)
}
  return (
    <section id='content'>
    <Modal editId={editId} notes={notes} setNotes={setNotes} />
<NoteMaker title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} tag={tag} setTag={setTag} notes={displayNotes} setNotes={setNotes} />

{pinnedId.length===0?null:<><h1 style={{fontSize:"1.5rem",marginLeft:"1.5rem",fontWeight:"600",textDecoration:"underline"}}>Pinned Notes</h1><PinNotesCont pinnedId={pinnedId} notes={notes} setNotes={setNotes} /></>}

{notes.length===0?null:<div className='containerrr'>{displayNotes.map((item)=>{return <><Note item={item} key={item.id} notes={notes} setNotes={setNotes} setEditId={setEditId} pinnedId={pinnedId} setPinnedId={setPinnedId} /></>})}</div>}

{notes.length<=6?null:
<ReactPaginate 
  previousLabel={"Prev"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"pagination-btn"}
  previousLinkClassName={"prev-btn"}
  nextLinkClassName={"next-btn"}
  disabledClassName={"disable-btn"}
  activeClassName={"pagination-active"}
/>}

    </section>
  )

  // function getNotesFromLocalStorage(){
  //   const note=JSON.parse(localStorage.getItem("notes"));
  //   if (note){
  //     return note;
  //   }
  //   else{
  //     return ([])
  //   }
  // }
}

export default Content