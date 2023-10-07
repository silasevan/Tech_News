import React, { useEffect, useRef } from 'react'

function Search({ searchTerm, handleSearchInput, onSearchSubmit }) {

    return (
      <>
        <form onSubmit= {onSearchSubmit}>
          <InputWithLabel
            id="search"
            value={searchTerm}
            onInputChange={handleSearchInput}
            isFocused
          >
            <strong>Search:</strong>
          </InputWithLabel>
          
          <button type='submit'disabled={!searchTerm}>Submit</button>
        </form>
      </>
    );
}

export default Search

const InputWithLabel = ({ id, value, type = "text", onInputChange, isFocused, children }) => {
  const inputRef = useRef()  
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused]);
  return (
    <>
    <label htmlFor={id}>{children}</label>
  &nbsp;
    <input 
    ref = { inputRef }
  id = { id }
  type = { type }
    value={value}
        onChange={onInputChange} />
      </>
  )
}
  
