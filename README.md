https://abaj8494.github.io/math-map/

# Mathematical Cosmos 🌌🔢

An interactive 3D visualization of mathematical topics floating in space like trading cards, connected by arrows showing how concepts build upon each other. Explore the evolution of mathematics from ancient geometry to modern machine learning.

![Mathematical Cosmos Preview](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

## 🎯 Motivation

Mathematics is a vast, interconnected landscape where ideas build upon each other across centuries. Traditional linear timelines or static graphs fail to capture:

- **Temporal Evolution**: How mathematical concepts emerged and evolved over time
- **Interdependencies**: The prerequisite relationships between topics
- **Contributor Networks**: The brilliant minds behind each discovery
- **Hierarchical Structure**: The organization of Pure vs Applied mathematics
- **Conceptual Connections**: How different areas of math naturally lead to one another

This project visualizes mathematics as a living, three-dimensional cosmos where each topic is a tangible card floating in space, positioned chronologically along a timeline axis, separated vertically by type (Pure/Applied), and clustered by category. Arrows connect related concepts, allowing you to trace the intellectual lineage of mathematical ideas.

## ✨ Features

### 3D Navigation
- **Orbital Controls**: Pan, zoom, and rotate to explore the mathematical cosmos
- **Card Interaction**: Click any card to zoom in and examine it closely
- **Arrow Highlighting**: Click arrows to highlight relationships between topics
- **Smart Navigation**: Click "Leads To" or "Prerequisites" to teleport between connected topics

### Rich Card Information
Each topic card displays:
- **Front Face**: Name, Year, Category, Type, Contributors (with photos), and topics it leads to
- **Back Face**: Prerequisites (with strength ratings) and detailed historical notes
- **Category Colors**: Border colors indicate the mathematical category
- **3D Depth**: Cards have physical thickness and can be flipped

### Interactive Panels
- **Contributor Details**: Click contributor names to see their photo and life dates
- **Topic Navigation**: Clickable lists of prerequisites and related topics
- **Navigation History**: Back button to return to previously viewed cards
- **Search Functionality**: Find paths between topics using graph algorithms

### Dual View Modes
- **3D Cosmos View**: Immersive spatial exploration
- **List View**: Scrollable list with sorting options (Year, Name, Category, Type)

### Visual Organization
- **Timeline Axis**: Topics arranged chronologically from ancient to modern
- **Pure/Applied Separation**: Pure Math below the axis, Applied Math above
- **Category Clustering**: Related topics grouped spatially
- **Type Labels**: Clear "PURE MATH" and "APPLIED MATH" markers in space

## 🛠️ Tech Stack

### Frontend Framework
- **SvelteKit** (with `adapter-static`): Modern, reactive web framework for static site generation
- **JavaScript/HTML/CSS**: Core web technologies

### 3D Rendering
- **Three.js**: WebGL-powered 3D graphics library
  - OrbitControls for camera manipulation
  - Raycasting for click detection
  - Canvas textures for dynamic card content
  - MeshStandardMaterial for realistic lighting

### Data Management
- **JSON**: Structured data for topics and contributors
  - `topics.json`: 40+ mathematical topics with relationships
  - `people.json`: 50+ mathematicians with biographical data

### Deployment
- **GitHub Pages**: Static hosting via the `docs` folder
- **`.nojekyll`**: Prevents Jekyll processing of `_app` directory

### Development Tools
- **Vite**: Fast build tool and dev server
- **Python Scripts**: Automated image fetching from Wikimedia Commons

## 📚 Data Structure

### Topics (`src/lib/data/topics.json`)
```json
{
  "id": "calculus",
  "name": "Calculus",
  "type": "Pure Math",
  "category": "Analysis",
  "year": 1665,
  "era": { "start": 1665, "peak": 1750, "end": null },
  "difficulty": { "tier": 3 },
  "leadsTo": ["differential-equations", "real-analysis"],
  "contributors": ["newton", "leibniz"],
  "prerequisites": [
    { "id": "trigonometry", "strength": 70 },
    { "id": "algebra", "strength": 85 }
  ],
  "notes": "Independently developed by Newton and Leibniz..."
}
```

### People (`src/lib/data/people.json`)
```json
{
  "id": "newton",
  "name": "Isaac Newton",
  "born": 1643,
  "died": 1727,
  "image": "/images/people/newton.jpg",
  "gender": 1
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/abaj8494/math-map.git
cd math-map

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open your browser to http://localhost:5173
```

### Building for Production

```bash
# Build the static site
npm run build

# Preview the production build locally
npm run preview

# Deploy (the built site is in the docs/ folder)
git add docs/
git commit -m "Update build"
git push origin main
```

## 🎮 Usage Guide

### Navigation
- **Left Click + Drag**: Rotate the view
- **Right Click + Drag** or **Two-Finger Drag**: Pan the camera
- **Scroll** or **Pinch**: Zoom in/out
- **Click Card**: Zoom to and select a topic
- **Click Arrow**: Highlight a relationship connection

### Interface Elements
- **🔍 Search Button** (bottom-right): Find paths between two topics
- **📋 List View Button** (bottom-right): Switch to scrollable list mode
- **✕ Close Button** (overlay top-right): Close the topic detail panel
- **← Back Button** (overlay top-left): Return to previous topic

### Exploring Topics
1. **Navigate** through the 3D space to find interesting topics
2. **Click a card** to zoom in and view details
3. **Read contributors** and click names to see their photos and dates
4. **Explore connections** by clicking "Leads To" topics to teleport
5. **Check prerequisites** to understand what background knowledge is needed
6. **Flip the card** (rotate view) to see notes and prerequisites on the back

## 📸 Adding Contributor Images

The project includes Python scripts (from `shrine-svelte-ref`) to automatically fetch images from Wikimedia Commons:

```bash
cd src/lib/data

# Copy the script from shrine-svelte-ref
cp ../../../shrine-svelte-ref/src/lib/data/get_img.py .

# Install dependencies
pip install requests tqdm

# Run the image fetcher
python3 get_img.py
```

The script will:
1. Look up each person's Wikipedia page
2. Find their Wikidata Q-ID
3. Download their portrait from Wikimedia Commons
4. Save images to `static/images/people/`

**Note**: Many contributors still need images. Contributions welcome!

## 🤝 Contributing

We welcome contributions! Areas that need work:

- **Missing Contributors**: Many mathematicians are referenced but not in `people.json`
- **Missing Images**: Use `get_img.py` to fetch more contributor photos
- **Topic Additions**: Add more mathematical topics to `topics.json`
- **Relationship Refinement**: Improve the accuracy of "leads to" connections
- **Historical Notes**: Expand the notes with more historical context
- **Bug Fixes**: Report and fix any issues you find

### Adding a New Topic

1. Edit `src/lib/data/topics.json`
2. Follow the existing structure
3. Ensure all `contributors` exist in `people.json`
4. Ensure all `prerequisites` and `leadsTo` reference valid topic IDs
5. Test in development mode
6. Submit a pull request!

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Wikimedia Commons**: For providing freely accessible portraits
- **Three.js Community**: For excellent 3D graphics tools
- **Mathematical Community**: For centuries of brilliant discoveries
- **shrine-svelte-ref**: For the image fetching infrastructure

## 🔗 Links

- **Live Demo**: [https://abaj8494.github.io/math-map/](https://abaj8494.github.io/math-map/)
- **Repository**: [https://github.com/abaj8494/math-map](https://github.com/abaj8494/math-map)
- **Issues**: [https://github.com/abaj8494/math-map/issues](https://github.com/abaj8494/math-map/issues)

---

**Built with ❤️ by mathematicians, for mathematicians**
