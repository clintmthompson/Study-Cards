import React from 'react';



const Cards = (props) => {


    function displayCollection(){
        console.log(props.cards[0][0].word)
        let results = (


          props.cards.map((item) => (
          <div className="card text-center">
              <div className="card-body text-dark">
                  <p className="card-title">{item[0].word}</p><br />
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