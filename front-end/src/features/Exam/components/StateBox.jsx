import React from 'react';
import AnswerBox from './AnswerBox';

function StateBox({ answers }) {
	return (
		<div className="">
			<div className="grid grid-flow-row grid-cols-5 gap-3 p-2">
				{answers?.map((value, index) => (
					<AnswerBox key={index} question={index + 1} answer={value} />
				))}
			</div>
		</div>
	);
}

export default StateBox;
