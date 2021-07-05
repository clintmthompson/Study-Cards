import React from 'react';



const Collection = (props) => {


    function displayCollection(){
        console.log('before')
        console.log(props.collection)
        let results = (


          props.collection[0].map((item) => (
          <div className="card text-center">
              <div className="card-body text-dark">
                  <h4 className="card-title">{item.name}</h4><br />
                  <a href="#" className='btn btn-outline-primary'>View Collection</a>
              </div>
          </div>
          )))
            console.log('after')
            console.log(props.collection)
            return results
    }



        
        

    return ( 
        <div id='collection'>
            <h1>Choose a collection</h1>
            {displayCollection()}
        </div>
     );
}
 
export default Collection;