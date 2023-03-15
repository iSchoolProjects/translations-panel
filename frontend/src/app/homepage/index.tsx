import React from 'react';
import {BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle} from '../../components/block/Block';
import Content from '../../components/layout/content/Content';

const HomePage = () => {
  return (
    <>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Translation Dashboard</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Translation panel</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </>
  );
};

export default HomePage;
