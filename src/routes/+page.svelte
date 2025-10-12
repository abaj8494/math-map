<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import topics from '$lib/data/topics.json';
	import people from '$lib/data/people.json';
	
	let container;
	let scene, camera, renderer, controls;
	let cardMeshes = [];
	let arrowMeshes = [];
	let selectedCard = null;
	let hoveredPerson = null;
	let searchVisible = false;
	let searchFrom = '';
	let searchTo = '';
	let pathResult = null;
	let isUserInteracting = false;
	let interactionTimeout = null;
	
	// ========== SPACING PARAMETERS (TWEAK THESE) ==========
	const CARD_SPACING_X = 150;  // Timeline spread (increase for more space between years)
	const CARD_SPACING_Y = 12;   // Category vertical spread (increase for more vertical space)
	const CARD_SPACING_Z = 16;   // Category depth spread (increase for more depth separation)
	const STAR_SIZE = 0.1;       // Star point size (decrease for smaller stars)
	// ======================================================
	
	// Category colors for card borders
	const categoryColors = {
		'Foundations': '#8b5cf6',           // Purple
		'Algebra and Discrete': '#3b82f6', // Blue
		'Analysis': '#10b981',             // Green
		'Geometry and Topology': '#f59e0b', // Orange
		'Probability, Statistics and Stochastic Processes': '#ef4444', // Red
		'Optimisation and Control': '#ec4899', // Pink
		'Computation': '#06b6d4',          // Cyan
		'Physics': '#f97316'               // Deep Orange
	};
	
	// Position cards in 3D space based on year and category
	function calculateCardPosition(topic, index, topicsInCategory) {
		const yearNormalized = (topic.year + 600) / 2700; // Normalize from -350 to 2025
		const xPos = (yearNormalized - 0.5) * CARD_SPACING_X; // Timeline along X axis
		
		// Cluster by category
		const categories = Object.keys(categoryColors);
		const categoryIndex = categories.indexOf(topic.category);
		
		// Add some variation within category
		const categoryOffset = (index / topicsInCategory) - 0.5;
		const yPos = (categoryIndex - categories.length / 2) * CARD_SPACING_Y + categoryOffset * 3;
		const zPos = categoryOffset * CARD_SPACING_Z;
		
		return new THREE.Vector3(xPos, yPos, zPos);
	}
	
	// Create a card mesh in 3D space with full information
	function createCardMesh(topic, position) {
		const cardWidth = 5;
		const cardHeight = 7;
		const borderThickness = 0.15;
		
		// Create card group
		const cardGroup = new THREE.Group();
		cardGroup.userData = { topic, type: 'card' };
		
		// Main card background
		const cardGeometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
		const cardMaterial = new THREE.MeshStandardMaterial({
			color: 0x1a1a2e,
			side: THREE.DoubleSide,
			roughness: 0.7,
			metalness: 0.3
		});
		const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
		cardGroup.add(cardMesh);
		
		// Border with category color
		const borderColor = categoryColors[topic.category] || '#ffffff';
		const borderGeometry = new THREE.PlaneGeometry(
			cardWidth + borderThickness,
			cardHeight + borderThickness
		);
		const borderMaterial = new THREE.MeshStandardMaterial({
			color: borderColor,
			side: THREE.DoubleSide,
			emissive: borderColor,
			emissiveIntensity: 0.4
		});
		const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial);
		borderMesh.position.z = -0.01;
		cardGroup.add(borderMesh);
		
		// Create detailed card texture with all information
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		canvas.width = 768;
		canvas.height = 1024;
		
		// Background
		ctx.fillStyle = '#1a1a2e';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		let yOffset = 40;
		
		// Title
		ctx.fillStyle = '#ffffff';
		ctx.font = 'bold 44px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		
		// Word wrap the title
		const words = topic.name.split(' ');
		const lines = [];
		let currentLine = words[0];
		
		for (let i = 1; i < words.length; i++) {
			const word = words[i];
			const width = ctx.measureText(currentLine + ' ' + word).width;
			if (width < canvas.width - 80) {
				currentLine += ' ' + word;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		}
		lines.push(currentLine);
		
		lines.forEach((line) => {
			ctx.fillText(line, canvas.width / 2, yOffset);
			yOffset += 50;
		});
		
		yOffset += 10;
		
		// Year
		ctx.font = '28px Arial';
		ctx.fillStyle = '#aaaaaa';
		const yearText = topic.year < 0 ? `${Math.abs(topic.year)} BC` : `${topic.year} AD`;
		ctx.fillText(yearText, canvas.width / 2, yOffset);
		yOffset += 45;
		
		// Category
		ctx.font = '24px Arial';
		ctx.fillStyle = borderColor;
		ctx.fillText(topic.category, canvas.width / 2, yOffset);
		yOffset += 45;
		
		// Type
		ctx.font = '20px Arial';
		ctx.fillStyle = '#999999';
		ctx.fillText(topic.type, canvas.width / 2, yOffset);
		yOffset += 50;
		
		// Contributors
		if (topic.contributors && topic.contributors.length > 0) {
			ctx.fillStyle = '#cccccc';
			ctx.font = 'bold 22px Arial';
			ctx.fillText('Contributors', canvas.width / 2, yOffset);
			yOffset += 35;
			
			ctx.font = '18px Arial';
			ctx.fillStyle = '#aaaaaa';
			const contributors = topic.contributors
				.map(id => {
					const person = people.find(p => p.id === id);
					return person ? person.name : id;
				})
				.join(', ');
			
			// Word wrap contributors
			const contribWords = contributors.split(' ');
			let contribLine = '';
			contribWords.forEach(word => {
				const testLine = contribLine + (contribLine ? ' ' : '') + word;
				const width = ctx.measureText(testLine).width;
				if (width > canvas.width - 80 && contribLine) {
					ctx.fillText(contribLine, canvas.width / 2, yOffset);
					yOffset += 28;
					contribLine = word;
				} else {
					contribLine = testLine;
				}
			});
			if (contribLine) {
				ctx.fillText(contribLine, canvas.width / 2, yOffset);
				yOffset += 35;
			}
		}
		
		// Prerequisites
		if (topic.prerequisites && topic.prerequisites.length > 0) {
			ctx.fillStyle = '#cccccc';
			ctx.font = 'bold 22px Arial';
			ctx.fillText('Prerequisites', canvas.width / 2, yOffset);
			yOffset += 35;
			
			ctx.font = '18px Arial';
			ctx.fillStyle = '#aaaaaa';
			ctx.textAlign = 'left';
			topic.prerequisites.forEach(prereq => {
				const prereqTopic = topics.find(t => t.id === prereq.id);
				if (prereqTopic) {
					const text = `• ${prereqTopic.name} (${prereq.strength}%)`;
					ctx.fillText(text, 60, yOffset);
					yOffset += 28;
				}
			});
			ctx.textAlign = 'center';
			yOffset += 10;
		}
		
		// Leads To
		if (topic.leadsTo && topic.leadsTo.length > 0) {
			ctx.fillStyle = '#cccccc';
			ctx.font = 'bold 22px Arial';
			ctx.fillText('Leads To', canvas.width / 2, yOffset);
			yOffset += 35;
			
			ctx.font = '18px Arial';
			ctx.fillStyle = '#6366f1';
			ctx.textAlign = 'left';
			topic.leadsTo.forEach(targetId => {
				const targetTopic = topics.find(t => t.id === targetId);
				if (targetTopic) {
					const text = `➜ ${targetTopic.name}`;
					ctx.fillText(text, 60, yOffset);
					yOffset += 28;
				}
			});
		}
		
		const texture = new THREE.CanvasTexture(canvas);
		const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
		const sprite = new THREE.Sprite(spriteMaterial);
		sprite.scale.set(cardWidth * 0.95, cardHeight * 0.95, 1);
		sprite.position.z = 0.02;
		sprite.userData = { type: 'sprite', topic };
		cardGroup.add(sprite);
		
		cardGroup.position.copy(position);
		return cardGroup;
	}
	
	// Create arrow between two cards
	function createArrow(fromPos, toPos, strength = 50) {
		const direction = new THREE.Vector3().subVectors(toPos, fromPos);
		const length = direction.length();
		direction.normalize();
		
		// Arrow shaft thickness based on strength (50-100 -> 0.05-0.15)
		const thickness = 0.05 + ((strength - 50) / 50) * 0.1;
		
		const arrowGroup = new THREE.Group();
		
		// Shaft
		const shaftGeometry = new THREE.CylinderGeometry(thickness, thickness, length, 8);
		const shaftMaterial = new THREE.MeshStandardMaterial({
			color: 0x6366f1,
			emissive: 0x4f46e5,
			emissiveIntensity: 0.2,
			transparent: true,
			opacity: 0.6
		});
		const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
		
		// Position and rotate shaft
		shaft.position.copy(fromPos).add(direction.clone().multiplyScalar(length / 2));
		shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
		
		arrowGroup.add(shaft);
		
		// Arrow head
		const headGeometry = new THREE.ConeGeometry(thickness * 2, thickness * 4, 8);
		const head = new THREE.Mesh(headGeometry, shaftMaterial);
		head.position.copy(toPos).sub(direction.clone().multiplyScalar(thickness * 2));
		head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
		arrowGroup.add(head);
		
		return arrowGroup;
	}
	
	// Initialize Three.js scene
	function initScene() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000000);
		
		// Camera
		camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 50);
		
		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.appendChild(renderer.domElement);
		
		// Controls
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.screenSpacePanning = true;
		controls.minDistance = 10;
		controls.maxDistance = 300; // Increased for larger spacing
		
		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambientLight);
		
		const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight1.position.set(10, 10, 10);
		scene.add(directionalLight1);
		
		const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
		directionalLight2.position.set(-10, -10, -10);
		scene.add(directionalLight2);
		
		// Add stars
		const starGeometry = new THREE.BufferGeometry();
		const starVertices = [];
		for (let i = 0; i < 1000; i++) {
			const x = (Math.random() - 0.5) * 400;
			const y = (Math.random() - 0.5) * 400;
			const z = (Math.random() - 0.5) * 400;
			starVertices.push(x, y, z);
		}
		starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
		const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: STAR_SIZE });
		const stars = new THREE.Points(starGeometry, starMaterial);
		scene.add(stars);
		
		// Create cards
		const topicsByCategory = {};
		topics.forEach(topic => {
			if (!topicsByCategory[topic.category]) {
				topicsByCategory[topic.category] = [];
			}
			topicsByCategory[topic.category].push(topic);
		});
		
		topics.forEach((topic, index) => {
			const categoryTopics = topicsByCategory[topic.category];
			const indexInCategory = categoryTopics.indexOf(topic);
			const position = calculateCardPosition(topic, indexInCategory, categoryTopics.length);
			const cardMesh = createCardMesh(topic, position);
			scene.add(cardMesh);
			cardMeshes.push(cardMesh);
		});
		
		// Create arrows for "leadsTo" relationships
		topics.forEach(topic => {
			const fromCard = cardMeshes.find(m => m.userData.topic.id === topic.id);
			if (fromCard && topic.leadsTo && topic.leadsTo.length > 0) {
				topic.leadsTo.forEach(targetId => {
					const toCard = cardMeshes.find(m => m.userData.topic.id === targetId);
					if (toCard) {
						const arrow = createArrow(fromCard.position, toCard.position, 75);
						scene.add(arrow);
						arrowMeshes.push(arrow);
					}
				});
			}
		});
		
		// Track user interaction
		function onInteractionStart() {
			isUserInteracting = true;
			if (interactionTimeout) {
				clearTimeout(interactionTimeout);
			}
		}
		
		function onInteractionEnd() {
			// Wait a bit before allowing clicks again to avoid accidental clicks after drag
			if (interactionTimeout) {
				clearTimeout(interactionTimeout);
			}
			interactionTimeout = setTimeout(() => {
				isUserInteracting = false;
			}, 150);
		}
		
		renderer.domElement.addEventListener('mousedown', onInteractionStart);
		renderer.domElement.addEventListener('mouseup', onInteractionEnd);
		renderer.domElement.addEventListener('touchstart', onInteractionStart);
		renderer.domElement.addEventListener('touchend', onInteractionEnd);
		
		// Raycaster for clicking
		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();
		
		function onMouseClick(event) {
			// Don't process clicks if user was just interacting (dragging/rotating)
			if (isUserInteracting) {
				return;
			}
			
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(scene.children, true);
			
			if (intersects.length > 0) {
				// Find clicked card
				let clickedCard = null;
				for (let intersect of intersects) {
					let obj = intersect.object;
					while (obj.parent && !obj.userData.type) {
						obj = obj.parent;
					}
					if (obj.userData && obj.userData.type === 'card') {
						clickedCard = obj;
						break;
					}
				}
				
				if (clickedCard) {
					selectedCard = clickedCard.userData.topic;
					zoomToCard(clickedCard);
				}
			}
		}
		
		renderer.domElement.addEventListener('click', onMouseClick);
		
		// Handle window resize
		window.addEventListener('resize', onWindowResize);
		
		animate();
	}
	
	function zoomToCard(cardMesh) {
		const targetPosition = cardMesh.position.clone();
		// Increase distance for larger cards (was 15, now 18)
		const offset = new THREE.Vector3(0, 0, 18);
		const cameraTarget = targetPosition.clone().add(offset);
		
		// Smoothly animate camera
		const startPos = camera.position.clone();
		const startTarget = controls.target.clone();
		let progress = 0;
		
		function animateCamera() {
			progress += 0.03; // Slightly faster animation
			if (progress >= 1) {
				camera.position.copy(cameraTarget);
				controls.target.copy(targetPosition);
				controls.update();
				return;
			}
			
			camera.position.lerpVectors(startPos, cameraTarget, progress);
			controls.target.lerpVectors(startTarget, targetPosition, progress);
			controls.update();
			requestAnimationFrame(animateCamera);
		}
		
		animateCamera();
	}
	
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		
		// Highlight selected card and make sprites face camera
		cardMeshes.forEach(cardGroup => {
			const isSelected = selectedCard && cardGroup.userData.topic.id === selectedCard.id;
			
			// Find the border mesh and update its emissive intensity
			cardGroup.children.forEach(child => {
				if (child.material && child.material.emissive) {
					// This is the border mesh
					child.material.emissiveIntensity = isSelected ? 0.8 : 0.4;
				}
			});
		});
		
		renderer.render(scene, camera);
	}
	
	function closeCardDetail() {
		selectedCard = null;
	}
	
	function toggleSearch() {
		searchVisible = !searchVisible;
		if (!searchVisible) {
			pathResult = null;
		}
	}
	
	// Floyd-Warshall pathfinding
	function findPath() {
		const topicMap = {};
		topics.forEach((topic, index) => {
			topicMap[topic.id] = index;
		});
		
		const n = topics.length;
		const dist = Array(n).fill(null).map(() => Array(n).fill(Infinity));
		const next = Array(n).fill(null).map(() => Array(n).fill(null));
		
		// Initialize distances
		for (let i = 0; i < n; i++) {
			dist[i][i] = 0;
		}
		
		topics.forEach((topic, i) => {
			if (topic.leadsTo) {
				topic.leadsTo.forEach(targetId => {
					const j = topicMap[targetId];
					if (j !== undefined) {
						dist[i][j] = 1;
						next[i][j] = j;
					}
				});
			}
		});
		
		// Floyd-Warshall
		for (let k = 0; k < n; k++) {
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < n; j++) {
					if (dist[i][k] + dist[k][j] < dist[i][j]) {
						dist[i][j] = dist[i][k] + dist[k][j];
						next[i][j] = next[i][k];
					}
				}
			}
		}
		
		// Reconstruct path
		const fromIndex = topicMap[searchFrom];
		const toIndex = topicMap[searchTo];
		
		if (fromIndex === undefined || toIndex === undefined) {
			pathResult = { error: 'Invalid topic selection' };
			return;
		}
		
		if (dist[fromIndex][toIndex] === Infinity) {
			pathResult = { error: 'No route, try again' };
			return;
		}
		
		const path = [fromIndex];
		let current = fromIndex;
		while (current !== toIndex) {
			current = next[current][toIndex];
			path.push(current);
		}
		
		pathResult = {
			path: path.map(i => topics[i]),
			length: dist[fromIndex][toIndex]
		};
		
		// Highlight path in 3D
		highlightPath(pathResult.path);
	}
	
	function highlightPath(path) {
		// Remove old path arrows
		arrowMeshes.forEach(arrow => scene.remove(arrow));
		arrowMeshes = [];
		
		// Re-add normal arrows
		topics.forEach(topic => {
			const fromCard = cardMeshes.find(m => m.userData.topic.id === topic.id);
			if (fromCard && topic.leadsTo && topic.leadsTo.length > 0) {
				topic.leadsTo.forEach(targetId => {
					const toCard = cardMeshes.find(m => m.userData.topic.id === targetId);
					if (toCard) {
						const arrow = createArrow(fromCard.position, toCard.position, 75);
						arrow.children.forEach(child => {
							if (child.material) {
								child.material.opacity = 0.2;
							}
						});
						scene.add(arrow);
						arrowMeshes.push(arrow);
					}
				});
			}
		});
		
		// Add highlighted path arrows
		for (let i = 0; i < path.length - 1; i++) {
			const fromCard = cardMeshes.find(m => m.userData.topic.id === path[i].id);
			const toCard = cardMeshes.find(m => m.userData.topic.id === path[i + 1].id);
			if (fromCard && toCard) {
				const arrow = createArrow(fromCard.position, toCard.position, 100);
				const hue = (i / (path.length - 1)) * 0.8;
				const color = new THREE.Color().setHSL(hue, 1, 0.5);
				arrow.children.forEach(child => {
					if (child.material) {
						child.material.color = color;
						child.material.emissive = color;
						child.material.emissiveIntensity = 0.5;
						child.material.opacity = 1;
					}
				});
				scene.add(arrow);
				arrowMeshes.push(arrow);
			}
		}
	}
	
	onMount(() => {
		initScene();
		
		return () => {
			window.removeEventListener('resize', onWindowResize);
			if (renderer) {
				renderer.dispose();
			}
		};
	});
