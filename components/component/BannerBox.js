import React from 'react';
import styles from '../../styles/Home.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'





function BannerBox() {
    
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

    return (
        <Grid container className={styles.MainBannerBox} > 
            <Grid md={3} className={styles.BannerBox}>
            <Card 
                className={styles.CardIndex}
                >
            <CardContent>
            <Typography 
            fontSize={14}
            textAlign="left"
            className={styles.Typography}>Electronics</Typography>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" alt="" className={styles.productImg} />

            </CardContent>
            <CardActions className={styles.indexproduct}> 
         
               <Button   
               href='/Store' 

                textAlign="right"
               >Explore More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={3} className={styles.BannerBox}>
            <Card >
            <CardContent>
            <Typography 
            fontSize={14}

            textAlign="left"
            className={styles.Typography}>Dresses</Typography>
            <img  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg" alt="" className={styles.productImg} />

            </CardContent>
            <CardActions className={styles.indexproduct}> 
         
               <Button  
               href='/Store' 

                textAlign="right"
               >Explore More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={3} className={styles.BannerBox}>
            <Card >
            <CardContent>
            <Typography 
            fontSize={14}

            textAlign="left"
            className={styles.Typography}>Beauty picks</Typography>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt="" className={styles.productImg} />

            </CardContent>
            <CardActions className={styles.indexproduct}> 
         
               <Button   
               href='/Store' 

                textAlign="right"
               >Explore More</Button>
            </CardActions>
          </Card>
            </Grid>
            <Grid md={3} className={styles.BannerBox}>
            <Card >
            <CardContent>
            <Typography 
            fontSize={14}

            textAlign="left"
            className={styles.Typography}>Easy returns
            </Typography>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" className={styles.productImg} />

            </CardContent>
            <CardActions className={styles.indexproduct}> 
         
               <Button  
               href='/Store' 
                textAlign="right"
               >Explore More</Button>
            </CardActions>
          </Card>
            </Grid>
        </Grid>
        
    )
}

export default BannerBox;
