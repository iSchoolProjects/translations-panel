import React from 'react';
import {Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {FolderX, GlobeAmericas, Search, TextCenter, Translate} from 'react-bootstrap-icons';
import {Link, useLocation} from 'react-router-dom';

const sideList = [
  {
    name: 'Languages',
    icon: <GlobeAmericas />,
    linkTo: '/',
  },
  {
    name: 'Name spaces',
    icon: <TextCenter />,
    linkTo: '/name-spaces',
  },
  {
    name: 'Translations',
    icon: <Translate />,
    linkTo: '/translations',
  },
  {
    name: 'Disabled languages',
    icon: <FolderX />,
    linkTo: '/disabled-languages',
  },
];

const getActiveTab = (route: string) => {
  switch (route) {
    case '/name-spaces':
      return 'Name spaces';
    case '/translations':
      return 'Translations';
    case '/disabled-languages':
      return 'Disabled languages';
    default:
      return 'Languages';
  }
};

const SideBar = () => {
  const {pathname} = useLocation();
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-3">
          <Link to="/language">
            <img src="https://itmedia.io/wp-content/uploads/2020/12/logo-1.png" alt="itmedia logo" className="w-50" />
          </Link>
        </Col>
        <Col xs={12} className="mt-3">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <Search />
            </InputGroup.Text>
            <Form.Control placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        {sideList?.map((item) => {
          return (
            <Col xs={12} key={item.name} className={`side-bar-item ${getActiveTab(pathname) === item.name ? 'active-tab' : ''}`}>
              <Link to={item?.linkTo} className="side-bar-link">
                <i className="pe-2">{item.icon}</i>
                <span>{item?.name}</span>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SideBar;
