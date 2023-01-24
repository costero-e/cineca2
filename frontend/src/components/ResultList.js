// client/src/components/ResultList.js

import React, { useState } from 'react'; // changed

import { sanitize } from 'dompurify'; // new
import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Col, Container, Row, Card } from 'react-bootstrap';




// changed
function ResultList ({ results, cerca, cole }) {
  console.log(results);

  // new
  const Individuals = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  const GVariants = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  const Analyses = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  const Interactors = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  const Cohorts = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );
  
  const Biosamples = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  const Runs = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results.id}  >
      <Card.Body>
      <Card.Img as={Image} src={results.image} alt="Card image" style={{ objectFit: 'none', width: '10%'}}/>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.startYear)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.genres} | {results.runtimeMinutes} Minutes | Rating: {results.averageRating}
        </Card.Subtitle>
        <Button href ={results.url} >TO WEBSITE<Card.Link style={{opacity:0}} dangerouslySetInnerHTML= {{ __html: sanitize(results.url) }} /></Button>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  

  
  

if (cerca === false) {
  return (
<Container className='entities' fluid>
<Row>
            <Col>
        <Card className='pt-3'>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
        <Card className='pt-3'>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
  );
}







 // document.getElementById('clickme').onclick = sort_by_key(results, 'primaryTitle');

  // document.getElementById('clickme2').onclick = sort_by_key(results, 'startYear');
  // changed
if (cole === 'individuals') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Individuals}
      
    </Container>
    
  );
}

if (cole === 'g_variants') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {GVariants}
      
    </Container>
    
  );
}

if (cole === 'analyses') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Analyses}
      
    </Container>
    
  );
}

if (cole === 'interactors') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Interactors}
      
    </Container>
    
  );
}

if (cole === 'cohorts') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Cohorts}
      
    </Container>
    
  );
}

if (cole === 'biosamples') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Biosamples}
      
    </Container>
    
  );
}

if (cole === 'runs') {

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Runs}
      
    </Container>
    
  );
}


}

export default ResultList;