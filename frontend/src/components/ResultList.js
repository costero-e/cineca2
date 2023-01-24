// client/src/components/ResultList.js

import React, { useState } from 'react'; // changed

import { sanitize } from 'dompurify'; // new
import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Col, Container, Row, Card } from 'react-bootstrap';




// changed
function ResultList ({ results, cerca, cole }) {
  console.log(results);
  console.log(cole);

if (cerca === false) {
  return (
<Container className='entities' fluid>
<Row style={{width: "90vw"}}>
            <Col style={{padding: "10px 10px 10px 10px"}}>
        <Card className='pt-3 card' style={{height: "100%"}}>
        <Card.Body>
          <Card.Title>Beacon Africa</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Dataset</Card.Subtitle>
          <Card.Text>
          This dataset consists of 100 samples which have synthetic subject attributes and phenotypic data based on the Human Heredity and Health in Africa (H3Africa) consortium core phenotype model (H3Africa Core phenotype). The H3Africa initiative consists of 51 African projects, with over 70,000 participants, including population-based genomic studies of common, non-communicable disorders such as heart and renal disease, as well as communicable diseases such as tuberculosis. 
          </Card.Text>
          <Card.Link href="#">Beacon API</Card.Link>
          <Card.Link href="#">Visit Us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col style={{padding: "10px 10px 10px 10px"}}>
        <Card className='pt-3 card'>
        <Card.Body>
          <Card.Title>Beacon Canada</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Dataset</Card.Subtitle>
          <Card.Text>
          This dataset consists of 100 variables for 150 synthetic participants which have subject attributes and phenotypic data derived from the CHILD Cohort Study and the associated CHILDdb database. CHILD is a longitudinal study following over 3400 Canadian children and their parents, reflective of Canadian demographics, in order to better predict, prevent and treat chronic diseases. Variables were chosen from CHILDdb which covered the CINECA minimal metadata model, covered select COVID-specific and CINECA use cases and exhibited particular variables that are reflective of the CHILD Cohort Study. Note that there are over 37 million datapoints in CHILDdb, so this synthetic data is a very small subset of the very diverse, deeply phenotyped CHILD data.
          </Card.Text>
          <Card.Link href="#">Beacon API</Card.Link>
          <Card.Link href="#">Visit Us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row style={{width: "90vw"}}>
      <Col style={{padding: "10px 10px 10px 10px"}}>
        <Card className='pt-3 card' style={{height: "100%"}}>
        <Card.Body>
          <Card.Title>Beacon Europe UK1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Dataset</Card.Subtitle>
          <Card.Text>
          This dataset consists of 2504 samples which have genetic data based on 1000 Genomes data (phase3 and Geuvadis), and 76 synthetic subject attributes and phenotypic data derived from UKBiobank. The UK Biobank is a very large and detailed prospective study with over 500,000 participants aged 40–69 years when recruited in 2006–2010. The study has collected and continues to collect extensive phenotypic and genotypic detail about its participants, including data from questionnaires, physical measures, sample assays, accelerometry, multimodal imaging, genome-wide genotyping and longitudinal follow-up for a wide range of health-related outcomes. 
          </Card.Text>
          <Card.Link href="#">Beacon API</Card.Link>
          <Card.Link href="#">Visit Us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col style={{padding: "10px 10px 10px 10px"}}>        <Card className='pt-3 card' style={{height: "100%"}}>
        <Card.Body>
          <Card.Title>Beacon Europe CH SIB</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Dataset</Card.Subtitle>
          <Card.Text>
          This dataset consists of 6733 synthetic samples containing both phenotypic and genotypic information. The phenotypic data were derived from CoLaus and PsyCoLaus, cohorts which include data from over 6000 Caucasian individuals aged 35 to 75 years living in Lausanne, Switzerland. Although CoLaus focuses on cardiovascular disorders, and PsyCoLaus focuses on psychiatric disorders, both cohorts collect demographic, socio-economic, life-style, and clinical information from enrolled patients.           </Card.Text>
          <Card.Link href="#">Beacon API</Card.Link>
          <Card.Link href="#">Visit Us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
      </Card></Col>
      </Row>
      </Container>
  );
}

if (cole === 'individuals') {

  const Individuals = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.id} | ${sanitize(results.ethnicity.id)} | ${sanitize(results.ethnicity.label)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.geographicOrigin.id} | {results.geographicOrigin.label}
        </Card.Subtitle>
        <Card.Text>{results.sex.id} | {results.sex.label}</Card.Text>
        <Card.Text>{results.diseases[0].diseaseCode.id} | {results.diseases[0].diseaseCode.label}</Card.Text>
        <Card.Text>{results.phenotypicFeatures[0].featureType.id} | {results.phenotypicFeatures[0].featureType.label}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Individuals}
      
    </Container>
    
  );
}

if (cole === 'g_variants') {

  const GVariants = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.variantInternalId} | ${sanitize(results.referenceBases)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.position.start} | {results.position.end} | {results.refseqId}
        </Card.Subtitle>
        <Card.Text>{results.variantType} | {results.alternateBases}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );


  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {GVariants}
      
    </Container>
    
  );
}

if (cole === 'analyses') {

  const Analyses = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results._id} | ${sanitize(results.analysisDate)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.biosampleId} | {results.individualId} | {results.runId}
        </Card.Subtitle>
        <Card.Text>{results.pipelineName} | {results.variantCaller} | {results.aligner}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Analyses}
      
    </Container>
    
  );
}

if (cole === 'interactors') {

  const Interactors = results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.id} | ${sanitize(results.createDateTime)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.description} | {results.externalUrl} | {results.name}
        </Card.Subtitle>
      </Card.Body>
    </Card>
    </Container>
    
        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Interactors}
      
    </Container>
    
  );
}

if (cole === 'cohorts') {

  const Cohorts = results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.cohortName} | ${sanitize(results.cohortId)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.cohortType} 
        </Card.Subtitle>
      </Card.Body>
    </Card>
    </Container>

        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Cohorts}
      
    </Container>
    
  );
}

if (cole === 'biosamples') {

  const Biosamples = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.id} | ${sanitize(results.individualId)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.biosampleStatus.label} | {results.collectionDate} | {results.collectionMoment}
        </Card.Subtitle>
        <Card.Text>{results.diagnosticMarkers.label} | {results.histologicalDiagnosis.label} | {results.pathologicalStage.label}</Card.Text>
        <Card.Text>{results.pathologicalTnmFinding.label} | {results.sampleOriginDetail.label} | {results.sampleOriginType.label}</Card.Text>
        <Card.Text>{results.tumorGrade.label} | {results.tumorProgression.label}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Biosamples}
      
    </Container>
    
  );
}

if (cole === 'runs') {

  const Runs = results.map((results) => {

    return results.results.map(results =>


<Container className='entities' fluid>
    <Card id='hola' className='mb-3' key={results._id}  >
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${results.id} | ${sanitize(results.individualId)}`
          }}
        ></Card.Title>

        <Card.Subtitle
          className='mb-2 text-muted'
        >{results.libraryLayout} | {results.librarySelection} | {results.librarySource.label}
        </Card.Subtitle>
        <Card.Text>{results.libraryStrategy} | {results.platform} | {results.runDate} | {results.platformModel.id}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
        }
        
  );

  return (
    
          
    <Container fluid>

      {results && results.length === 0 && <p>No results found.</p>}
      {Runs}
      
    </Container>
    
  );
}


}

export default ResultList;