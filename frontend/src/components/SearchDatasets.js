// client/src/components/Search.js

import React, { useState, useEffect } from 'react'; // changed

import { Formik } from 'formik';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';

function SearchDatasets ( {searchdataset} ) { // changed


    const onSubmit = async (values, actions) => {
      
        await searchdataset(
          values.querydataset
        );
        console.log(values.querydataset)

      };

    return (
<>
      <Formik
        initialValues={{
          querydataset: '',

        }}
        onSubmit={onSubmit}
      >
      {({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId='secondaryTitle'>
          <Container fluid>
            <Row>
              <Col lg={9} style={{ padding: "0px"}}>
              <Form.Control
                type='text'
                name='querydataset'
                placeholder='Search for Dataset'
                value={values.querydataset}
                onChange={handleChange}
              />
              </Col>
              
              <Col style={{ padding: "0px"}}>
              <Button type='submit' variant='primary' >Search</Button>
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

export default SearchDatasets;