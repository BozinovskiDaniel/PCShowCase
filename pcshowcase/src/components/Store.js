import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/storescripts';

function Store() {
    return (

  <body>

    <div className="header-image">
      <div className="theOverlay"></div>
      <div className="container-fluid">
        <h1>Store</h1>  
        <p>Checkout our awesome products!</p>
      </div>
    </div>


  <div className="container">

  <div className="row">

    <div className="col-lg-3">

      <h1 className="my-4 text-center">PCS</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Rigs</a>
        <a href="#" className="list-group-item">Keyboards</a>
        <a href="#" className="list-group-item">Mouse</a>
      </div>

    </div>


    <div className="col-lg-9">

      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src={require('../images/2.jpg')} height="100px" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={require('../images/1.jpg')} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={require('../images/3.jpg')} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="row">

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/10.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Scorptec Ryzen RTX 2060</a>
              </h4>
              <h5>$2399.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/11.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">HiZen Precision GTX 1660</a>
              </h4>
              <h5>$1499.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/12.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Raydar IEM RTX 2080 Ti</a>
              </h4>
              <h5>$5099.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/13.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Scorptec Team Red RX 5700 XT</a>
              </h4>
              <h5>$999.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/14.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Raydeer Meshify RTX 2070</a>
              </h4>
              <h5>$2899.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={require('../images/15.webp')} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Scorptec Tempest RTX 2080 Ti</a>
              </h4>
              <h5>$3499.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

      </div>


    </div>


  </div>


</div>
</body>


    );
}

export default Store;