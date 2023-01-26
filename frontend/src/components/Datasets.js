import axios from 'axios';
import React, { useState, useEffect } from 'react'; // changed

import { Col, Container, Row, Card, Form } from 'react-bootstrap';

import ResultDatasets from './ResultDatasets';
import SearchDatasets from './SearchDatasets';

function Datasets () {
  // new
  const [resultsdataset, setResultsDataset] = useState([]);
  const [cercadataset, setCercaDataset] = useState([]);

  // new
  const searchdataset = async ( querydataset ) => {

            try {
              const res = await axios({
                method: 'get',
                url: `http://localhost:5050/api/datasets/${querydataset}/`,
        
              });
              setResultsDataset(res.data.response.collections);
              setCercaDataset(true);
              
            } catch (error) {
              console.error(error);
            }};


  return (

    <Container className='pt-3' fluid>
      <Row>
        <Col>
          <SearchDatasets searchdataset={searchdataset}/> 
        </Col>
        </Row>
        <Row>
        <Col lg={8}>
          <ResultDatasets resultsdataset={resultsdataset} cercadataset={cercadataset}/> 
        </Col>
        </Row>
    </Container>
    

  );

}
export default Datasets;