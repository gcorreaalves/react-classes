import React from 'react';

import H1 from '../components/H1';
import GitHubProfile from '../components/GitHubProfile';
import GitHubRepo from '../components/GitHubRepo';

export default () => (
  <div>
    <H1>GitHub Repositories Component</H1>
    <GitHubProfile username="gcorreaalves" />
    <GitHubRepo username="gcorreaalves" />
  </div>
);
