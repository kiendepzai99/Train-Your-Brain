export function cloneArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++)
        newArray[i] = array[i].slice();

    return newArray;
}

export function swapPosition(array, first, second) {
    const [firstRow, firstCol] = first.toRowCol()
    const [secondRow, secondCol] = second.toRowCol()
    const temp = array[firstRow][firstCol]
    array[firstRow][firstCol] = array[secondRow][secondCol]
    array[secondRow][secondCol] = temp;
}