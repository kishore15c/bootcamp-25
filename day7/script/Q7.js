/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	 */

// Read a 5-letter word from the user
let word = prompt("Enter a Five letter word:");

// Ensure exactly 5 letters (optional check)
if (word.length !== 5) {
  console.log("Please enter exactly five letters.");
} else {
  let encodedWord = "";

  // Loop each character and subtract 1 from ASCII value
  for (let i = 0; i < word.length; i++) {
    let asciiValue = word.charCodeAt(i);
    let newChar = String.fromCharCode(asciiValue - 1);
    encodedWord += newChar;
  }

  // Display encoded word
  console.log(`Encoded Word: ${encodedWord}`);
}
