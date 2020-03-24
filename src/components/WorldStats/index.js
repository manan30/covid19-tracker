import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  width: 256px;
  padding: 16px;
  margin: 0 0 16px 16px;

  background: #ffffff;
  box-shadow: 0px 2px 4px #d7d9df;
  border-radius: 16px;
`;

const Text = styled.div`
  margin-bottom: 8px;

  font-size: ${props => props.size || '14px'};
  color: ${props => props.color && props.color};

  :last-child {
    margin: 0;
  }
`;

function formatDate(data) {
  const dateParts = Date(data)
    .toString()
    .split(' ');

  let newDate = '';

  for (let i = 0; i < 5; i += 1) {
    newDate = newDate.concat(`${dateParts[i]} `);
  }

  return newDate;
}

function GlobalStats({ stats }) {
  return (
    <Container>
      <h3 style={{ margin: 0, marginBottom: '8px' }}>Global Stats</h3>
      <Text color='#4f5d75'>Cases: {stats.cases}</Text>
      <Text color='#0087d4'>Recovered: {stats.recovered}</Text>
      <Text color='#f1173f'>Deaths: {stats.deaths}</Text>
      <Text size='10px'>Last Updated On: {formatDate(stats.updated)}</Text>
    </Container>
  );
}

GlobalStats.propTypes = {
  stats: PropTypes.shape({
    cases: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    updated: PropTypes.number
  })
};

GlobalStats.defaultProps = {
  stats: {}
};

export default React.memo(GlobalStats);
