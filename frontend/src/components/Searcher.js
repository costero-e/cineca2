// client/src/App.js
import axios from 'axios';
import React, { useState } from 'react'; // changed

import { Col, Container, Row, Card } from 'react-bootstrap';

import ResultList from './ResultList';
import Search from './Search';

function Searcher () {
  // new
  const [results, setResults] = useState([]);
  const [cerca, setCerca] = useState(false);
  const [cole, setCole] = useState(false);

  // new
  const search = async ( query, collection ) => {
  const id = query

if (collection === 'individuals') {
  setCole(collection)
  try {
    
    const res = await axios({
      method: 'get',
      url: `http://localhost:5050/api/individuals/${id}/`,

    });
    setResults(res.data.response.resultSets);
    setCerca(true);
    
  } catch (error) {
    console.error(error);
  }
} else if (collection === 'g_variants') {
  setCole(collection)
  const answer_array = query.split(' ');
  const position = answer_array[0]
  const referenceBase = answer_array[1]
  const alternateBase = answer_array[3]
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:5050/api/g_variants/?start=${position}&referenceBases=${referenceBase}&alternateBases=${alternateBase}`,

      });
      setResults(res.data.response.resultSets);
      setCerca(true);
      
    } catch (error) {
      console.error(error);
    }}
  else if (collection === 'biosamples') {
    setCole(collection)
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:5050/api/biosamples/${id}/`,

      });
      setResults(res.data.response.resultSets);
      setCerca(true);
      
    } catch (error) {
      console.error(error);
    }}
    else if (collection === 'analyses') {
      setCole(collection)
      try {
        const res = await axios({
          method: 'get',
          url: `http://localhost:5050/api/analyses/${id}/`,
  
        });
        setResults(res.data.response.resultSets);
        setCerca(true);
        
      } catch (error) {
        console.error(error);
      }}
      else if (collection === 'runs') {
        setCole(collection)
        try {
          const res = await axios({
            method: 'get',
            url: `http://localhost:5050/api/runs/${id}/`,
    
          });
          setResults(res.data.response.resultSets);
          setCerca(true);
          
        } catch (error) {
          console.error(error);
        }}
        else if (collection === 'cohorts') {
          setCole(collection)
          try {
            const res = await axios({
              method: 'get',
              url: `http://localhost:5050/api/cohorts/`,
      
            });
            setResults(res.data.response.resultSets);
            setCerca(true);
            
          } catch (error) {
            console.error(error);
          }}
          else if (collection === 'interactors') {
            setCole(collection)
            try {
              const res = await axios({
                method: 'get',
                url: `http://localhost:5050/api/datasets/${id}/`,
        
              });
              setResults(res.data.response.resultSets);
              setCerca(true);
              
            } catch (error) {
              console.error(error);
            }}
  };


  return (

    <Container className='pt-3' fluid>
      <h1>Cineca Beacon Network</h1>
      <Row>
        <Col>
          <Search search={search} /> 
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