import React from 'react';
import axios from 'axios';

class GitHubRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/${this.props.username}/repos`)
    .then((response) => {
      this.setState({
        repos: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return <ul style={{ marginTop: 0, marginLeft: 30 }}>
      {this.state.repos.map(
        repo => <li key={repo.id} style={{listStyle: 'none', lineHeight: '25px' }}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      )}
    </ul>;
  }
}

export default GitHubRepo;
