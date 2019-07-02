import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port =  4800;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));


app.get('/',(req,res)=>{

  res.sendFile(path.join(__dirname,'../src/index.html'));

});

app.listen(port,(err)=>{
  if(err){
    console.error('Error', err);
  }else{
    open('http://localhost:'+ port);
  }

});
