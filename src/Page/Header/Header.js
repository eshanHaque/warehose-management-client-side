import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        {   
                            user?
                                <button onClick={handleLogOut}>Log Out</button>
                            :
                            <Nav.Link href="/login">
                                Log In
                            </Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;