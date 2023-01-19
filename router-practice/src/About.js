import React from 'react';
import qs from 'qs';

function About({ location}) {
  console.log(location);
  const query = qs.parse(location.search, {ignoreQueryPrefix: true});
  console.log(query)

  const detail = query.detail === 'true';


  return (
    <div>
      <h1>소개</h1>
      <p> 라우터 기초 예제</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  )
}

export default About;