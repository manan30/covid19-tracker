import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import useInputFocus from '../../hooks/useInputFocus';

const SearchInput = styled.input`
  height: 24px;
  width: 100%;
  margin-right: 8px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 14px;
  font-weight: bolder;

  :focus,
  :hover {
    border-bottom: 1px solid #ffffff;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0;

  margin: 16px 24px 0 0;

  height: 24px;
  width: 24px;

  color: #263238;

  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Sidebar = styled.section`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;

  height: calc(100vh - 32px);
  width: 256px;
  padding: 16px;

  background: #263238;

  overflow: none;
  overflow-y: scroll;

  svg {
    height: 24px;
    width: 24px;
    float: right;

    color: #ffffff;

    cursor: pointer;
  }
`;

function Search({ initialData }) {
  const [searchList, setSearchList] = useState(initialData);
  const [showSideBar, setShowSideBar] = useState(false);
  const { ref } = useInputFocus(showSideBar);

  return (
    <>
      {!showSideBar ? (
        <SearchIcon onClick={() => setShowSideBar(() => true)}>
          <GoSearch />
        </SearchIcon>
      ) : (
        <Sidebar>
          <SearchInput ref={ref} placeholder='Search country to view details' />
          <IoMdClose onClick={() => setShowSideBar(() => false)} />
        </Sidebar>
      )}
    </>
  );
}

Search.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.any)
};

Search.defaultProps = {
  initialData: []
};

export default Search;
