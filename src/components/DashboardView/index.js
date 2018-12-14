import React from 'react';
import { Link } from 'react-router-dom';

import {
  Heading,
  Button
} from './style';


const Dashboard = (props) => (
  <div>
    <Heading>This is the Dashboard View for show purpose only</Heading>
    <Link to="/">
      <Button>Back to ManifestoView</Button>
    </Link>
  </div>
);

export default Dashboard;
