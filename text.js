async function resolveAfterFiveSec(){
	console.log("Starting Slow Promise");

	let text = await new Promise(function(resolve){
		setTimeout(() => {
			 resolve("Hello World");
			console.log("Promise resolved");
		},5000);
	})
    return text;
}

console.log(resolveAfterFiveSec());