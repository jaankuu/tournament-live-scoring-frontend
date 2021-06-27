import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser)

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
//   const showEnterScores = token !== null
  const showCreateEvent = token !== null && user.isAdmin === true
  const showSignUp = token === null

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={NavLink} to="/">
        TournamentLiveScoring
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/events" linkText="Events" />
          {showCreateEvent ? (
          <NavbarItem path="/create-event" linkText="Create an event" />
          ) : null }
          {showSignUp ? (
            <NavbarItem path="/signup" linkText="Sign up" />
          ) : null }
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
