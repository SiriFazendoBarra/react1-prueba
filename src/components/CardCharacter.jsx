import Card from 'react-bootstrap/Card'

const CardCharacter = ({ item }) => {

    return (
        <Card className='bg-dark text-white card' variant="card bg-primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className='m-0 cardText'>Origin: {item.origin.name}</Card.Text>
                <Card.Text className='m-0 cardText'>Status: {item.status}</Card.Text>
                <Card.Text className='m-0 cardText'>Gender: {item.gender}</Card.Text>
                <Card.Text className='m-0 cardText'>Specie: {item.species}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardCharacter