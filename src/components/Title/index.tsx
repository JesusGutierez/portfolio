import React from 'react';
import PropTypes from 'prop-types';

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  return <p className="text-4xl p-5 text-center">{props.title}</p>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
