//your JS code here. If required.
document.getElementById('voteForm').addEventListener('submit',(e)=>{
	e.preventDefault();
	
	let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();

	if(name === " " || age === " "){
		alert("Please enter valid details.")
		return;
	}

	age = parseInt(age)

	let checkEligibility = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	})

	checkEligibility.then(message=>alert(message))
	.catch(err=>alert(err))
})