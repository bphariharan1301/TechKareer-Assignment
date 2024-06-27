import React from "react";
import '../tabs/Tabs.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import JobPreview from "./JobPreview/JobPreview";
import SidePanel from "../sidePanel/SidePanel";

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Job Preview" value="1" className='text1' />
            <Tab label="Application" value="2" className='text2' />
            <Tab label="Match" value="3" className='text2' />
            <Tab label="Messages" value="4" className='text2' />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <JobPreview />
            <SidePanel />
          </Box>
        </TabPanel>
        <TabPanel value="2">Application Content</TabPanel>
        <TabPanel value="3">Match Content</TabPanel>
        <TabPanel value="4">Messages Content</TabPanel>
      </TabContext>
    </Box>
  );
}
