import React, { Component } from 'react';
import '../styles/index.css';
import Head from 'next/head';

import Sidebar from '../modules/Sidebar';
import Card from '../modules/Card';
import Me from '../modules/Me';
import Tools from '../modules/Tools';
import Develop from '../modules/Develop';

export default class index extends Component {
  render() {
    return (
      <div className="flex flex-wrap">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Modak|Oswald|Raleway|Slabo+27px&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="CV Resume of Emre Saraç, Front End Developer" />
          <title>Emre Saraç- Jr. Front End Developer</title>
        </Head>
        <div className="w-full sm:w-2/2 md:w-3/3 lg:w-3/4 xl:w-5/6 px-2">
          <h1 className="w-full font-bold text-4xl mb-3 mt-3 raleway">Emre Saraç </h1>
          <Card>
            <Me />
          </Card>

          <h1 className="w-full font-bold text-2xl mb-3 mt-6 raleway">How I Develop?</h1>
          <Card>
            <Develop />
          </Card>

          <h1 className="w-full font-bold text-2xl mb-3 mt-6 raleway">Environment & Tools</h1>
          <Card>
            <Tools />
          </Card>

          <h2 className="w-full font-bold text-2xl mb-3 mt-6 raleway">Experiences </h2>
          <Card>
            <div className="px-6 pt-6">
              <div className="font-thin text-xl mb-2">Junior Frontend Developer at Wingie Enuygun Group</div>
              <div className="font-hairline text-xs text-gray-600 mb-2">[09/2019 - Present]</div>
              <p className="font-hairline text-gray-700 text-base">
                Frontend Development
              </p>
            </div>
            <div className="px-6 py-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Twig
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Scss
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Javascript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Jquery
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Bootstrap
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Gitlab
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Webpack
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Grunt
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2">
                #Git
              </span>
            </div>
          </Card>
        </div>
        <Sidebar />
        <style jsx>
          {`
            .oswald {
              font-family: 'Oswald', sans-serif;
            }
            .modak {
              font-family: 'Modak', sans-serif;
            }
            .raleway {
              font-family: 'Raleway', sans-serif;
            }
            .slabo {
              font-family: 'Slabo 27px', serif;
            }
          `}
        </style>
      </div>
    );
  }
}
