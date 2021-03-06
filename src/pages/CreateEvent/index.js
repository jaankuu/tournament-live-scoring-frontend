import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DatePicker from 'react-date-picker';

import { selectToken, selectIsAdmin } from "../../store/user/selectors"
import { postEvent } from "../../store/eventDetails/actions";

const CreateEvent = () => {
    const isAdmin = useSelector(selectIsAdmin)
    const token = useSelector(selectToken)

    const dispatch = useDispatch()

    const [ name, setName ] = useState(null)
    const [ date, setDate ] = useState(new Date());
    const [ location, setLocation ] = useState(null)
    const [ description, setDescription ] = useState(null)
    const [ active, setActive ] = useState(false)
    const [ userId, setUserId ] = useState(null)

    function submitForm(event) {
        dispatch(postEvent(name, date, location, description, active, userId))
        console.log("postEvent::", name, date, location, description, active, userId)
        setName(null)
        setDate(null)
        setLocation(null)
        setDescription(null)
        setActive(false)
        setUserId(null)
    }

    if (!token || !isAdmin) {
        return <div>Only logged in administrators can create events!</div>
    }


    return (
        <Jumbotron
        style={{
          border: "solid",
        }}
      >
        <Form as={Col} md={{ span: 6, offset: 3 }}>
          <h1 className="mt-5 mb-5">
           Create an event
          </h1>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter event name"
              required
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <p>
            <DatePicker
              onChange={setDate}
              value={date}
            />
            </p>
         
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              type="text"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="textarea"
              required
            />
          </Form.Group>

            {/* Add players to event */}
  
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Create event
            </Button>
          </Form.Group>
        </Form>
      </Jumbotron>
    )
}

export default CreateEvent