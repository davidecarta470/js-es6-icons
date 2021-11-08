const icons = [
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
const arrayColorType =['yellow','blue','purple']
const row = document.querySelector('.row');
console.log(row)


let select = document.getElementById('select').value;
	const iconsAnimals = icons.filter((icon)=>{
		return icon.type==='animal'
	})
	console.log(iconsAnimals)


	const iconsVegetables = icons.filter((icon)=>{
		return icon.type==='vegetable'
	})
	console.log(iconsVegetables.color)


	const iconsUsers = icons.filter((icon)=>{
		return icon.type==='user'
	})
	console.log(iconsUsers)


for(let i=0; i<icons.length ; i++){
	let square = document.createElement('div');
	square.className = 'square';
	square.classList.add('col-2')
	square.innerHTML=`<i class="fas fa-${icons[i].name}"></i>`
	itemsColor(icons[i].type,square)
	row.append(square);
}

	




console.log(iconsVegetables.color)
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

