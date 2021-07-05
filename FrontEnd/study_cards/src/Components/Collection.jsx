import React, { Component } from 'react';



const Collection = () => {

    return ( 
        <div id='collection'>
        
            <h1>Choose a collection</h1>


            <div className="card text-center">
                <div className="card-body text-dark">
                    <h4 className="card-title">Collection 1</h4><br />
                    <a href="#" className='btn btn-outline-primary'>View Collection</a>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body text-dark">
                    <h4 className="card-title">Collection 2</h4><br />
                    <a href="#" className='btn btn-outline-primary'>View Collection</a>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body text-dark">
                    <h4 className="card-title">Collection 3</h4><br />
                    <a href="#" className='btn btn-outline-primary'>View Collection</a>
                </div>
            </div>


        </div>

        
     );
}
 
export default Collection;