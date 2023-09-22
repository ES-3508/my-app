
import {useParams,link} from 'react-router-dom';
import DisableElevation from '../component/DisableElevation'
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Avatar from '@mui/material/Avatar';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
export default function Dashboard() {
  const params= useParams();
  const area={"Bed room 1":"/area/br1","Bed room 2":"/area/br2","Living room":"/area/lr","Kitchen":"/area/kt"}
  return (
    <div >
      <Box textAlign= 'center'>
         <Typography variant="h2" gutterBottom >
            Dashboard
         </Typography>

       </Box>
       <Box alignContent="center">
       <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text" size='extra-large'>
            {Object.keys(area).map((key, i) => (
            <DisableElevation text={key} link={area[key]}></DisableElevation>
          ))}

      </ButtonGroup>
       </Box>
      

      
        
    </div>
  )
}
