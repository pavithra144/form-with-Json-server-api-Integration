import React from "react"

const Greet = React.memo(() => {
//1. React.memo is used when you dont want your component to re-render. hence using it here.
    const logger = () => {
        console.log('iam rendering when input data is typing...... from greet component')
    }
    logger()
    return (
        <>
            hello
        </>
    )
})

export default Greet;