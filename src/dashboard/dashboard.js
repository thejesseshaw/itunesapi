import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../auth/requires-login';
import Dashboardalbums from './dashboardalbums';
import './dashboard.css';
import fetch from 'cross-fetch';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

/*
let music = {
    "resultCount":16,
    "results": [
   {"wrapperType":"artist", "artistType":"Artist", "artistName":"Deftones", "artistLinkUrl":"https://itunes.apple.com/us/artist/deftones/1092903?uo=4", "artistId":1092903, "amgArtistId":168233, "primaryGenreName":"Rock", "primaryGenreId":21}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":1092903, "collectionId":567302377, "amgArtistId":168233, "artistName":"Deftones", "collectionName":"Koi No Yokan", "collectionCensoredName":"Koi No Yokan", "artistViewUrl":"https://itunes.apple.com/us/artist/deftones/1092903?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/koi-no-yokan/567302377?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/0c/36/b5/0c36b56c-5f92-d64a-73d8-5bada7b2502e/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/0c/36/b5/0c36b56c-5f92-d64a-73d8-5bada7b2502e/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":11, "copyright":"℗ 2012 Reprise Records", "country":"USA", "currency":"USD", "releaseDate":"2012-11-09T08:00:00Z", "primaryGenreName":"Rock"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":27519442, "collectionId":887699504, "amgArtistId":618043, "artistName":"Madvillain", "collectionName":"Madvillainy", "collectionCensoredName":"Madvillainy", "artistViewUrl":"https://itunes.apple.com/us/artist/madvillain/27519442?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/madvillainy/887699504?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music4/v4/95/ba/b0/95bab0f8-3571-01d1-4a7d-57121daaa635/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music4/v4/95/ba/b0/95bab0f8-3571-01d1-4a7d-57121daaa635/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":22, "copyright":"℗ 2004 Stones Throw Records", "country":"USA", "currency":"USD", "releaseDate":"2004-12-01T08:00:00Z", "primaryGenreName":"Hip-Hop/Rap"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":2987400, "collectionId":265229827, "amgArtistId":352663, "artistName":"The Dillinger Escape Plan", "collectionName":"Ire Works", "collectionCensoredName":"Ire Works", "artistViewUrl":"https://itunes.apple.com/us/artist/the-dillinger-escape-plan/2987400?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/ire-works/265229827?uo=4", "artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/5f/e2/e0/5fe2e039-da8b-0a76-b454-398d175b9365/source/60x60bb.jpg", "artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/5f/e2/e0/5fe2e039-da8b-0a76-b454-398d175b9365/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":13, "copyright":"℗ 2007 Relapse Records", "country":"USA", "currency":"USD", "releaseDate":"2007-11-13T08:00:00Z", "primaryGenreName":"Alternative"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":206711, "collectionId":288277647, "amgArtistId":4984, "artistName":"My Bloody Valentine", "collectionName":"Loveless", "collectionCensoredName":"Loveless", "artistViewUrl":"https://itunes.apple.com/us/artist/my-bloody-valentine/206711?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/loveless/288277647?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/13/ee/d2/13eed2eb-cf7a-e2cb-d653-aee3690122d2/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/13/ee/d2/13eed2eb-cf7a-e2cb-d653-aee3690122d2/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 1991 Sire Records Company, a label of Warner Bros. Records, manufactured and marketed by Rhino Entertainment Company, a Warner Music Group company", "country":"USA", "currency":"USD", "releaseDate":"2003-04-08T07:00:00Z", "primaryGenreName":"Rock"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":73720797, "collectionId":658897870, "amgArtistId":403593, "artistName":"Sigur Rós", "collectionName":"Ágætis Byrjun", "collectionCensoredName":"Ágætis Byrjun", "artistViewUrl":"https://itunes.apple.com/us/artist/sigur-r%C3%B3s/73720797?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/%C3%A1g%C3%A6tis-byrjun/658897870?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/f7/cb/ae/f7cbaef3-d2ad-0ed0-1fab-74090096fdc6/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/f7/cb/ae/f7cbaef3-d2ad-0ed0-1fab-74090096fdc6/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":10, "copyright":"℗ 2013 XL Recordings", "country":"USA", "currency":"USD", "releaseDate":"2013-06-10T07:00:00Z", "primaryGenreName":"Alternative"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":73720797, "collectionId":1015974797, "amgArtistId":403593, "artistName":"Sigur Rós", "collectionName":"Takk", "collectionCensoredName":"Takk", "artistViewUrl":"https://itunes.apple.com/us/artist/sigur-r%C3%B3s/73720797?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/takk/1015974797?uo=4", "artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music7/v4/a1/18/b2/a118b2d6-74e8-984a-6a25-f5f4dfcdbce2/source/60x60bb.jpg", "artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music7/v4/a1/18/b2/a118b2d6-74e8-984a-6a25-f5f4dfcdbce2/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 2015 KRUNK", "country":"USA", "currency":"USD", "releaseDate":"2015-07-01T07:00:00Z", "primaryGenreName":"Alternative"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":1587965, "collectionId":1173106678, "amgArtistId":50081, "artistName":"A Tribe Called Quest", "collectionName":"We got it from Here... Thank You 4 Your service", "collectionCensoredName":"We got it from Here... Thank You 4 Your service", "artistViewUrl":"https://itunes.apple.com/us/artist/a-tribe-called-quest/1587965?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/we-got-it-from-here-thank-you-4-your-service/1173106678?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music71/v4/ff/95/52/ff955221-d583-2d90-dc38-1528d304a320/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music71/v4/ff/95/52/ff955221-d583-2d90-dc38-1528d304a320/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":16, "copyright":"℗ 2016 Epic Records, a division of Sony Music Entertainment", "country":"USA", "currency":"USD", "releaseDate":"2016-11-11T08:00:00Z", "primaryGenreName":"Hip-Hop/Rap"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":107917, "collectionId":1147713593, "artistName":"Nine Inch Nails", "collectionName":"The Fragile", "collectionCensoredName":"The Fragile", "artistViewUrl":"https://itunes.apple.com/us/artist/nine-inch-nails/107917?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/the-fragile/1147713593?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music22/v4/3b/ba/42/3bba42c1-6acc-214a-f4c2-c42284e09b80/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music22/v4/3b/ba/42/3bba42c1-6acc-214a-f4c2-c42284e09b80/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":23, "copyright":"℗ 2015 Nothing/Interscope Records", "country":"USA", "currency":"USD", "releaseDate":"1999-09-21T07:00:00Z", "primaryGenreName":"Rock"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":1971863, "collectionId":723654366, "amgArtistId":10, "artistName":"Beastie Boys", "collectionName":"Paul's Boutique", "collectionCensoredName":"Paul's Boutique", "artistViewUrl":"https://itunes.apple.com/us/artist/beastie-boys/1971863?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/pauls-boutique/723654366?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/37/fb/54/37fb540b-f819-cdef-d197-960951be8391/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/37/fb/54/37fb540b-f819-cdef-d197-960951be8391/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":15, "copyright":"℗ 1989 Capitol Records, Inc.. All rights reserved.", "country":"USA", "currency":"USD", "releaseDate":"1989-07-31T07:00:00Z", "primaryGenreName":"Hip-Hop/Rap"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":2715720, "collectionId":403822142, "amgArtistId":353484, "artistName":"Kanye West", "collectionName":"My Beautiful Dark Twisted Fantasy", "collectionCensoredName":"My Beautiful Dark Twisted Fantasy", "artistViewUrl":"https://itunes.apple.com/us/artist/kanye-west/2715720?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/my-beautiful-dark-twisted-fantasy/403822142?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/8d/c9/fb8dc987-8592-a70c-6b96-29052eef47a9/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/8d/c9/fb8dc987-8592-a70c-6b96-29052eef47a9/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":14, "copyright":"℗ 2010 Roc-A-Fella Records, LLC", "country":"USA", "currency":"USD", "releaseDate":"2010-01-01T08:00:00Z", "primaryGenreName":"Hip-Hop/Rap"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":170077, "collectionId":184672979, "amgArtistId":4223, "artistName":"Faith No More", "collectionName":"Angel Dust", "collectionCensoredName":"Angel Dust", "artistViewUrl":"https://itunes.apple.com/us/artist/faith-no-more/170077?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/angel-dust/184672979?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music111/v4/73/95/fc/7395fc31-b4e9-6262-fd52-1dc4cc826715/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music111/v4/73/95/fc/7395fc31-b4e9-6262-fd52-1dc4cc826715/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":14, "copyright":"℗ 1999 Slash Records, a label of Warner Bros. Records, manufactured and marketing by Rhino Entertainment Company, a Warner Music Group company", "country":"USA", "currency":"USD", "releaseDate":"1992-06-08T07:00:00Z", "primaryGenreName":"Alternative"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":2987400, "collectionId":67965140, "amgArtistId":352663, "artistName":"The Dillinger Escape Plan", "collectionName":"Calculating Infinity", "collectionCensoredName":"Calculating Infinity", "artistViewUrl":"https://itunes.apple.com/us/artist/the-dillinger-escape-plan/2987400?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/calculating-infinity/67965140?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/7f/dd/1f/7fdd1fcc-cc20-6326-52ba-571214d6f7a7/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/7f/dd/1f/7fdd1fcc-cc20-6326-52ba-571214d6f7a7/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 1999 Relapse Records", "country":"USA", "currency":"USD", "releaseDate":"1999-09-28T07:00:00Z", "primaryGenreName":"Alternative"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":468355684, "collectionId":893175779, "amgArtistId":792844, "artistName":"Burial", "collectionName":"Untrue", "collectionCensoredName":"Untrue", "artistViewUrl":"https://itunes.apple.com/us/artist/burial/468355684?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/untrue/893175779?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music4/v4/47/6f/a6/476fa621-2a18-5846-25b5-f139468c8196/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music4/v4/47/6f/a6/476fa621-2a18-5846-25b5-f139468c8196/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":13, "copyright":"℗ 2014 Hyperdub", "country":"USA", "currency":"USD", "releaseDate":"2014-07-01T07:00:00Z", "primaryGenreName":"Electronic"},
   {"wrapperType":"collection", "collectionType":"Album", "artistId":35888604, "collectionId":1286314406, "amgArtistId":362101, "artistName":"Four Tet", "collectionName":"There Is Love in You (Expanded Edition)", "collectionCensoredName":"There Is Love in You (Expanded Edition)", "artistViewUrl":"https://itunes.apple.com/us/artist/four-tet/35888604?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/there-is-love-in-you-expanded-edition/1286314406?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music118/v4/35/fc/e1/35fce13b-9f01-cf91-1f2d-752c42197021/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music118/v4/35/fc/e1/35fce13b-9f01-cf91-1f2d-752c42197021/source/100x100bb.jpg", "collectionExplicitness":"notExplicit", "trackCount":18, "copyright":"℗ 2010 Text Records", "country":"USA", "currency":"USD", "releaseDate":"2010-01-25T08:00:00Z", "primaryGenreName":"Electronic"} 
]}
*/

