function stringChop(str, size) {
let chunks=[];
	for(let i =0;i<str.length;i+=size){
		chunks.push(str.substring(i,i+size));
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
