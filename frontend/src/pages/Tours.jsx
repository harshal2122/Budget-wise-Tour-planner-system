

import React, { useState, useEffect } from 'react'
import CommonSection from '../component/shared/CommonSection'

import "../styles/tours.css"
import tourData from '../assets/data/tours'
import TourCard from '../component/shared/TourCard'
import Newsletter from '../component/shared/Newsletter'
import SearchBar from '../component/shared/SearchBar'
import { Container, Row, Col } from 'reactstrap'




const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4) // backend data count
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
                <Col lg='3' className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }

            <Col lg='12'>
              <div className="pagination d-flex align-item-center 
              justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page ===number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Tours