// client/src/components/Search.js

import React, { useState } from 'react'; // changed

import { Formik } from 'formik';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';

function Search ({ search }) { // changed
  const [x, setX] = useState('Select a collection');
  const handleSelect = (e) => {
    setX(e.target.value);
    if (e.target.value === 'individuals') {
      setX('Put an individual ID. Example: NA24631')
    } else if (e.target.value === 'analyses') {
      setX('Put an analyses ID. Example: INT_ID2')
    } else if (e.target.value === 'interactors') {
      setX('Put a datasets ID. Example: EGAD00001008097')
    } else if (e.target.value === 'runs') {
      setX('Put a runs ID. Example: INT_ID3')
    } else if (e.target.value === 'biosamples') {
      setX('Put a biosamples ID. Example: INT_ID2')
    } else if (e.target.value === 'cohorts') {
      setX('Just click on button Search')
    } else if (e.target.value === 'g_variants') {
      setX('position referenceBase > AlternateBase')
    } else {
      setX('Select a collection')
    }
  }

    const onSubmit = async (values, actions) => {
        await search(
          values.query,
          values.collection
        );
        
      };
  
    return (
<>
      <Formik
        initialValues={{
          query: '',
          collection: ''
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
              <option selected value ="select">Select</option>
              <option value ="individuals">Individuals</option>
              <option value ="biosamples" >Biosamples</option>
              <option value ="g_variants">G_variants</option>
              <option value ="runs">Runs</option>
              <option value ="analyses">Analyses</option>
              <option value ="interactors">Interactors</option>
              <option value ="cohorts">Cohorts</option>
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
              <Button type='submit' variant='primary'>Search</Button>
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