</script>

<div bind:this={container} class="scene-container"></div>

<!-- Search Button -->
<button
	class="search-button"
	on:click={toggleSearch}
	aria-label="Search paths"
>
	🔍
</button>

<!-- Search Panel -->
{#if searchVisible}
	<div class="search-panel">
		<h3>Find Path Between Topics</h3>
		<select bind:value={searchFrom}>
			<option value="">Select starting topic...</option>
			{#each topics as topic}
				<option value={topic.id}>{topic.name}</option>
			{/each}
		</select>
		<select bind:value={searchTo}>
			<option value="">Select destination topic...</option>
			{#each topics as topic}
				<option value={topic.id}>{topic.name}</option>
			{/each}
		</select>
		<button on:click={findPath} class="find-button">Find Path</button>
		
		{#if pathResult}
			{#if pathResult.error}
				<div class="error">{pathResult.error}</div>
			{:else}
				<div class="path-result">
					<h4>Path Found (Length: {pathResult.length})</h4>
					<ol>
						{#each pathResult.path as topic}
							<li>{topic.name}</li>
						{/each}
					</ol>
				</div>
			{/if}
		{/if}
	</div>
{/if}

<!-- Selected Card Indicator -->
{#if selectedCard}
	<div class="selected-indicator">
		<div class="indicator-content">
			<strong>{selectedCard.name}</strong> selected
			<button class="deselect-button" on:click={closeCardDetail}>✕</button>
		</div>
		{#if selectedCard.leadsTo && selectedCard.leadsTo.length > 0}
			<div class="leads-to-nav">
				<div class="nav-title">Jump to:</div>
				<div class="nav-buttons">
					{#each selectedCard.leadsTo as targetId}
						{@const targetTopic = topics.find(t => t.id === targetId)}
						{#if targetTopic}
							<button 
								class="nav-button"
								on:click={() => {
									const targetCard = cardMeshes.find(m => m.userData.topic.id === targetId);
									if (targetCard) {
										selectedCard = targetTopic;
										zoomToCard(targetCard);
									}
								}}
							>
								➜ {targetTopic.name}
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
	}
	
	.scene-container {
		width: 100vw;
		height: 100vh;
	}
	
	.search-button {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background: rgba(99, 102, 241, 0.9);
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		transition: transform 0.2s;
		z-index: 100;
	}
	
	.search-button:hover {
		transform: scale(1.1);
	}
	
	.search-panel {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(26, 26, 46, 0.95);
		padding: 2rem;
		border-radius: 1rem;
		border: 2px solid rgba(99, 102, 241, 0.5);
		min-width: 400px;
		max-width: 90vw;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
	
	.search-panel h3 {
		margin-top: 0;
		color: #eee;
	}
	
	.search-panel select,
	.find-button {
		width: 100%;
		padding: 0.75rem;
		margin: 0.5rem 0;
		border-radius: 0.5rem;
		border: 1px solid rgba(99, 102, 241, 0.5);
		background: rgba(16, 16, 30, 0.8);
		color: #eee;
		font-size: 1rem;
	}
	
	.find-button {
		background: rgba(99, 102, 241, 0.8);
		cursor: pointer;
		font-weight: 600;
		margin-top: 1rem;
	}
	
	.find-button:hover {
		background: rgba(99, 102, 241, 1);
	}
	
	.error {
		color: #ef4444;
		margin-top: 1rem;
		padding: 1rem;
		background: rgba(239, 68, 68, 0.1);
		border-radius: 0.5rem;
		font-weight: 600;
	}
	
	.path-result {
		margin-top: 1rem;
		padding: 1rem;
		background: rgba(16, 185, 129, 0.1);
		border-radius: 0.5rem;
		border: 1px solid rgba(16, 185, 129, 0.3);
	}
	
	.path-result h4 {
		margin-top: 0;
		color: #10b981;
	}
	
	.path-result ol {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}
	
	.path-result li {
		margin: 0.25rem 0;
		color: #eee;
	}
	
	.selected-indicator {
		position: fixed;
		top: 2rem;
		right: 2rem;
		background: rgba(26, 26, 46, 0.95);
		padding: 1rem 1.5rem;
		border-radius: 0.75rem;
		border: 2px solid rgba(99, 102, 241, 0.5);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
		z-index: 1000;
		max-width: 400px;
	}
	
	.indicator-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		color: #eee;
	}
	
	.deselect-button {
		background: none;
		border: none;
		color: #aaa;
		font-size: 1.25rem;
		cursor: pointer;
		padding: 0.25rem;
		line-height: 1;
		transition: color 0.2s;
	}
	
	.deselect-button:hover {
		color: #fff;
	}
	
	.leads-to-nav {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid rgba(99, 102, 241, 0.3);
	}
	
	.nav-title {
		color: #aaa;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}
	
	.nav-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.nav-button {
		background: rgba(99, 102, 241, 0.2);
		border: 1px solid rgba(99, 102, 241, 0.4);
		color: #6366f1;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 0.9rem;
		text-align: left;
		transition: all 0.2s;
	}
	
	.nav-button:hover {
		background: rgba(99, 102, 241, 0.3);
		border-color: rgba(99, 102, 241, 0.6);
		transform: translateX(4px);
	}
	
	@media (max-width: 768px) {
		.selected-indicator {
			top: auto;
			bottom: 1rem;
			right: 1rem;
			left: 1rem;
			max-width: calc(100% - 2rem);
		}
		
		.search-panel {
			min-width: auto;
			width: calc(100% - 2rem);
		}
		
		.search-button {
			bottom: 5rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
			font-size: 1.25rem;
		}
	}
</style>

