import React from 'react'

function SearchBox({searchChange}) {
  return (
    <div>
       <input type='search' placeholder='search robot ...'  onChange={searchChange}/>
    </div>
  )
}
//dddgi
export default SearchBox