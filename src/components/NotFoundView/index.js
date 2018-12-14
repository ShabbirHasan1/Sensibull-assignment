import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Heading} from './style';

const NotFoundPage = () => (
  <div>
    <Heading>Error 404! Page was not found</Heading>
    <Link to="/">
      <Button>Go Back</Button>
    </Link>
  </div>
);

export default NotFoundPage;
