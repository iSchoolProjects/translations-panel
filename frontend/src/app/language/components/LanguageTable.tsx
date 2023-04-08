import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import Icon from '../../../components/icon/Icon';
import {languageApi} from '../../../api';
import {ILanguage} from '../interfaces/ILanguage';

const LanguageTable = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<ILanguage[]>([]);
  useEffect(() => {
    const getListOfLanguages = async () => {
      const {data} = await languageApi.getAllLanguages();
      setSelectedLanguages(data);
    };

    getListOfLanguages();
  }, []);
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
                    <span>Completed</span>
                  </th>
                  <th className="tb-tnx-id">
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!!selectedLanguages?.length ? (
                  selectedLanguages?.map((language) => (
                    <tr key={language?.id}>
                      <td>{language?.name}</td>
                      <td className="text-center">
                        {language?.namespace?.length}/{language?.namespace?.length}
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
                                <DropdownItem tag="a" href={`#${!language?.disabled ? 'disabled' : 'enable'}`}>
                                  {!language?.disabled ? 'Disabled' : 'Enable'}
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
                  ))
                ) : (
                  <tr>
                    <td>-</td>
                    <td className="text-center">-</td>
                    <td>-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default LanguageTable;
