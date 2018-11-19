import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class Home extends Component {

	static navigationOptions = {
		title:null,
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.cadastrar = this.cadastrar.bind(this);
		this.login = this.login.bind(this);
	}

	cadastrar() {
		this.props.navigation.navigate('Cadastro');
	}

	login() {
		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<View style={styles.container}>

		        <Image style={{width: 400, height: 200}}
		          source={require('./image/lookup.jpeg')}
		        />

				<View style={styles.buttonArea}>

					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.login}>
						<Text style={styles.btnText}>Login</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.cadastrar}>
						<Text style={styles.btnText}>Cadastrar</Text>
					</TouchableHighlight>

				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#FFFFFF'
	},
	title:{
		fontSize:30,
		backgroundColor:'transparent'
	},
	buttonArea:{
		flexDirection:'row',
		marginTop:30
	},
	button:{
		backgroundColor:'#B22222',
		margin:10,
		height:40,
		width:150,
		justifyContent:'center'
	},
	btnText:{
		color:'#FFFFFF',
		textAlign:'center'
	}
});