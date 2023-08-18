import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const EmptyResponse = (
  <div>
    <table>
      <tbody>
        <tr>
          <td>Status</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Body</td>
          <td colSpan='2'>N/A</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default class Response extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.response) {
      return EmptyResponse;
    }

    if (
      this.props.response.status === 404 ||
      this.props.response.status === 400
    ) {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Status</td>
                <td>{this.props.response.status}</td>
                <td>{this.props.response.message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (this.props.response.status === 200) {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Status</td>
                <td>{this.props.response.status}</td>
                <td>{this.props.response.message}</td>
              </tr>
            </tbody>
          </table>
          <FormGroup>
            <FormLabel>Response Body</FormLabel>
            <FormControl
              componentClass='textarea'
              value={this.props.response.body}
              placeholder='textarea'
            />
          </FormGroup>
        </div>
      );
    }
  }
}

Response.propTypes = {
  response: PropTypes.object
};
