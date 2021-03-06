import React from 'react';
import moment from 'moment';

const RewardInfo = (props) => {

  const deleteReward = () => {
    props.deleteReward(props.reward.id)
  }

  const date = moment(props.reward.delivery_date).format('MM-YYYY');
  return (
    <li className="current-rewards">
        <section className="reward-number">
          <label>Reward #{props.number + 1}</label>
        </section>
        <section className="current-reward-info">
          <img onClick={deleteReward} src="https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/close-browser.png" />
          <h3>Pledge ${props.reward.pledge_amount} or more</h3>
          <h4>{props.reward.title}</h4>
          <p>{props.reward.description}</p>
          <p>ESTIMATED DELIVERY</p>
          <h5>{date}</h5>
        </section>
    </li>
  );
};

export default RewardInfo;
