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
Type: Pure Math / Applied
Category: one of Foundations | Algebra and Discrete | Analysis | Geometry and Topology | Probability
Year: int, year of invention
Leads to: list of other id cards
Contributors: list of contributors (clicking will pop-up the person card)
Pre-requisites: list of other id cards. these will be a tuple starting at 50/100, whereby the thickness of the arrow will increase with higher numbers. it will be to indicate the extent of correlation between fields.

note that stylistically, you should know that "Foundations | Algebra and Discrete | Analysis | Geometry and Topology" are all "Pure Math", whilst "Probability, Statistics and Stochastic Processes | Optimisation and Control | Computation | Physics" fall in Applied 

specifically, I want the following clusters:

**Foundations:**
Logic
Axiomatic Set Theory
Category Theory

**Algebra and Discrete:**
Elementary Algebra
Linear Algebra
Abstract Algebra
Galois Theory
Module & Representation Theory
Lie Groups & Lie Algebras
Commutative and Homological Algebra
Number Theory
Graph Theory & Combinatorics

**Analysis:**
Calculus
Vector Calculus
Calculus of Variations
Fractional and Non-linear Analysis
Complex Analysis
Real Analysis: metric spaces, topological spaces
Measure Theory
Functional Analysis
Elementary Trigonometry
Harmonic Analysis

**Geometry and Topology:**
Elementary Geometry
Topology
Algebraic Topology
Differential Geometry and Topology

**Probability, Statistics and Stochastic Processes:**
Probability and Stastistical Theory
Statistical Inference
Stochastic Processes
Bayesian Inference and Computation
Stochastic Analysis
Regression Analysis
Time Series Analysis
Information Theory
Machine Learning Theory

**Optimisation and Control**
Convex and Non-convex optimisation
Optimal Control Theory
Game Theory

**Computation:**
Numerical Analysis
Computational Linear Algebra

**Physics:**
Differential Equations
Partial Differential Equations
Dynamical Systems and Chaos






## final design instructions

I want the arrows to be big and visible. They should be drawn (respecting the direction) from one floating card in space to the other.

I definitely want to be able to pan and zoom in this 3d world.

I need the experience to be smooth, and later I want to add a small search bar that highlights all the paths (each one in a different colour) from one math topic to another.

If no paths are found, then pop-up error 'No route, try again'.

I think we can use the Floyd-Warshall algorithm for this.

Finally, I will want the mobile user experience of this site to be equally as smooth, so factor that in before you start writing code. Goodluck!

---

Oh, one more thing - the shrine web-app that you should study is in the folder `shrine-svelte-ref`

