export interface IMap {
    lat: number
    lng: number
}


export type cords = {
    center: IMap
}

export type TypeLocationsMap = [string, cords][];

export const Locations: TypeLocationsMap = [
    ['Bogotá',
        {
            center: {
                lat: 4.71260783981207,
                lng: -74.06730961121076
            },
        }
    ],
    ['Cajicá', {
        center: {
            lat: 4.918718586258229,
            lng: -74.02280855185117
        }
    }],
    ['Sabana de Bogotá', {
        center: {
            lat: 4.694169838021056,
            lng: -74.14155905942587
        }
    }],

    ['Chía', {
        center: {
            lat: 4.86227890919372,
            lng: -74.05582565675529
        }
    }],
    ['Zipaquirá', {
        center: {
            lat: 5.025750626359642,
            lng: -73.99996334335346
        }
    }],
    ['Cogua', {
        center: {
            lat: 5.061353219650668,
            lng: -73.97687818892861
        }
    }],
    ['Sopó', {
        center: {
            lat: 4.908270291868503,
            lng: -73.93809421556463
        }
    }],
    ['Tocancipá', {
        center: {
            lat: 4.966871115466694,
            lng: -73.91324911721036
        }
    }],
    ['Gachancipá', {
        center: {
            lat: 4.995344362815128,
            lng: -73.87167648066271
        }
    }],
    ['Tabio', {
        center: {
            lat: 4.913970416042033,
            lng: -74.09645924261758
        }
    }],
    ['Tenjo', {
        center: {
            lat: 4.872642439898107,
            lng: -74.14713340410242
        }
    }],
    ['Nemocón', {
        center: {
            lat: 5.067434314957465, 
            lng: -73.87909206024244,
        }
    }]
];