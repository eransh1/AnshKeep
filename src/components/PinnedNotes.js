import React from 'react'
import "../css/PinnedNotes.css"

const PinnedNotes = ({item}) => {
  return (
    <div className='notee' style={{textTransform:"capitalize",float:"left"}}>
    <br />
<h1 style={{marginTop:"1rem",marginBottom:"1rem"}}>{item.title}</h1>
<p className='tag'>{item.tag}</p>
<p>{item.desc}</p>
<div>
</div>

    </div>
  )
}

export default PinnedNotes