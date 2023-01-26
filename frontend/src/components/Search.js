// client/src/components/Search.js

import React, { useState, useEffect } from 'react'; // changed

import { Formik } from 'formik';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';

function Search ({ search }) { // changed
  const [x, setX] = useState('Select a collection');
  const [y, setY] = useState('');
  const [coll, setColl] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [show, setShow] = useState (true)
  const handleSelect = (e) => {

    if (e.target.value === 'individuals') {
      setY('')
      setX('Put an individual ID. Example: NA24631')
      setColl('individuals')
      setOption1('NA24632')
      setOption2('NA24631')
    } else if (e.target.value === 'analyses') {
      setY('')
      setX('Put an analyses ID. Example: INT_ID2')
      setColl('analyses')
      setOption1('INT_ID2')
      setOption2('INT_ID3')
    } else if (e.target.value === 'interactors') {
      setY('')
      setX('Put a datasets ID. Example: EGAD00001008097')
      setColl('interactors')
      setOption1('EGAD00001008097')
      setOption2('EGAD00001008098')
    } else if (e.target.value === 'runs') {
      setY('')
      setX('Put a runs ID. Example: INT_ID3')
      setColl('runs')
      setOption1('INT_ID2')
      setOption2('INT_ID3')
    } else if (e.target.value === 'biosamples') {
      setY('')
      setX('Put a biosamples ID. Example: INT_ID2')
      setColl('biosamples')
      setOption1('INT_ID2')
      setOption2('INT_ID3')
    } else if (e.target.value === 'cohorts') {
      setY('')
      setX('Just click on button Search')
      setColl('cohorts')
      setOption1('')
      setOption2('')
    } else if (e.target.value === 'g_variants') {
      setY('')
      setX('position referenceBase > AlternateBase')
      setColl('g_variants')
      setOption1('9411326 C > G')
      setOption2('9411327 C > G')
    } else {
      setY('')
      setX('Select a collection')
      setColl('')
      setOption1('')
      setOption2('')
    }
  }

  const handleWrite = (e) => {
    setY(e.target.value);}

    const onSubmit = async (values, actions) => {
      
        await search(
          values.query,
          values.collection
        );
        console.log(values.query)
        setX('Select a collection')
        setColl('')
        setOption1('')
        setOption2('')
        console.log(coll)
        setShow(false)
        setY(values.query)
      };

    return (
<>
      <Formik enableReinitialize
        initialValues={{
          query: y,
          collection: coll,
          example: 'qexample'
        }}
        onSubmit={onSubmit}
      >
      {({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId='primaryTitle'>
          <Container fluid>

            <Row>
            <Col lg={2} style={{ padding: "0px"}}>
              <Form.Select
                name='collection'
                onChange={(e) => {
                  handleChange(e);
                  handleSelect(e);
                }}
                values={values.collection}
              >
              <option selected value="select">Select</option>
              <option value="individuals">Individuals</option>
              <option value="biosamples" >Biosamples</option>
              <option value="g_variants">G_variants</option>
              <option value="runs">Runs</option>
              <option value="analyses">Analyses</option>
              <option value="interactors">Interactors</option>
              <option value="cohorts">Cohorts</option>
              </Form.Select>
              </Col>
              <Col lg={9} style={{ padding: "0px"}}>
              <Form.Control
                type='text'
                name='query'
                placeholder={x}
                value={values.query}
                onChange={handleChange}
              />
              </Col>
              
              <Col style={{ padding: "0px"}}>
              {show && <Button type='submit' variant='primary' >Search</Button>}
              </Col>
              </Row>
              <Row style={{width: "20vw"}}>
              {show && <Form.Select
                name='example'
                onChange={(e) => {
                  handleWrite(e);
                }}
                value={values.example}
              >
              <option selected disabled value="qexample">Query Example</option>
              <option value ={option1}>{option1}</option>
              <option value ={option2} >{option2}</option>
              </Form.Select>}
              </Row>
              <Row>
                <Col>
              {!show &&<Button href='/' style={{margin: "10px 10px 10px 40%", }}>New Query</Button>}
              </Col>
              </Row>
              </Container>
          </Form.Group>

        </Form>
      )}
    </Formik>

    </>
  );
}

export default Search;