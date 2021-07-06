import React from "react";
interface Input {
    inputValue: string
    setInputValue: (param: string) => any
}

const Header: React.FC<Input> = ({inputValue, setInputValue}) => {
    return(
        <div>
        <p><strong>Search(code, commodity, variety)</strong></p>

        <input 
            type="text"
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)}
        />
        </div>
    
    )
}

export default Header;