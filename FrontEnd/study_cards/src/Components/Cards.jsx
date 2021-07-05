import React from 'react';



const Cards = (props) => {


    function displayCollection(){
        let results = (


          props.cards[0].map((item) => (
          <div className="card text-center">
              <div className="card-body text-dark">
                  <h4 className="card-title">{item.name}</h4><br />
                  <a href="#" className='btn btn-outline-primary'>See Definition</a>
              </div>
          </div>
          )))

            return results
    }



        
        

    return ( 
        <div id='cards'>
            <h1>Flash Cards</h1>
            {displayCollection()}
        </div>
     );
}
 
export default Cards;