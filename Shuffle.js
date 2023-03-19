// Nihar Satasia (niharsatasia@vt.edu)

function shuffle(arr)
{
    for(let i = arr.length -1 ; i > 0; i--)
    {
        // Creating a random number from 0 to i + 1
        const rand = Math.floor(Math.random() * (i + 1));
        // Storing the value of arr[i] to use it in a swap
        const temp = arr[i];
        // Swapping 
        arr[i] = arr[rand]
        // Swapping use the stored value of arr[i] now that it has changed
        arr[rand] = temp;
        
    }
    return arr;
}