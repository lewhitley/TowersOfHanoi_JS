class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $tower = $('<ul>').addClass("tower");
      $tower.attr("id",`t${i+1}`);

      if (i === 0) {
        for (let j = 1; j <= 3; j++){
          let $disc = $('<li>').addClass(`disc`);
          $disc.attr("id", `d${j}`);
          $tower.append($disc);
        }
      }
      let $base = $('<li>').addClass("base");
      $tower.append($base);
      $('figure').append($tower);
    }
  }
}


module.exports = View;
