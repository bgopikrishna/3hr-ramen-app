import React from 'react';
import './Card.scss';

const Card = ({ restaurant }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <h3>{restaurant['Brand']}</h3>
      </div>

      <div className='card__content'>
        <div className='card__content_item'>
          <p>
            <strong>Ramen Variety:&nbsp;</strong>
            {restaurant['Variety']}
          </p>
        </div>
        <div className='card__content_item'>
          <p>
            <strong>Style:&nbsp;</strong>
            {restaurant['Style']}
          </p>
        </div>
        <div className='card__content_item'>
          <p>
            <strong>Ramen Country:&nbsp;</strong>
            {restaurant['Country']}
          </p>
        </div>
        <div className='card__content_item'>
          <p>
            <strong>Rating:&nbsp;</strong>
            {restaurant['Stars'] !== 'NaN'
              ? `${restaurant['Stars'] / 5} ⭐`
              : '-'}
          </p>
        </div>
        <div className='card__content_item'>
          <p>
            <strong>Ranking :&nbsp;</strong>
            {restaurant['Top Ten'] !== 'NaN'
              ? ` ${restaurant['Top Ten'].split(' ')[1]} in ${
                  restaurant['Top Ten'].split(' ')[0]
                } `
              : '-'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
