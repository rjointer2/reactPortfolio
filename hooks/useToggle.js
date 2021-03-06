
/**
 * Destruct array in a value and function.
 * Value returns a booleans
 * Function return the value's boolean inverted
 * This is useful with toggling
 */

import { useCallback, useState } from "react";

const useToggle = ( initVal = false ) => {
    // value as state to be toggld
    const [ value, setValue ] = useState(initVal);
    const toggle = useCallback(() => {
        // returns bool reversed
        setValue( val => !val);
    }, []);

    return [value, toggle];
}

export default useToggle