export class Dashboardpage extends React.Component {
    constructor() {
      super();
      this.state = {
        cards: []
      }
    }
    
    createNotification = (type) => {
      return () => {
        switch (type) {
          case 'info':
            NotificationManager.info('Info message');
            break;
          case 'success':
            NotificationManager.success('Success message', 'Title here');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
        }
      };
    };

    componentDidMount() {
      let cards
      fetch(`http://localhost:8080/music-data/${this.props.username}`)
        .then(results => {
          return results.json()
        })
        .then(data => {
          let results = []
          for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            results[i] = <Dashboardalbums artist={data[i].artist} album={data[i].album} genre={data[i].genre} imagelink={data[i].artwork} buyOnItunes={data[i].itunesLink} rating={data[i].rating}/>
          }
          this.setState({cards: results})
          console.log(`"state": ${this.state.cards}`)
        })
    }

    render() {
            let cards
            /*
            for (var i = 0; i < music.results.length; i++) {
              if (music.results[i].wrapperType !== "collection") {
                continue;
              }
              let artistKey = music.results[i].artistName;
              let albumKey = music.results[i].collectionName;
              let genreKey = music.results[i].primaryGenreName;
              let imageKey = music.results[i].artworkUrl100;
              let itunes = music.results[i].collectionViewUrl;
              cards.push(<Albumrow key={i} artist={artistKey} album={albumKey} genre={genreKey} imagelink={imageKey} buyOnItunes={itunes}/>);
            }
            */
            return (
              <div className="dashboard-items">
                {this.state.cards}
                <NotificationContainer />
              </div>
            );
    }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboardpage));
