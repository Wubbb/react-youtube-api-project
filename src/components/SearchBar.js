import React, { useState } from 'react';



const SearchBar = ({onFormSubmit}) => {
const [term, setTerm] = useState('Test')

const OnInputChange = (e) => {
    setTerm(e.target.value)
}

const onSubmit = (e) => { 
    e.preventDefault();
    onFormSubmit(term);
}

return (
    <div className="search-bar ui search">
       <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input type="text" 
                value={term}
                onChange={OnInputChange}
                />
            </div>
       </form>
  </div>
)

}



export default SearchBar;