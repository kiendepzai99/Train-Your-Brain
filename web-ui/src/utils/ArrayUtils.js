export function cloneArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++)
        newArray[i] = array[i].slice();

    return newArray;
}