import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Spinner from './Spinner'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DrinkSingle = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        setDrink(data.drinks[0])
      } catch (err) {
        setErrors(true)
      }
    }
    getData()
  }, id)
  console.log(drink)

  return (

    <Container as="main">
      <Row>
        {drink ?
          <>
            <h1>{drink.strDrink}</h1>
            <Col md="6">
              <img className='w-100' src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Col>
            <Col md="6">
              <p>{drink.strInstructions}</p>
              <hr />
              <Link to="/" className='btn dark'>Back to all Drinks</Link>
            </Col>
          </>
          :
          <h2 className="text-center">
            {errors ? 'Something went wrong. Please try again later' : <Spinner />}
          </h2>
        }
      </Row>
    </Container>
  )
}
export default DrinkSingle 