import React from 'react';
import DesignHero from '../components/design/DesignHero';
import DesignAbout from '../components/design/DesignAbout';
import CaseStudies from '../components/design/CaseStudies';
import Process from '../components/design/Process';
import DesignSkills from '../components/design/DesignSkills';
import EngineeringHandoff from '../components/design/EngineeringHandoff';
import DesignContact from '../components/design/DesignContact';

const DesignHome = () => {
    return (
        <main>
            <DesignHero />
            <DesignAbout />
            <CaseStudies />
            <Process />
            <DesignSkills />
            <DesignContact />
            <EngineeringHandoff />
        </main>
    );
};

export default DesignHome;
