import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './views/home/home';
import About from './views/about/about';
import Services from './views/services/services';
import TrainingServices from './views/trainingServices/trainingServices';
import NABETSector from './views/nabetSector/nabetSector';
import AccreditationAwards from './views/accreditationAwards/accreditationAwards';
import PressCoverage from './views/pressCoverage/pressCoverage';
import Contact from './views/contact/contact';
import Laboratory from './views/laboratory/laboratory';
import GroupVocationalTraining from './views/trainingServices/groupVocational/groupVocational';
import ResearchTraining from './views/trainingServices/researchTraining/researchTraining';
import EnivronmentConsulting from './views/services/environmentConsulting/enivronmentConsulting';
import EnivronmentMonitoring from './views/services/environmentMonitoring/environmentMonitoring';
import ForestryServices from './views/services/forestryServices/forestryServices';
import MiningServices from './views/services/miningServices/miningServices';
import EnivronmentSiteAssignment from './views/services/environmentConsulting/environmentSiteAssignment/environmentSiteAssignment';
import EnivronmentAudit from './views/services/environmentConsulting/environmentAudit/environmentAudit';
import EnivronmentImpactAssignment from './views/services/environmentConsulting/environmentImpactAssignment/environmentImpactAssessment';
import EnivronmentClearance from './views/services/environmentConsulting/environmentClearnce/environmentClearnce';
import EnivronmentHealth from './views/services/environmentConsulting/environmentHealth/environmentHealth';
import AirMonitoring from './views/services/environmentMonitoring/airMonitoring/airMonitoring';
import WaterMonitoring from './views/services/environmentMonitoring/waterMonitoring/waterMonitoring';
import NoiseMonitoring from './views/services/environmentMonitoring/noiseMonitoring/noiseMonitoring';
import SoilMonitoring from './views/services/environmentMonitoring/soilMonitoring/soilMonitoring';
import LuxMonitoring from './views/services/environmentMonitoring/luxMonitoring/luxMonitoring';
import HazardousMonitoring from './views/services/environmentMonitoring/hazardousMonitoring/hazardousMonitoring';
import AmbientAirMonitoring from './views/services/environmentMonitoring/airMonitoring/ambientAirMonitoring/ambientAirMonitoring';
import IndoorAirMonitoring from './views/services/environmentMonitoring/airMonitoring/indoreAirMonitoring/indoreAirMonitoring';
import StackAirMonitoring from './views/services/environmentMonitoring/airMonitoring/stackAirMonitoring/stackAirMonitoring';
import FugitiveAirMonitoring from './views/services/environmentMonitoring/airMonitoring/fugitiveAirMonitoring/fugitiveAirMonitoring';
import MineFeasibility from './views/services/miningServices/mineFeasibilityStudy/mineFeasibilityStudy';
import GeologyMineral from './views/services/miningServices/geologyMineral/geologyMineral';
import MiningPlan from './views/services/miningServices/miningPlan/miningPlan';
import MineAudit from './views/services/miningServices/mineAudit/mineAudit';
import PlanningImplementation from './views/services/miningServices/planningImplementation/planningImplementation';
import MineDigitization from './views/services/miningServices/mineDigitization/mineDigitization';
import Surveying from './views/services/miningServices/surveying/surveying';
import ForestClearance from './views/services/forestryServices/forestClearance/forestClearance';
import LandUseCover from './views/services/forestryServices/landUseCover/landUseCover';
import ReclamationAfforestation from './views/services/forestryServices/reclamationAfforestation/reclamationAfforestation';
import RemoteSensing from './views/services/forestryServices/remoteSensing/remoteSensing';
import ThematicMapping from './views/services/forestryServices/thematicMapping/thematicMapping';
import HydrologicalStudy from './views/services/forestryServices/hydrologicalStudy/hydrologicalStudy';
import WaterTesting from './views/laboratory/waterTesting/waterTesting';
import SoilTesting from './views/laboratory/soilTesting/soilTesting';
import AsbestosTesting from './views/laboratory/asbestosTesting/asbestosTesting';
import OresandMinerals from './views/laboratory/oresandMinerals/oresandMinerals';
import CokeandCoal from './views/laboratory/cokeandCoal/cokeandCoal';
import MiningOfMinerals from './views/nabetSector/miningOfMinerals/miningOfMinerals';
import ThermalPowerPlants from './views/nabetSector/thermalPowerPlants/thermalPowerPlants';
import AsbestosMiningAsbestosBasedProducts from './views/nabetSector/asbestosBasedProducts/asbestosBasedProducts';
import MetallurgicalIndustries from './views/nabetSector/metallurgicalIndustries/metallurgicalIndustries';
import MineralBenefication from './views/nabetSector/mineralBenefication/mineralBenefication';
import CementPlants from './views/nabetSector/cementPlants/cementPlants';
import SugarIndustry from './views/nabetSector/sugarIndustry/sugarIndustry';
import SyntheticOrganicChemicalsIndustry from './views/nabetSector/syntheticOrganicChemicals/syntheticOrganicChemicals';
import BuildingConstruction from './views/nabetSector/buildingConstruction/buildingConstruction';
import Distilleries from './views/nabetSector/distilleries/distilleries';
import TownshipsAreaDevelopmentProjects from './views/nabetSector/townshipsArea/townshipsArea';
import IsolatedStorageHandlingofHazardousChemicals from './views/nabetSector/isolatedStorage/isolatedStorage';
import PortsHarbours from './views/nabetSector/portsHarbours/portsHarbours';
import Highways from './views/nabetSector/highways/highways';
import CompletedProjects from './views/nabetSector/projects/completedProjects/completedProjects';
import OngoingProjects from './views/nabetSector/projects/ongoingProjects/ongoingProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about-us',
        element: <About></About>
      },
      {
        path: '/our-services',
        element: <Services></Services>
      },
      {
        path: '/laboratory',
        element: <Laboratory></Laboratory>
      },
      {
        path: '/training-services',
        element: <TrainingServices></TrainingServices>
      },
      {
        path: '/service-sectors',
        element: <NABETSector></NABETSector>
      },
      {
        path: '/accreditation-awards',
        element: <AccreditationAwards></AccreditationAwards>
      },
      {
        path: '/press-coverage-events',
        element: <PressCoverage></PressCoverage>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },


      // ---------------------------------------------------------------------------------------------------------


      // Services Child Components
      {
        path: "/environmental-consulting",
        element: <EnivronmentConsulting></EnivronmentConsulting>
      },
      {
        path: "/environment-monitoring",
        element: <EnivronmentMonitoring></EnivronmentMonitoring>
      },
      {
        path: '/mining-services',
        element: <MiningServices></MiningServices>
      },
      {
        path: '/forest-services',
        element: <ForestryServices></ForestryServices>
      },

      // Environmental Consulting Child Components
      {
        path: '/environment-site-assessment',
        element: <EnivronmentSiteAssignment></EnivronmentSiteAssignment>
      },
      {
        path: '/environment-impact-assessment',
        element: <EnivronmentImpactAssignment></EnivronmentImpactAssignment>
      },
      {
        path: '/environment-audit',
        element: <EnivronmentAudit></EnivronmentAudit>
      },
      {
        path: '/environment-clearance',
        element: <EnivronmentClearance></EnivronmentClearance>
      },
      {
        path: '/environment-health-safety',
        element: <EnivronmentHealth></EnivronmentHealth>
      },

      // Environmental Monitoring Child Components
      {
        path: '/air-monitoring',
        element: <AirMonitoring></AirMonitoring>
      },
      {
        path: '/water-monitoring',
        element: <WaterMonitoring></WaterMonitoring>
      },
      {
        path: '/noise-monitoring',
        element: <NoiseMonitoring></NoiseMonitoring>
      },
      {
        path: '/soil-monitoring',
        element: <SoilMonitoring></SoilMonitoring>
      },
      {
        path: '/lux-monitoring',
        element: <LuxMonitoring></LuxMonitoring>
      },
      {
        path: '/hazardous-waste-monitoring',
        element: <HazardousMonitoring></HazardousMonitoring>
      },

      // Air Monitoring Child Components
      {
        path: '/ambient-air-monitoring',
        element: <AmbientAirMonitoring></AmbientAirMonitoring>
      },
      {
        path: '/indoor-air-quality-monitoring',
        element: <IndoorAirMonitoring></IndoorAirMonitoring>
      },
      {
        path: '/stack-monitoring',
        element: <StackAirMonitoring></StackAirMonitoring>
      },
      {
        path: '/fugitive-air-monitoring',
        element: <FugitiveAirMonitoring></FugitiveAirMonitoring>
      },


      // Mining Service Child Components

      {
        path: '/mine-feasibility-study',
        element: <MineFeasibility></MineFeasibility>
      },
      {
        path: '/geology-mineral-exploration',
        element: <GeologyMineral></GeologyMineral>
      },
      {
        path: '/mining-plan',
        element: <MiningPlan></MiningPlan>
      },
      {
        path: '/mining-audit',
        element: <MineAudit></MineAudit>
      },
      {
        path: '/rr-plan-implementation',
        element: <PlanningImplementation></PlanningImplementation>
      },
      {
        path: '/mine-digitization',
        element: <MineDigitization></MineDigitization>
      },
      {
        path: '/surveying',
        element: <Surveying></Surveying>
      },


      // Forest Services Child Components

      {
        path:'/forest-clearance',
        element:<ForestClearance></ForestClearance>
      },
      {
        path:'/land-use-and-land-cover',
        element:<LandUseCover></LandUseCover>
      },
      {
        path:'/reclamation--afforestation',
        element:<ReclamationAfforestation></ReclamationAfforestation>
      },
      {
        path:'/remote-sensing--gis',
        element:<RemoteSensing></RemoteSensing>
      },
      {
        path:'/thematic-mapping',
        element:<ThematicMapping></ThematicMapping>
      },
      {
        path:'/hydrological-study',
        element:<HydrologicalStudy></HydrologicalStudy>
      },



      // Laboratory Child Components
      {
        path:'/water-testing',
        element:<WaterTesting></WaterTesting>
      },
      {
        path:'/soil-testing',
        element:<SoilTesting></SoilTesting>
      },
      {
        path:'/asbestos-testing',
        element:<AsbestosTesting></AsbestosTesting>
      },
      {
        path:'/ores-and-minerals-testing',
        element:<OresandMinerals></OresandMinerals>
      },
      {
        path:'/coke-and-coal-testing',
        element:<CokeandCoal></CokeandCoal>
      },


      // Training Services Child Components
      {
        path: '/gvtc',
        element: <GroupVocationalTraining></GroupVocationalTraining>
      },
      {
        path: '/research-and-training-centre',
        element: <ResearchTraining></ResearchTraining>
      },


      // NABET Sector Child Components
      {
        path:'/mining-of-minerals',
        element:<MiningOfMinerals></MiningOfMinerals>
      },
      {
        path:'/thermal-power-plants',
        element:<ThermalPowerPlants></ThermalPowerPlants>
      },
      {
        path:'/asbestos-mining-and-asbestos-based-products',
        element:<AsbestosMiningAsbestosBasedProducts></AsbestosMiningAsbestosBasedProducts>
      },
      {
        path:'/metallurgical-industries',
        element:<MetallurgicalIndustries></MetallurgicalIndustries>
      },
      {
        path:'/mineral-beneficiation-including-pelletisation',
        element:<MineralBenefication></MineralBenefication>
      },
      {
        path:'/cement-plants',
        element:<CementPlants></CementPlants>
      },
      {
        path:'/sugar-industries',
        element:<SugarIndustry></SugarIndustry>
      },
      {
        path:'/synthetic-organic-chemicals-industry',
        element:<SyntheticOrganicChemicalsIndustry></SyntheticOrganicChemicalsIndustry>
      },
      {
        path:'/building-and-construction-projects',
        element:<BuildingConstruction></BuildingConstruction>
      },
      {
        path:'/distilleries',
        element:<Distilleries></Distilleries>
      },
      {
        path:'/townships-and-area-development-projects',
        element:<TownshipsAreaDevelopmentProjects></TownshipsAreaDevelopmentProjects>
      },
      {
        path:'/isolated-storage--handling-of-hazardous-chemicals',
        element:<IsolatedStorageHandlingofHazardousChemicals></IsolatedStorageHandlingofHazardousChemicals>
      },
      {
        path:'/ports-harbours-break-waters-and-dredging',
        element:<PortsHarbours></PortsHarbours>
      },
      {
        path:'/highways',
        element:<Highways></Highways>
      },

      // Projects
      {
        path:'/completed-projects',
        element:<CompletedProjects></CompletedProjects>
      },
      {
        path:'/ongoing-projects',
        element:<OngoingProjects></OngoingProjects>
      }


      // ---------------------------------------------------------------------------------------------------------


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
