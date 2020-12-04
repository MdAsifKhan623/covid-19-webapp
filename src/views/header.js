import React from 'react'
import {Navbar,Nav,Form} from 'react-bootstrap'

export default function Header(props){
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="nav-header">
                <Navbar.Brand href="#home" style={{"fontFamily":"sans-serif"}}>{props.name}</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/covid-19-webapp" className='tabs-section'>Home</Nav.Link>
                <Nav.Link href="covid-19-webapp/continents" className='tabs-section'>Continents</Nav.Link>
                <Nav.Link href="covid-19-webapp/countries" className='tabs-section'>Countries</Nav.Link>
                <Nav.Link href="covid-19-webapp/news" className='tabs-section'>News</Nav.Link>
                <Nav.Link href="covid-19-webapp/county" className='tabs-section'>Local County Info</Nav.Link>
                <Nav.Link href="covid-19-webapp/usstates" className='tabs-section'>US States</Nav.Link>
                <Nav.Link href="covid-19-webapp/testing-sites" className='tabs-section'>Testing Sites</Nav.Link>
                </Nav>
                <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button> */}
                <Nav.Link href="/about" className='tabs-section'>About</Nav.Link>
                </Form>
            </Navbar>
        </div>
    )
}