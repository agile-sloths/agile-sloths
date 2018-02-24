import React from 'react';
import login from '../../src/actions/actions.js'; // import action
import { connect } from 'react-redux'; // used to connect "smart" components with actions
import { bindActionCreators } from 'redux'; // allows you to bind actions to methods
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import $ from 'jquery';


        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Email'
              type='email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button
              onClick={() => {
                props.login($('input[type=email]').val(), $('input[type=password]').val());  {/* call action which is on props */}
              }}
              color='green'
              fluid size='large'
            >
            Login
          </Button>
          </Segment>
        </Form>
        <Message>
          New to Grassroots?  <a href='#'>Sign up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

const mapDispatchToProps = (dispatch) => { // takes dispatch method from store
  return bindActionCreators({login}, dispatch); // attaches dispatch to login action so that
}                                       //  when it fires, it dispatches an action

export default connect(null, mapDispatchToProps)(LoginForm); // how you connect a "smart" component to props
