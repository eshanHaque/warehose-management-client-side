import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () =>{
        signOut(auth);
    }
    const navigate = useNavigate();

    const navigateInventoryItem = id =>{
        navigate(`/manage/${id}`); 
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        <button onClick={navigateInventoryItem} className='btn btn-primary'>Manage Inventory</button>
                        {   
                            user?
                                
                            
                                <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
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