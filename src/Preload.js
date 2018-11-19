import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Spinner, Header, Container, Content } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Preload extends Component {

	static navigationOptions = {
		title:null,
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.directPages = this.directPages.bind(this);
		this.props.checkLogin();
	}

	directPages() {

		if(this.props.status == 1) {
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[
					NavigationActions.navigate({routeName:'ConfigScreenProfile'})
				]
			}));
		}else if(this.props.status == 2) {
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[
					NavigationActions.navigate({routeName:'Home'})
				]
			}));
		}
	}

	componentDidMount() {
		this.directPages();
	}

	componentDidUpdate() {
		this.directPages();
	}

	render(){
		return(
			<Container>
				<Header androidStatusBarColor="#B22222" style={styles.header} /> 
				<Content>
					<View style={styles.container}>
						<Image style={{width: 400, height: 200}}
				          source={require('./image/lookup.jpeg')}
				        />
						<Spinner color='red' /><Text style={styles.text}> Carregando...</Text>
					</View>
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#FFFFFF',
		paddingTop:100
	},
	text:{
		fontSize:20,
		backgroundColor:'transparent'
	},
  	header: { 
    backgroundColor: "#FFFFFF",

  }
});

const mapStateToProps = (state) => {
	return{
		status:state.auth.status
	};
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;