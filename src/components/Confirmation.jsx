import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
	return (
		<div>
			<p>Despite common misconception, Lucifer, Satan, and the Devil are not the same entity; this was made explicitly clear in Milton’s Paradise Lost. Milton included this specific detail into his poem because he once made a deal with Lucifer to swap his soul for the ability to write good poetry. In the end, not only did he lose his ephemeral assets, but also wrote one of the most boring poems of all time, and included this little detail so others would not make the same mistake he did.</p>
			<p>Up until 1587, the Devil has been known for charging upwards of 25% APR on buying souls. Thankfully, the selling rate remains at a steady 7% (due to inflation, it may be higher or lower, but this remains as the steady median) because of Faust’s Law; named after a man who sold his soul for eternal knowledge and was harassed by demons for the exorbitant stipulations. However, while Faust’s Law is popular among current legislators, it is not strongly enforced by the government; make sure that you have a lawyer you can trust, and read all of the fine print before signing in your own blood. You will know that something is wrong with the contract when your blood curdles, so make sure to read carefully before signing off on the transaction, otherwise your being is in great danger of being over burdened with unforeseen interest rates.</p>
			<p>Are you certain you wish to make this transaction?</p>
			<button onClick={props.onConfirmation}>CONFIRM</button>
		</div>
	);
}

Confirmation.propTypes = {
	onConfirmation: PropTypes.func
};

export default Confirmation;
