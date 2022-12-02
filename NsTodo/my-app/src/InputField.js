import React from 'react'

function InputField({addLists, SetinputTxt, inputTxt}) {
    return (
        <div>
            <form onSubmit={(e) => addLists(e)}>
                <textarea id="task" onChange={(e) => SetinputTxt(e.target.value)} value={inputTxt} ></textarea>
                <button id="btn">ADD</button>
            </form>
        </div>
    );
}

export default InputField