

import React, { useState, useEffect } from 'react'
import CommonSection from '../component/shared/CommonSection'

import "../styles/services.css"
import ServiceList from '../assets/services/ServiceList'
import Newsletter from '../component/shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'




const Services = () => {

  return (
    <>
      <CommonSection title={"Services"} />
      <section>
        <Container>
          <Row>
            <Col>
            </Col>
           <ServiceList />
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}


export default Services