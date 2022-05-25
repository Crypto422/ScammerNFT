import { Container, Navbar } from 'react-bootstrap';
import { getShortAddress } from '../service/string'

const Header = (props) => {
  const { address, connect } = props
  return (

    <Navbar className="nav-custom">
      <Container fluid>
        <Navbar.Brand href="./index.html">
          <img src="images/logo.png" className="logo" />
        </Navbar.Brand>
      
        <div className="justify-content-end" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <a className="custom-btn" id="connect-wallet" onClick={connect}>
              {address === ''? "Connect Wallet" : getShortAddress(address)}
            </a>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;