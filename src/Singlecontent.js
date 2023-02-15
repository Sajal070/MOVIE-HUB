import { Badge } from '@material-ui/core';
import React from 'react'
import {img_300, unavailable} from './config';
import './Singlecontent.css';
import {round} from 'lodash';
import ContentModel from './ContentModel';
function overallrating(vote_average){
    return round(vote_average,1)
}
function Singlecontent({id,poster,title,date,media_type,vote_average}) {
  return (
    <ContentModel media_type={media_type} id={id}>
        <Badge badgeContent={overallrating(vote_average)}color={vote_average> 6 ?'primary':"secondary"} />
        <img className='image' src={poster ?`${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title}</b>
        <div className='subs'>
        <span className='subtitle'>
            {media_type==="tv" ? "TV SERIES":"MOVIE"}
        </span>
        <span className='subtitle'>{date}</span>
        </div>
        
    </ContentModel>
  )
}

export default Singlecontent