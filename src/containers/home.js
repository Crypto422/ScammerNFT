/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Header from '../components/header';
import Footer from '../components/footer';
import Roadmap from "../components/roadmap";
import About from "../components/about";
import Faq from "../components/faq";
import siteConfig from "../config/site.config";
import { connect } from "../api/wallet";
import { mint, owner } from "../api/nft"
import { getShortAddress } from '../service/string'
import { getWei } from '../service/common'
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ScaleLoader";
import './styles.css';
import { Modal } from 'react-responsive-modal';


const Home = () => {
  const [amount, setAmount] = useState(1);
  const [isMint, setIsMint] = useState(false)
  const [address, setAddress] = useState('')
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const handleIncrease = () => {
    setAmount(Math.min(10, amount + 1))
  }
  const handleDecrease = () => {
    setAmount(Math.max(1, amount - 1))
  }
  const handleConnect = () => {
    connect()
      .then((res) => {
        setAddress(res.account)
        setIsMint(true)
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error.message, 3000);
      })
  }
  const handleMint = () => {
    setLoading(true);
    owner()
      .then((owner) => {
        let value = 0
        if (owner !== address)
          value = getWei(amount * siteConfig.DISPLAY_COST)
        mint(amount, address, value)
          .then((res) => {
            console.log(res);
            NotificationManager.success('Success', "Success minted", 3000);
            onOpenModal();
            setLoading(false);
          })
          .catch((error) => {
            NotificationManager.warning('Warning', error?.message, 3000);
            setLoading(true);
          })
      })
  }

  useEffect(() => {
    handleConnect()
  }, [])

  const imageSlider = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Header address={address} connect={handleConnect} />
      <Modal open={open} onClose={onCloseModal} center styles={{ background: '#4e4e4e' }}>
        <div className="flex-center">
          <div className="main-counter">
            <div className="title">
              <h2>Purchase done</h2>
            </div>
            <p>Have a look on it at&nbsp;
              <a
                href="https://opensea.io/collection/kick-scammers-nft"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                OpenSea
              </a>
            </p>
          </div>
        </div>
      </Modal>
      <section className="main-section" id="index">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-12">



              <div className="title" >
                <h1>Expose the Scammers!</h1>
              </div>

              <div className="row align-items-center py-5">

                <div className="col-lg-5">

                  <div className="text-center main-gif">
                    <img src="/images/Fixedanimation.gif" alt="" />
                  </div>

                </div>


                <div className="col-lg-7">

                  <div className="main-box-lg">
                    <p>Every NFT will earn Scamtokens with every new contribution that will be added to the database.<br />
                      What about raffles? Every month there will be a raffle, the more rare your NFT the more entries you get.<br />
                      But be cautious once your entry is used it is gone.</p>
                    <p>More information about the database and Scamtokens on <span><a href="https://scamlistcrypto.com">scamlistcrypto.com</a></span></p>
                  </div>

                </div>

              </div>

              {isMint ? (
                <div className="flex-center">
                  <div className="main-counter">
                    <div className="title">
                      <h2>Mint</h2>
                    </div>
                    <p>Kick Scammer NFT</p>
                    <div className="counter">
                      <button onClick={() => handleDecrease()}>-</button>
                      <span>{amount}</span>
                      <button onClick={() => handleIncrease()}>+</button>
                    </div>
                    <ul className="navbar-nav mr-auto">
                      <li>
                        {
                          !loading && <a className="custom-btn" id="connect-wallet" onClick={handleMint}>
                            Mint
                          </a>
                        }

                      </li>
                      <ClipLoader color={color} loading={loading} css={override} size={20} />
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="main-button" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <a className="custom-btn" id="connect-wallet" onClick={handleConnect}>
                      {address === '' ? "Connect Wallet" : getShortAddress(address)}
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <Container fluid className="image-slider">
            <Slider {...imageSlider}>

              <div>
                <img src="/images/4.png" alt="" />
              </div>

              <div>
                <img src="/images/48.png" alt="" />
              </div>

              <div>
                <img src="/images/168.png" alt="" />
              </div>

              <div>
                <img src="/images/299.png" alt="" />
              </div>

              <div>
                <img src="/images/307.png" alt="" />
              </div>

              <div>
                <img src="/images/342.png" alt="" />
              </div>

              <div>
                <img src="/images/366.png" alt="" />
              </div>

              <div>
                <img src="/images/866.png" alt="" />
              </div>

              <div>
                <img src="/images/915.png" alt="" />
              </div>



            </Slider>
          </Container>

        </AnimationOnScroll>


        <Roadmap />

        <About />

        <Faq />

      </section>
      <Footer />
    </>
  )
}

export default Home;