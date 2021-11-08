import React from 'react'
import '../styles/global.css';

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function ButtonTailwind() {
    return (
        <div>
            <button className="p-6 bg-red-500 w-20">Click Me!</button>
        </div>
    )
}

export default ButtonTailwind
