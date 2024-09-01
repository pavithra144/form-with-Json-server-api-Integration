import { useMemo, useState } from "react";
import Greet from "./Greet";

function Input() {

    const [inputData, setInputData] = useState('');

    const memoizedValue = useMemo(() => inputData.length, [inputData])
    // usememo is used to get the value/ telling react to not re-render when the values are not changed.

    return (
        <div>
            <input placeholder="name" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            memoizedValue: {memoizedValue}
            <Greet />
        </div>
    )
}

export default Input;