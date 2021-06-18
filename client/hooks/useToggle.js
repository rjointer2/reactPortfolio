
/**
 * Destruct array in a value and function.
 * Value returns a booleans
 * Function return the value's boolean inverted
 * This is useful with toggling
 */

import { useCallback, useState } from "react";

const useToggle = ( initVal = false ) => {
    const [ value, setValue ] = useState(initVal);
    const toggle = useCallback(() => {
        setValue( val => !val);
    }, []);

    return [value, toggle];
}

export default useToggle