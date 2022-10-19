const exportDataToExcel = require("./exportService");       


const API_URL = "https://pokeapi.co/api/v2"

const getApi = async (url) => {
    
    const fileName = 'pokemon'
    const respPokeNames = await fetch(`${url}/pokemon/`);
    let data = await respPokeNames.json();
    
    let pokemonId = 1
    let pokeSpecies = await fetch( `${url}/pokemon-species/${pokemonId}`)
    let pokeSpeciesData = await pokeSpecies.json()

    const newData = []
    newData.push(data, pokeSpeciesData)

    console.log(`Exporting ${fileName} data to excel...`)

    const workSheetColumnNames = [
        'ID',
        'Name',
        'Info',
        'URL'
    ]
    let time = new Date()
    let hours = time.getHours()
    hours = ("0" + hours).slice(-2)
    let minutes = time.getMinutes()
    const filePath =`../outputFiles/${fileName}T${hours}_${minutes}.xlsx`
    const workSheetName = `${fileName}_data`
    console.log(`New xlsx file named:  ${fileName}T${hours}_${minutes}.xlsx...`)
    exportDataToExcel(data, /* newData, */ workSheetColumnNames, workSheetName, filePath)
}

getApi(API_URL);

