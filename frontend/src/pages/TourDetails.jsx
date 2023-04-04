import React, {useRef, useState} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../units/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../component/Booking/Booking'
import Newsletter from '../component/shared/Newsletter'

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef ('')
  const [tourRating, setTourRatimg]=useState(null)

  //this is an static data later (api) and load data from database
  const tour = tourData.find(tour => tour.id === id)

  //destructure properties from object 
  const { photo, title, desc, price, address, reviews, city, budget, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options ={ day: "numeric", month: "long", year:"numeric"};

  //submit request to server
  const submitHandler = e=>{
  e.preventDefault()
  const reviewText = reviewMsgRef.current.value;

  //later will call our api 
 // alert(`${reviewText},${tourRating}`);

  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-item-center gap-5">



                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class= "ri-star-s-fill"
                        style={{ color: 'var(--secondary-color)' }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated')
                        : (
                          <span>({reviews?.length})</span>
                        )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                      <i class="ri-hand-coin-fill"></i>₹{price}/ per person
                    </span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>{distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>{maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/*    tour reviews section     */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <form onSubmit={submitHandler}>
                    <div className="d-flex align-item-center
                     gap-3 mb-4 rating__group">
                      <span onClick={()=> setTourRatimg(1)}>
                       1 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=> setTourRatimg(2)}>
                       2 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=> setTourRatimg(3)}>
                       3 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=> setTourRatimg(4)}>
                       4 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=> setTourRatimg(5)}>
                       5 <i class="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="reviews__input">
                      <input
                       type="text"
                        ref={reviewMsgRef} 
                        placeholder="shere your thoughts"
                        required
                         />
                      <button className='btn primary__btn text-white'
                      type='submit'>
                        Submit

                      </button>
                    </div>
                  </form>

                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(reviews=>(
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-item-center
                             justify-content-between">
                            <div>
                            <h5>Harshal Patil</h5>
                            <p>
                              {new Date('03-16-2023')
                              .toLocaleDateString("en-US",
                              options
                            )}
                            </p>
                          </div>
                          <span className='d-flex align-items-center'>
                           5 <i class="ri-star-fill"></i>
                          </span>
                        </div>

                      <h5>Amazing tour</h5>
                        </div>
                        </div>
                      ))
                    }

                  </ListGroup>
                </div>

                {/*    tour reviews section end     */}


              </div>
            </Col>

            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails