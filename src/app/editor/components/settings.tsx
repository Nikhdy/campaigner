import * as React from 'react';
import {tagSettings} from './tools';
const {Fragment} = React;
export const Settings =  () => {

  return   <Fragment>
      {tagSettings.map(setting=> <div className='flex-100'>
          {setting.name}
          <hr/>
          
      </div>)}
  </Fragment>
}