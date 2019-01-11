
class Library {
  constructor (name, creator){
    this.name = name;
    this.crearor = creator;
    this.playlists = [];
  }

  set addPlaylists (p){
    this.playlists.push(p);
  }

  get getPlaylists () {
    return `Playlists:  ${this.playlists}`;
  }

}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  set addTracks (t) {
    this.tracks.push(t);
  }

  get getTracks () {
    return `Tracks:  ${this.tracks}`
  }

  overallRating () {
    let totalRating = 0;
    this.tracks.forEach(function(track){
      totalRating+=track.rating;
    })
    const avg = totalRating / this.tracks.length;
    return `Average rating: ${avg}`;
  }

  totalDuration () {
    let sumDuration = 0;
    this.tracks.forEach(function (track){
      sumDuration+= track.length;
    });
    return `Total length: ${sumDuration}`;
  }
}

class tracks {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const musicLib = new Library('pop', 'CJ');

const usList = new Playlist('usMusic');
const ukList = new Playlist('ukMusic');

const t1 = new tracks("The zoo", 4.5, 600);
const t2 = new tracks("Hungry max", 4.7, 875);
const t3 = new tracks("Electric weed", 4.9, 1210);
const t4 = new tracks("Smoking Angel", 3.9, 990);
const t5 = new tracks("45mm period", 3.2, 590);


usList.addTracks = t1;
usList.addTracks = t4;
usList.addTracks = t5;

ukList.addTracks = t2;
ukList.addTracks = t3;

musicLib.addPlaylists = usList;
musicLib.addPlaylists = ukList;

console.log("The lib: ", musicLib);
console.log("uk: ", ukList);
console.log(ukList.overallRating())
console.log(ukList.totalDuration())

console.log("us: ", usList);





