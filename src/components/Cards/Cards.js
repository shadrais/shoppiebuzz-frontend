import React from 'react'
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Cards.css'

const Cards = () => {
  return (
    <>
      <CardDeck className='py-5 px-5 m-auto'>
        <Card variant='light' bg='info' className='w-auto'>
          <Card.Body>
            <Card.Header as='h1'>Free</Card.Header>
            <Card.Title as='h3' className='center'>
              $0/month
            </Card.Title>
            <ListGroup variant='flush' className='listgroup'>
              <ListGroupItem>Basic Template</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card bg='secondary'>
          <Card.Body>
            <Card.Header as='h1'>Basic </Card.Header>
            <Card.Title as='h3'>$5/month</Card.Title>
            <ListGroup variant='flush'>
              <ListGroupItem>Free Plan +</ListGroupItem>
              <ListGroupItem>100+ Templates</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card variant='light' bg='success'>
          <Card.Body>
            <Card.Header as='h1'>Elite</Card.Header>
            <Card.Title as='h3'>$7/Month</Card.Title>
            <ListGroup variant='flush'>
              <ListGroupItem>Basic Plan +</ListGroupItem>
              <ListGroupItem>Priority Supoort</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  )
}
export default Cards
