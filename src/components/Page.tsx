
import React from 'react';
import { Helmet } from 'react-helmet';

interface PageProps {
  children: any;
  title: string;
  className?: string;
};

const Page = ({children, title = '', ...rest}: PageProps ): JSX.Element => {
  return (
    <div
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default Page;