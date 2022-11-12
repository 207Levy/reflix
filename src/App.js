import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Movie from "./components/Movie";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 0,
          title: "Tarzan",
          year: 1999,
          img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
          descrShort:
            "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
        },
        {
          id: 1,
          title: "The Lion King",
          img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
          year: 1994,
          descrShort:
            "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
        },
        {
          id: 2,
          title: "Beauty and the Beast",
          year: 1991,
          img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
          descrShort:
            "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
        },
        {
          id: 3,
          title: "The Sword in the Stone",
          year: 1963,
          img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
          descrShort:
            "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
        },
        {
          id: 4,
          title: "Beauty and the Beast",
          year: 2016,
          img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
          descrShort:
            "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
        },
      ],
      users: [
        { name: "Or", budget: 1000, moviesPossesed: [] },
        { name: "Raz", budget: 1000, moviesPossesed: [] },
        { name: "Gal", budget: 1000, moviesPossesed: [1, 3] },
      ],
      loggedOn: null,
    };
  }

  addNewUser = () => {};
  logIn = (user) => {
    this.setState({ loggedOn: user });
  };

  logOut = () => {
    this.setState({ loggedOn: null });
  };
  rentOrReturnMovie = (userName, movieId) => {
    movieId = Number.parseInt(movieId);
    const usersDup = this.state.users.map((user) => {
      return { ...user };
    });
    const user = usersDup.find((u) => u.name === userName);
    if (user.moviesPossesed.includes(movieId)) {
      user.budget += 3;
      user.moviesPossesed = user.moviesPossesed.filter(
        (mId) => mId !== movieId
      );
    } else {
      if (user.budget < 3) {
        alert(
          `${userName} have balance of${user.budget}$.\nPlease return some movies to rent new ones...`
        );
        return;
      }
      user.budget -= 3;
      user.moviesPossesed.push(movieId);
    }
    this.setState({ users: usersDup, loggedOn: user });
  };

  render() {
    const state = this.state;
    return (
      <Router>
        <div className="App">
          <div className="header">
            <div id="main-links">
              {/* Main Links */}
              <Link to="/">Home</Link>
              <Link to="/catalog">catalog</Link>
            </div>
            <div className="logo">Reflix</div>
          </div>

          {/* Routes go here v */}
          <Route
            exact
            path="/"
            render={() => (
              <Home
                state={state}
                logIn={this.logIn}
                logOut={this.logOut}
                addNewUser={this.addNewUser}
              />
            )}
          />
          <Route
            exact
            path="/catalog"
            render={() => (
              <Catalog rentOrReturn={this.rentOrReturnMovie} state={state} />
            )}
          />
          <Route
            path="/movies/:movieId"
            exact
            render={({ match }) => (
              <Movie
                user={this.state.loggedOn}
                rentOrReturn={this.rentOrReturnMovie}
                onlyPic={false}
                movie={state.movies.find((m) => {
                  return m.id == match.params.movieId;
                })}
              />
            )}
          />
          <Route
            path="/users/:name"
            exact
            render={({ match }) => (
              <User
                rentOrReturn={this.rentOrReturnMovie}
                logOut={this.logOut}
                state={state}
                username={match.params.name}
              />
            )}
          />
          {/* Routes go here ^ */}
        </div>
      </Router>
    );
  }
}

export default App;
