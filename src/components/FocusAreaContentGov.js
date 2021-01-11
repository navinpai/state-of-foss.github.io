import React from 'react';
import '../styles/FocusAreaContent.css';
import Folder from './Folder';
import FossGovData from '../../static/data/foss_gov.json';
import Card from './Card';

const FocusAreaContentGov = () => {
  const [value, setValue] = React.useState(0);
  const { id, box } = FossGovData[value];

  return (
    <>
      <div className={'column-wrapper-focus-area'}>
        <div className={'column-container-focus-area'}>
          <p className={'left'}>
            <span>
              Help governments work with more FOSS entrepreneurs companies to
              deliver on FOSS-led initiatives,
            </span>
            giving more control and ownership to the state and reducing vendor
            lock-ins.
          </p>
          {/* <div onClick={() => setValue(0)} className={'folder-1'}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>outreachey</p>
              </div>
            </Folder>
          </div> */}
          {/* <div className={'window-card'}>
            <Card background_color="#01BCD5">{box}</Card>
          </div> */}
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'middle'}>
            <span>
            Build community-facing government teams on national and regional levels, 
            </span>
            that work dedicatedly on FOSS and work to increase their capacity and bandwidth over time through supported training and learning camps. Organize timely FOSS fellowships to attract more talent to this program on existing and upcoming digital transformation initiatives.

          </p>
          <div onClick={() => setValue(1)} className={'folder-2'}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>Spoken Tutorial</p>
              </div>
            </Folder>
          </div>
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'right'}>
            <span>Work closely with communities to enable co-creation of FOSS-driven public digital ecosystem </span> .
            to build robust policies and infrastructure around key building blocks like core interoperable open-source GovTech applications, open standards, digital policies and practices.

          </p>
          <div className={'folder-3'} onClick={() => setValue(2)}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>FOSSEE</p>
              </div>
            </Folder>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusAreaContentGov;
