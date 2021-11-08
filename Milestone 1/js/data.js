const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const row = document.querySelector('.row');


// Creo tre array che contengono solo animali,solo frutta ,solo users
  const iconsAnimals = allIcons.filter((icon)=>{
		return icon.type==='animal'
	})
	
	const iconsVegetables = allIcons.filter((icon)=>{
		return icon.type==='vegetable'
	})

	const iconsUsers = allIcons.filter((icon)=>{
		return icon.type==='user'
	})
	
	
	// creo un array con tutti gli array
	const allarrays = [allIcons,iconsAnimals,iconsUsers,iconsVegetables]
	htmlGenerator (allIcons)

	
	// prendo il valore della select
	const select = document.getElementById('select');
	console.log(select)
	
	select.addEventListener('click',function(){
	let selectValue = document.getElementById('select').value;
	    row.innerHTML = ''
			switch(selectValue){
					case '1':
						htmlGenerator (allIcons)
						break;
					case '2':
						htmlGenerator (iconsUsers)
						break;
					case '3':
						htmlGenerator (iconsAnimals)
						break;
					case '4':
						htmlGenerator (iconsVegetables)
						break;
			}
	
})	




function htmlGenerator (selectedArray){
	for(let i=0; i<selectedArray.length ; i++){
		let square = document.createElement('div');
		square.className = 'square';
		square.innerHTML=`<i class="fas fa-${selectedArray[i].name}"></i>`
		itemsColor(selectedArray[i].type,square)
		row.append(square);
	}
}
	



// FUNZIONE COLORI ELEMENTI 
function itemsColor(iconsType,squareStyle){
	if(iconsType ==='vegetable'){
		squareStyle.style = `color:${iconsVegetables[0].color}`;
	 }
 	if(iconsType ==='animal'){
		squareStyle.style = `color:${iconsAnimals[0].color}`;
	 }
	 if(iconsType ==='user'){
		squareStyle.style = `color:${iconsUsers[0].color}`;
	 }
}

