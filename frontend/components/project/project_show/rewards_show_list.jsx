import React from 'react';
import moment from 'moment';

const RewardsShowList = (props) => {
  const reward = props.reward;
  const deliveryDate = moment(reward.delivery_date).format('MM-YYYY');
  debugger
  return (
    <li key={reward.id} className="rewards-list-item">
      <div>Select this reward</div>
        <h2>Pledge ${reward.pledge_amount} or more</h2>
        <h3>{reward.title}</h3>
        <p>{reward.description}</p>
        <div className="delivery-info">
          <p>ESTIMATED DELIVERY</p>
          <p>{deliveryDate}</p>
          <p>backers</p>
        </div>
    </li>
  );
};

export default RewardsShowList;