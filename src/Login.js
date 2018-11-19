import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editSenha, logar } from './actions/AuthActions';

export class Login extends Component {

	static navigationOptions = {
		title:"Login"
	}

	constructor(props) {
		super(props);
		this.state = {};

	}

	componentDidUpdate() {
		if(this.props.status == 1) {
			Keyboard.dismiss();
			this.props.navigation.navigate('ConfigScreenProfile');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>E-mail:</Text>
				<TextInput value={this.props.email} style={styles.input} onChangeText={(txt)=>this.props.editEmail(txt)} />

				<Text>Senha:</Text>
				<TextInput value={this.props.senha} secureTextEntry={true} style={styles.input} onChangeText={(pass)=>this.props.editSenha(pass)} />

				<Button title="Entrar" onPress={()=>{ this.props.logar(this.props.email, this.props.senha) }} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10
	},
	input:{
		height:40,
		backgroundColor:'#CCCCCC',
		padding:5,
		marginBottom:10
	}
});


const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		email:state.auth.email,
		senha:state.auth.senha,
		status:state.auth.status
	};
};

const LoginConnect = connect(mapStateToProps, { editEmail, editSenha, logar })(Login);
export default LoginConnect;








