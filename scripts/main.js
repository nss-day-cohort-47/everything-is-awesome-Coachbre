console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { dropDown } from './legos/LegoDetail.js';
import { searchBar } from './legos/LegoDetail.js';

const navElement = document.querySelector("nav");
const divElement = document.querySelector("#dropDown");
const SearchBarElement = document.querySelector("#searchBar");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
	
})

SearchBarElement.addEventListener("keyup", e => { 
	const searchString = e.target.value; 
})
const filterIDs = hpCharacters.filter(character => { return true; });




divElement.addEventListener("change", (event) => {

	

	switch(event.target.value) {
		case "Pearl": filterMaterials("Pearl");
		break;

		case "Chrome": filterMaterials("Chrome");
		break;

		case "Transparent": filterMaterials("Transparent");
		break;

		case "Solid":filterMaterials("Solid");
		break;

		case "Metallic":filterMaterials("Metallic");
		break;

		case "Milky":filterMaterials("Milky");
		break;

		case "Glitter":filterMaterials("Glitter");
		break;

		case "Speckle":filterMaterials("Speckle");
		break;

		case "Ink":filterMaterials("Ink");
		break;

		case "Process":filterMaterials("Process");
		break;

		case "Modulex":filterMaterials("Modulex");
		break;
	}
})


// accepts a value (as a string) to filter by 'material'
const filterMaterials = (material) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material === material) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}



const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const showDropDown = () => {
	const dropDownElement = document.querySelector('#dropDown');
	dropDownElement.innerHTML = dropDown();
}


const showSearchBar = () => {
	const SearchBarElement = document.querySelector('#searchBar');
	searchBarElement.innerHTML = searchBar();
}



const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})
	showDropDown();

}

startEIA();