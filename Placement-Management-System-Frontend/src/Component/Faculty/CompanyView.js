// CompanyView.js

import React from 'react';
// import { useCookies } from 'react-cookie';
import Company from '../Student/Company';

function CompanyView() {
  // const [cookies] = useCookies(['user']);

  // You can access and use the 'user' cookie here as needed
  
  return (
    <div>
      <Company showApplyButton={false} />
    </div>
  )
}

export default CompanyView;
