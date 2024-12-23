class MarvelService {
  _apiKey = "apikey=75522c928a8326c06409ab4c867fbb91";

  getResourse = async (url) => {
    const date = await fetch(url);
    return await date.json();
  };

  getAllCharacters = async (offset = 0) => {
    const result = await this.getResourse(
      `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&${this._apiKey}`
    );

    return result.data.results.map((item) => this.setCharacterData(item));
  };

  getOneCharacterByID = async (id) => {
    const result = await this.getResourse(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?${this._apiKey}`
    );
    return this.setCharacterData(result.data.results[0]);
  };

  getAllComics = async (offset = 0) => {
    const result = await this.getResourse(
      `https://gateway.marvel.com:443/v1/public/comics?limit=10&offset=${offset}&${this._apiKey}`
    );

    return result.data.results.map((item) => this.setComicsData(item));
  };

  getOneComicsByID = async (id) => {
    const result = await this.getResourse(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?${this._apiKey}`
    );
    return this.setComicsData(result.data.results[0]);
  };

  setComicsData = (result) => {
    return {
      title: result.title,
      id: result.id,
      description: result.description,
      img: `${result.thumbnail.path}.${result.thumbnail.extension}`,
      url: result.urls[0].url,
      price: result.prices[0].price,
    };
  };

  setCharacterData = (result) => {
    return {
      name: result.name,
      description: result.description,
      img: `${result.thumbnail.path}.${result.thumbnail.extension}`,
      url: result.urls[0].url,
      id: result.id,
      comics: result.comics.items,
    };
  };
}

export default MarvelService;
