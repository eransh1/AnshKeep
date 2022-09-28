import React from 'react'
import PinnedNotes from './PinnedNotes'
import "../css/PinNotes.css"

const PinNotesCont = ({pinnedId,notes,setNotes}) => {
const showingPinnedNotes=notes.filter((elem)=>{      
return (pinnedId.includes(elem.id));
})


  return (
    <div className='pinned-notes'>
    {showingPinnedNotes.map((item)=>{
        return <PinnedNotes item={item} key={item.id} />
    })}</div>
  )
}

export default PinNotesCont