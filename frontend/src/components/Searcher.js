// client/src/App.js
import axios from 'axios';
import React, { useState, useEffect } from 'react'; // changed

import { Col, Container, Row, Card, Form } from 'react-bootstrap';

import ResultList from './ResultList';
import Search from './Search';

function Searcher () {
  // new
  const [results, setResults] = useState([]);
  const [cerca, setCerca] = useState(false);
  const [cole, setCole] = useState(false);

  // new
  const search = async ( query, collection ) => {
    setCole(collection)

if (collection === 'individuals') {
  
  try {
    
    const res = await axios({
      method: 'get',
      url: `http://localhost:5050/api/individuals/${query}/`,

    });
    setResults(res.data.response.resultSets);
    setCerca(true);
    
  } catch (error) {
    console.error(error);
  }
} else if (collection === 'g_variants') {
  const answer_array = query.split(' ');
  const position = answer_array[0]
  const referenceBase = answer_array[1]
  const alternateBase = answer_array[3]
  const json = {
    "meta": {
        "apiVersion": "2.0"
    },
    "query": {
        "filters": [
            {
                "id": "UBERON:0001256",
                "scope": "biosamples",
                "includeDescendantTerms": false
            }
        ],
        "includeResultsetResponses": "HIT",
        "pagination": {
            "skip": 0,
            "limit": 10
        },
        "testMode": false,
        "requestedGranularity": "count"
    }
}
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:5050/api/g_variants/ --json < ${json}`,

      });
      setResults(res.data.response.resultSets);
      setCerca(true);
      
    } catch (error) {
      console.error(error);
    }}
  else if (collection === 'biosamples') {
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:5050/api/biosamples/${query}/`,

      });
      setResults(res.data.response.resultSets);
      setCerca(true);
      
    } catch (error) {
      console.error(error);
    }}
    else if (collection === 'analyses') {
      try {
        const res = await axios({
          method: 'get',
          url: `http://localhost:5050/api/analyses/${query}/`,
  
        });
        setResults(res.data.response.resultSets);
        setCerca(true);
        
      } catch (error) {
        console.error(error);
      }}
      else if (collection === 'runs') {
        try {
          const res = await axios({
            method: 'get',
            url: `http://localhost:5050/api/runs/${query}/`,
    
          });
          setResults(res.data.response.resultSets);
          setCerca(true);
          
        } catch (error) {
          console.error(error);
        }}
        else if (collection === 'cohorts') {
          try {
            const res = await axios({
              method: 'get',
              url: `http://localhost:5050/api/cohorts/`,
      
            });
            setResults(res.data.response.collections);
            setCerca(true);
            
          } catch (error) {
            console.error(error);
          }}
          else if (collection === 'interactors') {
            try {
              const res = await axios({
                method: 'get',
                url: `http://localhost:5050/api/datasets/${query}/`,
        
              });
              setResults(res.data.response.collections);
              setCerca(true);
              
            } catch (error) {
              console.error(error);
            }}
  };


  return (

    <Container className='pt-3' fluid>
      <Row>
        <Col>
          <Search search={search}/> 
        </Col>
        </Row>
        <Row>
        <Col lg={8}>
          <ResultList results={results} cerca={cerca} cole={cole}/> 
        </Col>
        </Row>
    </Container>
    

  );

}

export default Searcher;