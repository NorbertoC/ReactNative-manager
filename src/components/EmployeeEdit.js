import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>

        <EmployeeForm />

        <CardSection>
          <Button onPress={}>
            Save
          </Button>
        </CardSection>

      </Card>
    )
  }
}

export default connect(null)(EmployeeEdit);
