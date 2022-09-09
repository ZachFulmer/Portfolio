import React from 'react';
import resumefile from '../../assets/ZacharyFulmerResume.pdf'

function Resume()
{
    return (
        <div>
            <a href={resumefile} download>Click to download Resume</a>
            <ul>
                <li>
                    Front-End Technologies
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>BootStrap</li>
                    </ul>
                </li>
                <li>
                    Back-End Technologies
                    <ul>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>APIs</li>
                        <li>SQL, MySQL</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Resume;