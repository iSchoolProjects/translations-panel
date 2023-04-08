import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import Icon from '../../../components/icon/Icon';

const HomePageTable = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card className="card-bordered card-stretch">
          <div className="card-inner p-0">
            <table className="table table-tranx">
              <thead>
                <tr className="tb-tnx-head">
                  <th className="tb-tnx-id">
                    <span>#</span>
                  </th>
                  <th className="tb-tnx-id text-center">
                    <span>Missing</span>
                  </th>
                  <th className="tb-tnx-id">
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((e, i) => (
                  <tr key={i}>
                    <td>English USA</td>
                    <td className="text-center">
                      {(i + 1) * 12}/{(i + 1) * 15}
                    </td>
                    <td className="tb-tnx-action">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
                          <Icon name="more-h"></Icon>
                        </DropdownToggle>
                        <DropdownMenu>
                          <ul className="link-list-plain">
                            <li onClick={() => {}}>
                              <DropdownItem tag="a" href="#view">
                                View
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#disable">
                                Disable
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#edit">
                                Edit
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default HomePageTable;
