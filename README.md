Dear Cursor,

I am building a static site that uses Svelte (if possible) to produce the following functionality:

Black mathematical cosmos with floating TCG (trading card game-esque) Mathematical Topic Cards.

So for example, Trigonometry: Year XXX BC
Leads to: Calculus (clicking will teleport you to that card), Analysis, Elementary Algebra
Contributors: Euler, Fourier, etc (the front-end should provide a character card upon hover / clicking)


For now, I think that is enough information on the card.

I want the cards each stored as a json entry in `topics.json`. I have ripped `people.json` from another Svelte repo of mine that displays timeline in space with people affixed onto it.

I want you to mimic the same colour scheme and logic in-as-much as possible.

Though novelty in this project however will be that now we need to be doing 3D work.

Feel free to change the technology stack if that seems necessary.

## Intellectual Core

Beyond design considerations, I am trying to build an informative, accurate and treasured web-application that connects seemingly disparate fields of mathematics, and gives credit to the contributors who helped develop the field.

Some of the names that I insist on including (and I expect you to search for the correct metadata)

- Euler
- Euclid
- Aristotle
- Poincare
- Lebesgue
- Rudin
- Halmos
- Sheldon Axler
- Gilbert Strang
- Terrence Tao
- John Conway
- Larry Wasserman
- E.T. Jaynes
- Kolmogorov
- David Hilbert
- Ramanujan
- Riemann
- Gauss
- Cauchy
- Tarski
- Banach
- Fourier
- Lagrange
- Jordan
- Pythagoras

besides this `README.md` file is a `people.json` that contains a template of the json file we will need for this project. I require full-names for each individual (with correct diacriticals, etc.!)

### Topics

The topic cards will be the main feature of this project -- they must be excellent.

The datastructure json will contain the following information:

id: unique string id
Name: (full name, string)
Year: int, year of invention
Leads to: list of other id cards
Contributors: list of contributors (clicking will pop-up the person card)
Pre-requisites: list of other id cards

## final design instructions

I want the arrows to be big and visible. They should be drawn (respecting the direction) from one floating card in space to the other.

I definitely want to be able to pan and zoom in this 3d world.

I need the experience to be smooth, and later I want to add a small search bar that highlights all the paths (each one in a different colour) from one math topic to another.

If no paths are found, then pop-up error 'No route, try again'.

I think we can use the Floyd-Warshall algorithm for this.

Finally, I will want the mobile user experience of this site to be equally as smooth, so factor that in before you start writing code. Goodluck!



