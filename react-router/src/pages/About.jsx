const PEOPLE = [
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Afi',
    },
    {
        id: 3,
        name: 'Radhea',
    },
    {
        id: 4,
        name: 'Aldi',
    },
    {
        id: 5,
        name: 'Dimitri',
    },
]


function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is About Page</p>
            <h5>Our team</h5>
            <ul>
                {PEOPLE.map(person => (
                    <li key={person.id}>
                        <Link to={ `/people/${person.id}`}>{person.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About