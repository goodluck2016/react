import React from 'react';
import styles from './DetailPage.module.css';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  // console.log(props.history)
  // console.log(props.location)
  // console.log(props.match)
  return (    
    <h1>DetailPage页面，路线ID：{props.match.params.touristRouteId}</h1>
  );
}