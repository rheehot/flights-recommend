import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const PlanPage = ({ history }) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Home</Link>
      <Title label="Plan" />
    </div>
  );
};

export default PlanPage;
