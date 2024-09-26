import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'hurryclear';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright = {`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'link1',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'link2',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> hurryclear</>,
          href: 'https://github.com/hurryclear',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
