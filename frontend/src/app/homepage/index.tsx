import React, {useState} from 'react';
import {Block, BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle} from '../../components/block/Block';
import Content from '../../components/layout/content/Content';
import HomePageTable from './components/HomePageTable';
import {Button} from 'reactstrap';
import CustomModal from '../../components/modal/CustomModal';
import HomePageForm from './components/HomePageForm';

const HomePage = () => {
  const [isCreateOpened, setIsCreateOpened] = useState(false);
  return (
    <>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent className="w-100">
              <div className="d-flex align-items-center justify-content-between my-2">
                <div className="form-control-wrap">
                  <div className="form-icon form-icon-left">
                    <em className="icon ni ni-search"></em>
                  </div>
                  <input type="text" className="form-control" placeholder="Search by value" />
                </div>
                <Button variant="primary" onClick={() => setIsCreateOpened(true)}>
                  Add new language
                </Button>
              </div>
              <BlockTitle page>Welcome, Zlaja</BlockTitle>
              <BlockDes className="text-soft">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, mollitia?</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <HomePageTable />
        </Block>
      </Content>
      <CustomModal
        isModalOpened={isCreateOpened}
        setIsModalOpened={setIsCreateOpened}
        body={<HomePageForm />}
        title="Create new language"
        saveHandler={() => setIsCreateOpened(false)}
      />
    </>
  );
};

export default HomePage;
