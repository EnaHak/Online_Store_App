class Recept {
  constructor(
    id,
    idKategorija,
    naziv,
    urlSlike, 
 
    novac
  ) {
    this.id = id;
    this.idKategorija = idKategorija;
    this.naziv=naziv;
    this.urlSlike = urlSlike;

    this.novac=novac;
  }
}

export default Recept;
