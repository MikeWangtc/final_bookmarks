import React, { Component } from 'react';
//import './assets/css/main.css'
import FeedCard from './components/FeedCard';
import PublicCard from './components/PublicCard';
import { COLLECTIONSTATE } from './globalEnum';

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
    name: 'Mike',
    email: 'mikewangwebmail',
    password: '1234567',
    avatar: 'https://avatars0.githubusercontent.com/u/2501211?s=180&v=4',
    collections: [{
      id: 1,
      author: {
        name: 'Mike',
        avatar: 'https://avatars0.githubusercontent.com/u/2501211?s=180&v=4'
      },
      title: 'Machine Learning',
      description: 'Machine Learning',
      tags: ['technology', 'Machine Learning'],
      likes: 3,
      state: COLLECTIONSTATE.PUBLISHED,
      publishedTime: Date(),
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
        }],
        comments: [{
          id: 100,
          author: {
            name: 'Brian',
            avatar: 'https://avatars2.githubusercontent.com/u/32431810?s=64&v=4',
          },
          text: '做得很好',
          time: Date()
        },{
          id: 101,
          author: {
            name: 'Mario',
            avatar: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p160x160/62517604_1700088616801622_1217087950936866816_n.jpg?_nc_cat=101&_nc_oc=AQnFB4JsEni1gIkMo3gsSUQz2AQcbe2Tq0LfKRMHjSJBT0vMqTz_iNvNPdfy2TNn5SY&_nc_ht=scontent-hkg3-1.xx&oh=6fbc43014667c078920c0118da67b9fc&oe=5DBEC4A2',
          },
          text: '偶單身20年，準備邁向大法師',
          time: Date()
        },{
          id: 102,
          author: {
            name: 'Robert',
            avatar: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p160x160/12308809_1509319752701817_7588674376290445229_n.jpg?_nc_cat=109&_nc_oc=AQmJsbg3EJ1CwjDr0vJApThrV0zl_xZsS2mAbgJcns_ZHCsPz9V6hhZCeOJWCjyBRe4&_nc_ht=scontent-hkg3-1.xx&oh=c36f6a3a570718791a24c4f8f2a9f24d&oe=5D8E72AF',
          },
          text: '交往長達三年的厲害人物',
          time: Date()
        },
        ]
    },{
      id: 5,
      author:{
        name: 'Vivian',
        avatar: 'https://avatars2.githubusercontent.com/u/35629082?s=88&v=4',
      },
      title: 'Deep Learning',
      description: 'Deep Learning',
      tags: ['technology', 'Machine Learning'],
      likes: 20,
      state: COLLECTIONSTATE.PRIVATE,
      publishedTime: '',
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
     const rtnPublished = data.user.collections.filter(
      collection => collection.state === COLLECTIONSTATE.PUBLISHED)
      .map(collection => <PublicCard collection={collection}> </PublicCard>)

     const rtnFeed = data.user.collections.map(
       collection => <FeedCard collection={collection} />
     )

     return (
      <div>
        {rtnPublished}
        {rtnFeed}
      </div>
     )
   }
}

export default App;
