import React from 'react'

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column

  const inputStyle = {
    borderRadius:'5px',
    '&:focus': {
      outline: 'none'
    }
}
  return (
    <input
        style={inputStyle}
        placeholder="Search"
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}>
    </input>
  )
}

