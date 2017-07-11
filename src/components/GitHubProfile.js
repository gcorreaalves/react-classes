import React from 'react';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class GitHubProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/${this.props.username}`, {
      cancelToken: source.token,
    })
    .then(response => {
      this.setState({
        profile: response.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  componentWillUnmount() {
    source.cancel('Operation canceled by the user.');
  }
  render() {
    return (
      <div>
        <img
          src={this.state.profile.avatar_url}
          alt={this.state.profile.name}
          style={{
            width: 60,
            height: 60,
            borderRadius: '100%',
            display: 'inline-block',
            marginRight: 10,
            verticalAlign: 'middle' }}
        />
        <p style={{
          display: 'inline-block',
          lineHeight: '60px',
          verticalAlign: 'middle' }}
        >
          {this.state.profile.name}
        </p>
      </div>
    );
  }
}

export default GitHubProfile;
