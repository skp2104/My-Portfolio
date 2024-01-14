import React from 'react';
import '../Education/Education.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';

const Education = () => {
  return (
    <>
      <div className='education-section page-width' id='Education'>
        <div className='education-intro'>
          <h1>Education</h1>
          <hr />
        </div>
        <div className='education-container'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#fcba03', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #eb3440',
              }}
              date='2015 - 2019'
              iconStyle={{ background: '#eb3440', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                B.Tech. ECE (MAKAUT)
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Narula Institute of Technology
              </h4>
              <p>Kolkata, West Bengal</p>
              <p>Grade: 8.46 CGPA</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#fcba03', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #eb3440',
              }}
              date='2013 - 2015'
              iconStyle={{ background: '#eb3440', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                Higher Secondary (ISCE)
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Douglas Memorial H.S. School
              </h4>
              <p>West Bengal</p>
              <p>Percentage: 81.2%</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#fcba03', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #eb3440',
              }}
              date='2011 - 2013'
              iconStyle={{ background: '#eb3440', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                Secondary (ICSE)
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Jogamaya Memorial Institute
              </h4>
              <p>West Bengal</p>
              <p>Percentage: 81.2%</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
