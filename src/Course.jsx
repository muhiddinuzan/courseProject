import ReactJS from 'react'
import CCSharp from './img/ccsharp.png';
import Angular from './img/angular.jpg';
import Bootstrap from './img/bootstrap5.png';
import FullStack from './img/kompleweb.jpg';

export const Course = (props) => {
  const { title, description, head} = props;
  const courseMap = {
    Angular: Angular,
    FullStack: FullStack,
    CCSharp: CCSharp,
    Bootstrap: Bootstrap
  };
  return (
    <div>
      <h1>{head}</h1>
      <div>{title}</div>
      <div>{description}</div>
      <img src={courseMap[title]} alt="" />
    </div>

  )
}
