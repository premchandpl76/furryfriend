import React from 'react';

export default  ({imageUrl, pictureId})=>(
  <div className="card dog-card">
    <div className="card-image">
      <figure className="image" style={{backgroundImage:`url(${imageUrl})`}}>
        <img src={imageUrl} alt={`A nice dog`} className="is-sr-only"/>
      </figure>      
    </div>
    <div className='card-content'>
      <div className='content'>
        <strong>Picture Id:</strong>{pictureId}
      </div>
    </div>
  </div>
)