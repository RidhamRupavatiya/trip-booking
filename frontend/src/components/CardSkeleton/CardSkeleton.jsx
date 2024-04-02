import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const CardSkeleton = ({cards}) => {
  return (

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
  {Array(cards)
    .fill(0)
    .map((_, i) => (
      <div class="card" key={i} style={{ marginRight: '20px', marginBottom: '20px', width: 'calc(25% - 20px)' }}>
        <Skeleton width={310} height={220} />
        <div class="card-body">
          <h5 class="card-text">
            <Skeleton width={80} />
          </h5>
          <p class="card-title">
            <Skeleton width={220} />
          </p>
          <a href='#'><Skeleton width={170} /></a>
        </div>
      </div>
    ))}
</div>

  )
}

export default CardSkeleton
