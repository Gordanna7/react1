
const persons = [
    {
    maticen: 123,
    ime: "Stavre",
    godini: 30
    },
    {
    maticen: 12356,
    ime: "Filip",
    godini: 35
    },
    {
    maticen: 12345,
    ime: "Mitko",
    godini: 40
    },
    {
    maticen: 141123,
    ime: "Petko",
    godini: 50
    }
]



const PersonIterator = () => {
    return persons.map (person => {
        return <li key={person.maticen}>{person.ime} : {person.godini}</li>
    })
}

export default PersonIterator