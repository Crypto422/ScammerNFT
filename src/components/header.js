/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

const Header = (props) => {
  const { address, connect, disconnectWallet } = props
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-custom fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src="images/logo.png" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#mint">Mint</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap">Roadmap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/kickscammersnft/" target="_blank">
                <img src="images/instagram.svg" width="20" alt="" style={{ width: "30px" }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://discord.gg/HQdtsyPc" target="_blank">
                <img src="images/discord.svg" width="20" alt="" style={{ width: "30px" }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://twitter.com/nft_kick" target="_blank">
                <img src="images/twitter.svg" width="20" alt="" style={{ width: "30px" }} />
              </a>
            </li>
            {
              !address ?
                (<a className="custom-btn" id="connect-wallet" onClick={connect}>
                  Connect Wallet
                </a>)
                :
                (<a className="custom-btn" id="connect-wallet" onClick={disconnectWallet}>
                  Disconnect Wallet
                </a>)
            }

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;