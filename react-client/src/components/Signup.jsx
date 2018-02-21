import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Input, Select } from 'semantic-ui-react'

const options = [
    { key: 'v', text: 'Voter', value: 'voter' },
    { key: 'c', text: 'Candidate', value: 'candidate' },
  ]

class SignUpForm extends React.Component {


    render() {
        return (
    <div className='signup-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid
        textAlign='center'
        style = {{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 750 }}>
          <Header size='huge' style={{ fontSize: 60 }}>GRASSROOTS</Header>
          <Header as='h2' color='green' textAlign='center'>
            {' '}Sign up for an account
          </Header>
  
          <Form size='large'>
          <Segment>
            <Form.Group widths='equal'>
                <Form.Field control={Input} label='First name' placeholder='First name' />
                <Form.Field control={Input} label='Last name' placeholder='Last name' />
                <Form.Field control={Select} label='Role' options={options} placeholder='Role' />
            </Form.Group>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
        )
    }
}

export default SignUpForm