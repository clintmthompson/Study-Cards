import React from 'react';




const Collection = (props) => {


    function displayCollection(){
        let results = (
            

          props.collection[0].map((item, index) => (
          <div key={item+index} className="card text-center">
              <div className="card-body text-dark">
                  <h4 className="card-title">{item.name}</h4><br />
                  <button type='button' onClick={(event) => props.handleSubmit(event, item.id)} className='btn btn-outline-primary'>View Collection</button>
              </div>
          </div>
          )))
            return results
    }


    return ( 
        <div id='collection'>
            <h1>Select a Collection Below:</h1>
            {displayCollection()}
        </div>
     );
}
 
export default Collection;