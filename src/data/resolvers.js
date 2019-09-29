import { find, filter } from 'lodash';

const songs =  [
    {
        id: 1,
        title: 'Piano Sonata No. 3',
        artist: 'Beethoven'
    },
    {
        id: 2,
        title: 'Piano Sonata No. 7',
        artist: 'Beethoven'
    },
    {
        id: 3,
        title: 'Piano Sonata No. 10',
        artist: 'Beethoven'
    },
    {
        id: 4,
        title: 'Fur Elize',
        artist: 'Motzart'
    }
];

const artists = [
    { 
        id: 1,
        name:  'Beethoven' 
    },
    { 
        id: 2,
        name:  'Motzart' 
    },
];

export default {
    Query: {
        hello: () => 'Hello world!',
        song: (_, { id }) => find(songs, { id }),
        artist: (_, { id }) => find(artists, { id })
    },

    Artist: {
        songs: artist => filter(songs, { artist: artist.name })
    },

    Song: {
        artist: song => find(artists, { name: song.artist })
    }

};
