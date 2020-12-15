import React from 'react'
import {Navbar,Nav,Form} from 'react-bootstrap'

export default function Header(props){
    console.log(process.env.PUBLIC_URL)
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="nav-header">
                <Navbar.Brand href="/" style={{"fontFamily":"sans-serif"}}>{props.name}</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href={process.env.PUBLIC_URL} className='tabs-section'>Home</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/continents`} className='tabs-section'>Continents</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/countries`} className='tabs-section'>Countries</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/news`} className='tabs-section'>News</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/county`} className='tabs-section'>Local County Info</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/usstates`} className='tabs-section'>US States</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + `/#/testing-sites`} className='tabs-section'>Testing Sites</Nav.Link>
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