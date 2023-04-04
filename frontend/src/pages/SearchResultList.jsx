import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
  
import CommonSection from '../component/shared/CommonSection';
import { useLocation } from 'react-router-dom';


const SearchResultList = () => {

 const location = useLocation()

 const [data] = useState(location.state)

 console.log(data)
  return (
    <>
    <CommonSection title={"Tour Search Result"}/>
    <section>
      <Container>
        <Row>
         <Col>
         </Col> 
        </Row>
      </Container>
    </section>
    </>
  )
}

export default SearchResultList;