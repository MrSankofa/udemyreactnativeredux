// Import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

  return (
	<View style={viewStyle}>
		<Text style={textStyle}>
			<Text style={{ color: 'white', fontFamily: 'farah', fontWeight: 'bold' }}>
				{props.headerText}
			</Text>
		</Text>
	</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#337EC5',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 30
	}
};


// Make the component available to other parts of the App

export default Header;
