import React from 'react';
import Welcome from './Welcome';
import ProjectsSlice from './ProjectsSlice';
import Social from './Social';
import Education from './Education';

const HomePage = () => (
    <div>
        <Welcome />
        <Education />
        <ProjectsSlice />
    </div>
);

export default HomePage;