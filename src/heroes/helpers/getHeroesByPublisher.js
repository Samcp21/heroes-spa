import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validaPublishers = ["DC Comics", "Marvel Comics"];
  if (!validaPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publish`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
