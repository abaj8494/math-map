# Mathematical Cosmos - Interactive 3D Math Map

An immersive 3D visualization of mathematical topics and their relationships, displayed as trading card game (TCG) style cards floating in a cosmic space.

## Features

### 🎴 Interactive 3D Cards
- **40+ Mathematical Topics** spanning from ancient geometry to modern machine learning
- **Category-based color coding** for easy visual identification:
  - 🟣 Foundations (Purple)
  - 🔵 Algebra and Discrete (Blue)
  - 🟢 Analysis (Green)
  - 🟠 Geometry and Topology (Orange)
  - 🔴 Probability and Statistics (Red)
  - 💗 Optimization and Control (Pink)
  - 🔷 Computation (Cyan)
  - 🟧 Physics (Deep Orange)

### 🚀 3D Navigation
- **Pan, Zoom, and Rotate** freely through mathematical space
- **Timeline-based layout**: Cards positioned along the X-axis by year of invention (-350 BC to 2025 AD)
- **Category clustering**: Related topics grouped together in 3D space
- **Smooth camera controls** with OrbitControls for intuitive exploration

### 🔗 Relationship Visualization
- **Directional arrows** showing how topics "lead to" other topics
- **Arrow thickness** indicates relationship strength (50-100 scale)
- **Dynamic pathfinding** between any two topics using Floyd-Warshall algorithm

### 👥 Contributor Information
- **Click on any card** to see:
  - Topic name, year, type, and category
  - Key contributors with portraits and dates
  - Prerequisites with importance ratings
  - Topics it leads to
- **40+ Mathematicians** including Euler, Gauss, Riemann, Poincaré, Kolmogorov, and more

### 🔍 Path Search
- **Magnifying glass button** for finding paths between topics
- **Multi-colored path visualization** highlighting the route through mathematical history
- **Step-by-step path display** showing the learning progression

### 📱 Responsive Design
- **Desktop-optimized** with side panels for detailed information
- **Mobile-friendly** with bottom sheets and touch controls
- **Adaptive UI** that works seamlessly on all screen sizes

## Technology Stack

- **SvelteKit** - Modern web framework
- **Three.js** - 3D graphics library
- **Tailwind CSS** - Utility-first styling
- **OrbitControls** - Camera navigation

## Project Structure

```
math-map/
├── src/
│   ├── lib/
│   │   ├── components/       # Reusable Svelte components
│   │   ├── data/
│   │   │   ├── topics.json   # Mathematical topics database
│   │   │   └── people.json   # Mathematicians database
│   │   └── utils/
│   │       └── paths.js      # Path resolution utilities
│   ├── routes/
│   │   ├── +layout.svelte    # Root layout
│   │   └── +page.svelte      # Main 3D visualization
│   ├── app.css               # Global styles
│   ├── app.html              # HTML template
│   └── app.d.ts              # TypeScript definitions
├── static/
│   ├── images/
│   │   └── people/           # Mathematician portraits
│   └── favicon.png
├── package.json
├── svelte.config.js
├── vite.config.js
└── jsconfig.json
```

## Installation & Setup

### Prerequisites
- Node.js 18+ or compatible package manager (npm, pnpm, yarn)

### Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to explore the mathematical cosmos!

### Build for Production
```bash
npm run build
npm run preview
```

## Data Structure

### Topics (topics.json)
Each mathematical topic includes:
- `id`: Unique identifier
- `name`: Full topic name
- `type`: "Pure Math" or "Applied Math"
- `category`: One of 8 major categories
- `year`: Year of invention/formalization
- `leadsTo`: Array of topic IDs this leads to
- `contributors`: Array of mathematician IDs
- `prerequisites`: Array of `{id, strength}` objects (50-100 scale)

### People (people.json)
Each mathematician includes:
- `id`: Unique identifier
- `name`: Full name with diacriticals
- `born`: Birth year (negative for BC)
- `died`: Death year (or null if living)
- `image`: Path to portrait image
- `gender`: 0 (female) or 1 (male)

## Key Interactions

1. **Click a card** - View detailed information, zoom to card
2. **Drag to rotate** - Orbit around the scene
3. **Scroll to zoom** - Move closer or farther
4. **Right-click drag** - Pan the view
5. **Click magnifying glass** - Open path search
6. **Select topics** - Find and highlight paths between them

## Mathematical Coverage

The visualization spans over 2,000 years of mathematical development:

- **Foundations**: Logic, Set Theory, Category Theory
- **Algebra**: Linear, Abstract, Galois Theory, Lie Groups
- **Analysis**: Calculus, Real/Complex Analysis, Functional Analysis
- **Geometry**: Euclidean, Topology, Differential Geometry
- **Statistics**: Probability, Bayesian Inference, Machine Learning
- **Applied**: Optimization, Numerical Analysis, PDEs, Quantum Mechanics

## Contributing

To add new topics or mathematicians:

1. Edit `src/lib/data/topics.json` with new topic data
2. Edit `src/lib/data/people.json` with new mathematician data
3. Add portrait images to `static/images/people/`
4. Ensure relationships (leadsTo, prerequisites) are properly linked

## Credits

Inspired by the [Shrine](https://abaj8494.github.io/shrine/) timeline visualization.

Built with appreciation for the giants whose shoulders we stand on.

## License

This project is a labor of love for mathematical education and exploration.

