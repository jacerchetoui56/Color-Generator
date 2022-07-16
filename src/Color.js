import React from 'react'
export default function Color({ index, hex, weight }) {

    // ? background color
    const bg = { backgroundColor: `${hex}` }

    // ? the text must be clear to read
    const textColor = { color: `${index > 10 ? 'white' : 'black'}` }

    return (
        <div className='color' style={bg}>
            <p style={textColor}>
                {weight}%
                <br />
                {hex}
                <button onClick={() => navigator.clipboard.writeText(hex)}>
                    <i class="fa-solid fa-clone"></i>
                    Copy to clipboard</button>
            </p>
        </div>
    )
}
