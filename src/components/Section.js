import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './App.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
