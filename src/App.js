import React, { Component } from 'react';
//import './assets/css/main.css'
import FeedCard from './components/FeedCard';

/*
shortUrl: <html class="gr__developers_google_com">
icon: <link rel="icon"> || <link rel="shortcut icon">// OR 直接找 favicon
description: <meta property="og:description" content="...">

來自使用者
title: 
ulr:
*/

const data = {
  user: {
    collections: [{
      id: 1,
      author: 'Mike',
      title: 'Machine Learning',
      description: 'Machine Learning',
      tags: ['technology', 'Machine Learning'],
      likes: 3,
      bookmarks: [{
          id: 2,
          title: 'ML1',
          description: 'Learn 机器学习 from 斯坦福大学. Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a ...',
          url: 'https://zh-tw.coursera.org/learn/machine-learning',
          shortUrl: 'coursera.org',
          icon: 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-120x120.png',
        },
        {
          id: 3,
          title: 'ML2',
          description: 'An intensive, practical 20-hour introduction to machine learning fundamentals, with companion TensorFlow exercises.',
          url: 'https://developers.google.com/machine-learning/crash-course/',
          shortUrl: 'developers.google.com',
          icon: 'https://developers.google.com/_static/2f77eb3e34/images/touch-icon.png',
        },
        {
          id: 4,
          title: 'ML3',
          description: 'Azure Machine Learning Studio 是共同作業式的拖放工具，可用來在雲端中快速建立預測性分析解決方案。',
          url: 'https://azure.microsoft.com/zh-tw/services/machine-learning-studio/',
          shortUrl: 'azure.microsoft',
          icon: 'https://azurecomcdn.azureedge.net/cvt-6d2ff3b933a749e26e4163722226a386ac04a90348c0323a0e519c797f246fe4/images/icon/favicon.ico'
        }]
    },{
      id: 5,
      author: 'Vivian',
      title: 'Deep Learning',
      description: 'Deep Learning',
      tags: ['technology', 'Machine Learning'],
      likes: 20,
      bookmarks: [{
        id: 6,
        title: 'ML1',
        description: 'Learn 机器学习 from 斯坦福大学. Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a ...',
        url: 'https://zh-tw.coursera.org/learn/machine-learning',
        shortUrl: 'coursera.org',
        icon: 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-120x120.png',
      },
      {
        id: 7,
        title: 'ML2',
        description: 'An intensive, practical 20-hour introduction to machine learning fundamentals, with companion TensorFlow exercises.',
        url: 'https://developers.google.com/machine-learning/crash-course/',
        shortUrl: 'developers.google.com',
        icon: 'https://developers.google.com/_static/2f77eb3e34/images/touch-icon.png',
      },
      {
        id: 8,
        title: 'ML3',
        description: 'Azure Machine Learning Studio 是共同作業式的拖放工具，可用來在雲端中快速建立預測性分析解決方案。',
        url: 'https://azure.microsoft.com/zh-tw/services/machine-learning-studio/',
        shortUrl: 'azure.microsoft',
        icon: 'https://azurecomcdn.azureedge.net/cvt-6d2ff3b933a749e26e4163722226a386ac04a90348c0323a0e519c797f246fe4/images/icon/favicon.ico'
      }]
    }]
  }
}

 class App extends Component{
   render(){
     const rtn = data.user.collections.map(collection => 
     <FeedCard card={collection} function={()=>console.log('functions')} ></FeedCard>
    )
     return (
      <div>
        {rtn}
      </div>
     )
   }
}

export default App;
