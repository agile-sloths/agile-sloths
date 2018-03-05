import React from 'react';
import $ from 'jquery';
import { handleFollowAction } from '../../src/actions/actions.js';

import { Icon, List, Card, Grid, Header, Container, Image, Button, Input, Form } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sidebar from './Sidebar.jsx';
import TabMenu from './Tabs.jsx'

const uuidv4 = require('uuid/v4');

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			followStatus: null,
		}
		this.handleFollow = this.handleFollow.bind(this),
		this.handleUploadPhoto = this.handleUploadPhoto.bind(this)
	} 

	componentWillMount() {
		this.props.favoritesfollowers && this.props.favoritesfollowers.indexOf(`${this.props.selectedUser.user.firstname} ${this.props.selectedUser.user.lastname}`) !== -1 ?
		this.setState({followStatus: true}) : this.setState({followStatus: false});
	}

	handleFollow() {    
		// ajax post request to add to database
		$.ajax({
			type: 'POST',
			url: '/follow',
			data: JSON.stringify({voter: this.props.currentUser, candidate: this.props.selectedUser.user.id, following: this.state.followStatus}),
			contentType: 'application/json',
			success: () => {
				// change following in state to change text of follow button
				this.props.handleFollowAction(`${this.props.selectedUser.user.firstname} ${this.props.selectedUser.user.lastname}`)
				var selectedUserName = this.props.selectedUser.user.firstname + ' ' + this.props.selectedUser.user.lastname;
				if (!this.state.followStatus) {
					// toggle button
					this.setState({followStatus: true});
				} else {
					// toggle button
					this.setState({followStatus: false});
				}
			},
			error: () => {
				console.log(this.props.selectedUser);
				console.log('follow POST error');
			}
		})

	}

	handleUploadPhoto(photoUrl) {
		// needs to render input field for url and also submit button
		console.log('photo submit click');
		//post request to put url in database
		console.log(photoUrl)
		$.ajax({
			type: 'POST',
			url: '/profilepic',
			data: JSON.stringify({id: this.props.selectedUser.user.id, url: photoUrl}), // url and user id go here
			contentType: 'application/json',
			success: () => {
				// idk if it will automatically reselect the user so maybe manually add url to current user for when it rerenders
				// put url in user object?
			},
			error: () => {
				// error message
			}
		});
	}

	render() {
		const user = this.props.selectedUser.user;
		var followMessage;
		this.props.favoritesfollowers && this.props.favoritesfollowers.indexOf(`${this.props.selectedUser.user.firstname} ${this.props.selectedUser.user.lastname}`) !== -1 ?
		followMessage = 'Unfollow' : followMessage = 'Follow';
		return (
			<Container style={{paddingLeft: 210}}>
				<Grid container style={{paddingTop: 63}}>
					<Sidebar />

					<Grid.Column width={6}>
						<Grid.Row>
							<Card>
								<Image src={user.photo || 'http://lionhallattorneys.com.ng/wp-content/uploads/2015/12/empty-profile.png'}/>
								<Card.Header style={{paddingLeft: 15, paddingRight: 15, fontSize: 20, paddingTop: 10, fontWeight: 800, paddingBottom: 10}}>
									{`${user.firstname} ${user.lastname}`}
								</Card.Header>
								<Card.Meta style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 10}}>
									{user.location}
								</Card.Meta>
								<Card.Description style={{paddingLeft: 15, paddingRight: 15}}>
									{user.bio}
								</Card.Description>
								<Card.Content extra>
									{this.props.selectedUser.followers && this.props.selectedUser.followers.length ?
										this.props.selectedUser.followers.length : 0} followers
								</Card.Content>
							</Card>
						</Grid.Row>

						<Grid.Row>
							
							{ 
								this.props.currentUser === this.props.selectedUser.user.email ? 	
								(	
								<Form.Group>						
								<Form.Field style={{marginTop: 20}} control={Input} type='text' name='photoUrl' placeholder='Photo URL' /> 
					            <Form.Field style={{marginTop: 10}} control={Button}
	                            type='submit'
	                            color='green'
	                            onClick={() => {
	                                this.handleUploadPhoto(
	                                    $('input[name=photoUrl]').val(),
	                                )}}>Update profile photo</Form.Field>
	                            </Form.Group>)
								: this.props.currentUser ?
								<Button style={{marginTop: 20}} onClick={this.handleFollow}> {`${followMessage} ${this.props.selectedUser.user.firstname}`}</Button> :
								null
							}


						</Grid.Row>

					</Grid.Column>

					<Grid.Column width={10}>

						<TabMenu />

					</Grid.Column>

				</Grid>

			</Container>)

	}
}
//<Input action='Update Profile Photo' placeholder='url' style={{marginTop: 20}}></Input>


const mapStateToProps = state => ({
	selectedUser: state.data.selectedUser,
	races: state.data.races,
	events: state.data.events,
	currentUser: state.data.currentUser,
	selectedUser: state.data.selectedUser,
	favoritesfollowers: state.data.favoritesfollowers
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({handleFollowAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
