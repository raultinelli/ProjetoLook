import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editSenha, editNome, cadastrar } from './actions/AuthActions';

export class Cadastro extends Component {

	static navigationOptions = {
		title:"Cadastro"
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
				<Text>Nome:</Text>
				<TextInput value={this.props.nome} style={styles.input} onChangeText={(txt)=>this.props.editNome(txt)} />

				<Text>E-mail:</Text>
				<TextInput value={this.props.email} style={styles.input} onChangeText={(txt)=>this.props.editEmail(txt)} />

				<Text>Senha:</Text>
				<TextInput value={this.props.senha} secureTextEntry={true} style={styles.input} onChangeText={(txt)=>this.props.editSenha(txt)} />

				<Button title="Cadastrar" onPress={()=>{ this.props.cadastrar(this.props.nome, this.props.email, this.props.senha) }} />
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
		nome:state.auth.nome,
		email:state.auth.email,
		senha:state.auth.senha,
		status:state.auth.status
	};
};

const CadastroConnect = connect(mapStateToProps, { editEmail, editSenha, editNome, cadastrar })(Cadastro);
export default CadastroConnect;




