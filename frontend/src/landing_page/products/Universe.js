import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                 <h1>The Finora Universe</h1>
                 <p className='mt-2'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}} src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"38%"}} src="media/images/streakLogo.png" />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"48%"}} src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        
           <div className="col-4 p-3 mt-5">
          <img style={{width:"45%"}} src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"64%"}} src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"30%"}} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        
        <button className='btn btn-primary text center fs-5 mb-5 mt-5'  style={{ width: "20%", margin: "0 auto" }}>Sign up Now</button>

            </div>
        </div>
     );
}

export default Universe;