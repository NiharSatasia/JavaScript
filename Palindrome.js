// Nihar Satasia (niharsatasia@vt.edu)

function palindrome(str)
{
// Format to avoid any special characters and spaces 
// (found this format online)
 let format = /[\W_]/g;

 // Handling the case sensetive, space, and special characters case,
 str = str.toLowerCase().replace(format, '');

 for(let i = 0; i < str.length/2; i++) {
    // Returns false if any of the characters at the front and back of the 
    // string are not the same, moving towards the center index on each iteration,
   if(!(str[i] == str[str.length - 1 - i]))
   {
       return false;
   }
 }
 return true;
}