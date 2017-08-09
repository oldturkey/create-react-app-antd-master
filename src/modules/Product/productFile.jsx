import React from 'react';



export default class Content extends React.Component {
	render() {
		return (
			<div className='hotpot'>
				{this.props.match.params.id}
			</div>
			)
	}
}