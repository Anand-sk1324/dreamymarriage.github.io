import PlanTraditional from './assets/service/Plans/plan-traditional.png';
import PlanDestination from './assets/service/Plans/plan-destination.avif';
import PlanTheme from './assets/service/Plans/plan-theme.webp';
const PlanServices = [
    ["Traditional", PlanTraditional],
    ["Destination", PlanDestination],
    ["Theme",PlanTheme]
]

import southIndian from './assets/service/Food/south-indian.jpg';
import northIndian from './assets/service/Food/north-indian.jpg';
import banthi from './assets/service/Food/banthi.jpg';
import buffet from './assets/service/Food/buffet2.jpg';
const FoodServices = [
    ["southIndian", southIndian],
    ["northIndian", northIndian],
    ["banthi", banthi],
    ["buffet", buffet]
];
import WeddingPhotography from './assets/service/Photography/wedding-photography.jpg';
import PreWeddingPhotography from './assets/service/Photography/pre-wedding.jpg';
import DronePhotography from './assets/service/Photography/photography-drone1.jpg';
const PhotographyServices = [
    ["WeddingPhotography", WeddingPhotography],
    ["PreWeddingPhotography", PreWeddingPhotography],
    ["DronePhotography", DronePhotography]
]

import Anchor from './assets/service/Bride-Entry/bride-entry-anchor.jpg';
import Bouncers from './assets/service/Bride-Entry/bride-entry-bouncers.webp';
import Car from './assets/service/Bride-Entry/bride-entry-car.webp';
import Crackers from './assets/service/Bride-Entry/bride-entry-crackers.jpg';
import Dance from './assets/service/Bride-Entry/bride-entry-dance.jpeg';
import DJ from './assets/service/Bride-Entry/bride-entry-dj.jpg';
import Orchastra from './assets/service/Bride-Entry/bride-entry-orchastra.jpg';
const BrideEntryServices = [
    ["Anchor", Anchor],
    ["Bouncers", Bouncers],
    ["Car", Car],
    ["Crackers",Crackers],
    ["Dance",Dance],
    ["DJ",DJ],
    ["Orchastra",Orchastra]
]

import Costume from './assets/service/Etc/etc-custome.jpeg';
import Instruments from './assets/service/Etc/etc-instruments.jpg';
import Perohit from './assets/service/Etc/etc-perohit.webp';
import Veni from './assets/service/Etc/etc-veni.jpg';
import Garland from './assets/service/Etc/etc-garland.webp';
const EtcServices = [
    ["Costume", Costume],
    ["Instruments", Instruments],
    ["Perohit", Perohit],
    ["Veni", Veni],
    ["Garland", Garland]
];

export {
    PlanServices,
    FoodServices,
    PhotographyServices,
    BrideEntryServices,
    EtcServices
}