import { Box } from '@material-ui/core'
import React from 'react'
import ChairProfile from './sections/chair-profile'
import CommunityEngagement from './sections/community-engagement'
import Consultancy from './sections/consultancy'
import CooperationWithUniversityAbroad from './sections/cooperation-with-university-abroad'
import Publication from './sections/publication'
import Research from './sections/research'
import StaffCapacityBuilding from './sections/staff-capacity-building'
import TeachingAndLearning from './sections/teaching-and-learning'
import TechnologyTransfer from './sections/technology-transfer'
import UniversityIndustryLinkage from './sections/university-industy-linkage'
const ChairForm = () => {
    return (
        <form>
            <ChairProfile/>
            <Box mt={2}/>
            <StaffCapacityBuilding/>
            <Box mt={2}/>
            <TeachingAndLearning/>
            <Box mt={2}/>
            <Research/>
            <Box mt={2}/>
            <Publication/>
            <Box mt={2}/>
            <CooperationWithUniversityAbroad/>
            <Box mt={2}/>
            <UniversityIndustryLinkage/>
            <Box mt={2}/>
            <Consultancy/>
            <Box mt={2}/>
            <TechnologyTransfer/>
            <Box mt={2}/>
            <CommunityEngagement/>
        </form>
    )
}

export default ChairForm
