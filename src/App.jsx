import notions from './images/notions.gif';
import todoList from './images/filterable-todo-list.gif';
import lamoda from './images/lamoda.gif';
import albums from './images/albums.gif';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <section className='grid grid-cols-1 gap-8 xl:grid-cols-[2fr_5fr] text-2xl'>
      {/* Left side */}
      <section className='hidden xl:block bg-[#1f1e1e] text-white px-8 py-16'>
        <div className='mb-8 text-3xl'>
          <h1 className='border-b-2 border-white text-4xl mb-4'>Contact</h1>
          <div className='ml-6'>
            {/* GitHub */}
            <a
              href='https://github.com/sssBless'
              target='_blank'
              className='underline text-gray-300'
            >
              GitHub
            </a>
          </div>
          <div className='ml-6'>
            <a
              href='https://t.me/meowups'
              target='_blank'
              className='underline text-gray-300'
            >
              Telegram
            </a>
          </div>
        </div>
        <div className='text-3xl'>
          {/* Skills */}
          <h1 className='border-b-2 border-white text-4xl mb-4'>Skills</h1>
          <div className='pb-4'>
            <h4>#Programming languages</h4>
            <div className='ml-8'>
              <p>C++</p>
            </div>
            <div className='ml-8'>
              <p>JavaScript</p>
            </div>
          </div>
          <div className='pb-4'>
            <h4>#Frameworks</h4>
            <div className='ml-8'>
              <p>React</p>
            </div>
            <div className='ml-8'>
              <p>Tailwind</p>
            </div>
          </div>
          <div className='pb-4'>
            <h4>#Data Bases</h4>
            <div className='ml-8'>
              <p>MySQL</p>
            </div>
          </div>
          <div>
            <h4>#Other</h4>
            <div className='ml-8'>
              <p>HTML</p>
            </div>
            <div className='ml-8'>
              <p>CSS</p>
            </div>
            <div className='ml-8'>
              <p>Adobe Illustrator</p>
            </div>
            <div className='ml-8'>
              <p>Blender</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Left Side */}

      {/* Start Right Side */}
      <section className='p-8'>
        <div>
          <h1 className='text-center font-bold text-5xl mb-4'>
            MICHAEL KRASNOV
          </h1>
          <p className='text-center text-3xl mb-8'>
            Front End Juniour Developer
          </p>
        </div>

        {/*List of Contact start*/}
        <div className='xl:hidden bg-[#1f1e1e] text-white rounded mb-1'>
          <Accordion allowMultiple p={'1rem'}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={'1.875rem'}
                  >
                    Contact
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={'1vw'} pt={'1vw'} pl={'2vw'}>
                <div>
                  <p className='m-1'>
                    <a
                      href='https://github.com/sssBless'
                      target='_blank'
                      className='underline text-gray-300'
                    >
                      GitHub
                    </a>
                  </p>
                  <p className='m-1'>
                    <a
                      href='https://t.me/meowups'
                      target='_blank'
                      className='underline text-gray-300'
                    >
                      Telegram
                    </a>
                  </p>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/*List of Contact end*/}

        {/* list of Skills start*/}
        <div className='xl:hidden bg-[#1f1e1e] text-white rounded mb-8'>
          <Accordion allowMultiple p={'1rem'}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={'1.875rem'}
                  >
                    Skills
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={'1vw'} pt={'1vw'} pl={'2vw'}>
                <div>
                  <p className='m-1'>C++</p>
                  <p className='m-1'>JavaScript</p>
                  <p className='m-1'>React</p>
                  <p className='m-1'>Tailwind</p>
                  <p className='m-1'>MySQL</p>
                  <p className='m-1'>HTML</p>
                  <p className='m-1'>CSS</p>
                  <p className='m-1'>Adobe Illustrator</p>
                  <p className='m-1'>Blender</p>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/*List of Skills end*/}
        <div className='mb-8'>
          {/* Summary */}
          <h1 className='text-3xl font-medium mb-2'>Summary</h1>
          <p>
            An aspiring programmer looking to hone their skills through hands-on
            learning and development. Familiar with mobile and desktop
            development environments. Able to utilize HTML5, JavaScript, and
            other programming languages to create clean code. A well-organized
            and collaborative team player with strong communication and
            analytical skills.
          </p>
        </div>
        <div className='mb-8'>
          {/* Education */}
          <h1 className='text-3xl font-medium mb-2'>Education</h1>
          <ul className='list-disc px-6'>
            <li>
              Sep. 2022 - Present: BSU, Student at Mechanic and Mathematic
              Faculty
            </li>
            <li>English proficiency: B1</li>
          </ul>
        </div>
        <div className='mb-8'>
          {/* Projects */}
          <h1 className='text-3xl font-medium mb-12'>Projects</h1>
          <ul>
            <li className='2xl:grid 2xl:grid-cols-[1fr_5fr] items-center mb-6'>
              <img
                src={notions}
                alt='project'
                className='w-full border-gray-500 border-[0.1vw] mb-6 2xl:mb-0 rounded h-34'
              />
              <span className='2xl:ml-2'>
                <a
                  href='https://github.com/sssBless/notions-redux'
                  target='_blank'
                  className=' text-blue-700 text-4xl lg:text-3xl'
                >
                  Notions
                </a>
                <p className='py-2'>
                  The project is a convenient web application in minimalistic
                  design for creating (editing) and storing notes. The project
                  was created using such technologies as: React, Redux, Vite,
                  Json-Server, Tailwind, crypto-js.
                </p>
              </span>
            </li>
            <li className='2xl:grid 2xl:grid-cols-[1fr_5fr] items-center mb-6'>
              <img
                src={todoList}
                alt='project'
                className='w-full border-gray-500 border-[0.1vw] mb-6 2xl:mb-0 rounded h-34'
              />
              <span className='2xl:ml-2'>
                <a
                  href='https://github.com/sssBless/filtrable-todo-list'
                  target='_blank'
                  className='text-blue-700 text-4xl lg:text-3xl'
                >
                  Filtrable TodoList
                </a>
                <p className='py-2'>
                  The app is a minimalistic application for creating and easily
                  maintaining a to-do list. My app is a simple and convenient
                  tool for increasing productivity and organizing time. Core
                  technologies: React.
                </p>
              </span>
            </li>
            <li className='2xl:grid 2xl:grid-cols-[1fr_5fr] items-center lg:mb-6'>
              <img
                src={lamoda}
                alt='project'
                className='w-full border-gray-500 border-[0.1vw] mb-6 2xl:mb-0 rounded h-34'
              />
              <span className='2xl:ml-2'>
                <a
                  href='https://github.com/sssBless/things-market'
                  target='_blank'
                  className='text-blue-700 text-4xl lg:text-3xl'
                >
                  Lamoda
                </a>
                <p className='py-2'>
                  The Lamoda web application is an online platform where users
                  can find and buy clothes and accessories. It has a clear
                  interface for searching and selecting products, and allows you
                  to use a convenient search and filtering system. The Lamoda
                  web app is a great way to shop for clothes online. Main
                  technologies: React, css.module.
                </p>
              </span>
            </li>
            <li className='2xl:grid 2xl:grid-cols-[1fr_5fr] items-center mb-6'>
              <img
                src={albums}
                alt='project'
                className='w-full border-gray-500 border-[0.1vw] mb-6 2xl:mb-0 rounded h-34'
              />
              <span className='2xl:ml-2'>
                <a
                  href='https://github.com/sssBless/users-albums'
                  target='_blank'
                  className=' text-blue-700 text-4xl lg:text-3xl'
                >
                  User albums
                </a>
                <p className='py-2'>
                  The Albums Project - is a repository of linked album and user
                  pages, as well as all albums. Each user can view their albums,
                  as well as go to the album creator's page. Core technologies:
                  React, Json placeholder
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div>
          {/* Cover letter */}
          <h1 className='text-3xl font-medium mb-2'>Cover letter</h1>
          <p>
            I am interested in the position of Front End Web/Back End Developer
            in your company. With my experience in the industry, I am confident
            that I have the necessary skills and qualifications to be a
            successful addition to your team. My experience includes web
            application development, creating user interfaces and coding with
            HTML, CSS and JavaScript. I also have experience with the latest web
            technologies and frameworks such as React. I am fairly organized and
            have a track record of meeting deadlines and delivering projects on
            time. Most importantly, I am passionate about web development and
            strive to stay up to date with the latest trends and technologies. I
            am confident that I can add value to your company and would be happy
            to discuss my qualifications and experience in more detail. I have
            attached my resume for review and look forward to hearing from you.
          </p>
        </div>
      </section>
      {/* End rigth side */}
    </section>
  );
}

export default App;
