import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Input, Select } from 'semantic-ui-react'

const options = [
    { key: 'v', text: 'Voter', value: 'voter' },
    { key: 'c', text: 'Candidate', value: 'candidate' },
  ]

class SignUpForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            CandidateTrue: undefined
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        //console.log(options)
        for (var i = 0; i < options.length; i++) {
            console.log(options[i])
        }
        if (options[0] === 'voter') {
            this.setState({
                CandidateTrue: true
            })
        } else {
            this.setState({
                CandidateTrue: true
            }) 
        }
    }


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
                            <Form.Field required control={Input} label='Username' placeholder='Username' />
                            <Form.Field required control={Input} label='Password' placeholder='Password' />
                            <Form.Field required control={Select} 
                                        label='Role' 
                                        options={options} 
                                        placeholder='Role' 
                                        onChange={this.handleChange}/>
                        </Form.Group>

                        { this.state.CandidateTrue && [
                        <Form.Group widths='equal' key="1">
                            <Form.Field key="2" control={Input} label='First Name' placeholder='First name' />
                            <Form.Field key="3" control={Input} label='Last Name' placeholder='Last name' />
                        </Form.Group>
                        ]
                        }

                            <Form.Field control={Button}>Submit</Form.Field>
                        </Segment>
                        
                        
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignUpForm