import React from 'react';
import


export default class Contact extends React.Component {

  constructor(props) {

  }

  //component가 DOM 위에 생기기 전 실행
  componentWillMount() {
    const contactData = localStorage.contactData;
    
    //만약 데이터가 존재한다면
    if(contactData) {
      this.setState({contactData: JSON.parse(contactData)}) //string형태에서 객체형으로
    }
  }

  componentDidUpdate(prevProps, prevState){
    //contact데이터가 이전 값이랑 다를 때 지금 값 저장하도록
    if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }

  //특정 키 삭제
  localStorage.removeItem('contactData');

  //전체 삭제
  localStorage.clear();
}

