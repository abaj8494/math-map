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
	let previousCard = null;
	let selectedArrow = null;
	let hoveredPerson = null;
	let searchVisible = false;
	let searchFrom = '';
	let searchTo = '';
	let pathResult = null;
	let viewMode = '3d'; // '3d' or 'list'
	let sortBy = 'year'; // 'year', 'name', 'category', 'type', 'difficulty'
	let difficultyFilter = 'All'; // 'All', 'High School', 'UGrad', 'PGrad', 'Research'
	
	// ========== SPACING PARAMETERS (TWEAK THESE) ==========
	const CARD_SPACING_X = 600;  // Timeline spread (tripled from 200)
	const CARD_SPACING_Y = 48;   // Category vertical spread (tripled from 18)
	const CARD_SPACING_Z = 75;   // Category depth spread (tripled from 25)
	const CARD_THICKNESS = 0.3;  // Card 3D thickness/depth
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
	
	// Difficulty colors for tags
	const difficultyColors = {
		'High School': '#22c55e',  // Green
		'UGrad': '#3b82f6',         // Blue
		'PGrad': '#f59e0b',         // Orange
		'Research': '#ef4444'       // Red
	};
	
	// Position cards in 3D space based on year and category
	function calculateCardPosition(topic, index, topicsInCategory) {
		const yearNormalized = (topic.year + 600) / 2700; // Normalize from -350 to 2025
		const xPos = (yearNormalized - 0.5) * CARD_SPACING_X; // Timeline along X axis
		
		// Separate Pure Math (below) and Applied Math (above) the timeline
		const isPureMath = topic.type === 'Pure Math';
		const typeOffset = isPureMath ? -1 : 1; // Below for Pure, Above for Applied
		
		// Cluster by category within each type
		const categories = Object.keys(categoryColors);
		const categoryIndex = categories.indexOf(topic.category);
		
		// Add some variation within category
		const categoryOffset = (index / topicsInCategory) - 0.5;
		const yPos = typeOffset * (categoryIndex * 4 + 8) + categoryOffset * 2.5;
		const zPos = categoryOffset * CARD_SPACING_Z;
		
		return new THREE.Vector3(xPos, yPos, zPos);
	}
	
	// Create a card mesh in 3D space with front and back textures
	function createCardMesh(topic, position) {
		const cardWidth = 5;
		const cardHeight = 7;
		
		// Create card group
		const cardGroup = new THREE.Group();
		cardGroup.userData = { topic, type: 'card' };
		
		const borderColor = categoryColors[topic.category] || '#ffffff';
		const borderWidth = 20;
		
		// ===== CREATE FRONT TEXTURE (basic info, 1.5x larger fonts) =====
		const frontCanvas = document.createElement('canvas');
		const frontCtx = frontCanvas.getContext('2d');
		frontCanvas.width = 768;
		frontCanvas.height = 1024;
		
		// Draw colored border
		frontCtx.fillStyle = borderColor;
		frontCtx.fillRect(0, 0, frontCanvas.width, frontCanvas.height);
		
		// Background (inner dark area)
		frontCtx.fillStyle = '#1a1a2e';
		frontCtx.fillRect(borderWidth, borderWidth, frontCanvas.width - borderWidth * 2, frontCanvas.height - borderWidth * 2);
		
		let yOffset = 60; // Account for border
		
		// Title (66px = 44 * 1.5)
		frontCtx.fillStyle = '#ffffff';
		frontCtx.font = 'bold 66px Arial';
		frontCtx.textAlign = 'center';
		frontCtx.textBaseline = 'top';
		
		// Word wrap the title
		const words = topic.name.split(' ');
		const lines = [];
		let currentLine = words[0];
		
		for (let i = 1; i < words.length; i++) {
			const word = words[i];
			const width = frontCtx.measureText(currentLine + ' ' + word).width;
			if (width < frontCanvas.width - 100) {
				currentLine += ' ' + word;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		}
		lines.push(currentLine);
		
		lines.forEach((line) => {
			frontCtx.fillText(line, frontCanvas.width / 2, yOffset);
			yOffset += 75;
		});
		
		// Difficulty Tag (beside title, centered below)
		if (topic.difficulty) {
			const diffColor = difficultyColors[topic.difficulty] || '#888888';
			frontCtx.fillStyle = diffColor;
			frontCtx.font = 'bold 28px Arial';
			frontCtx.textAlign = 'center';
			frontCtx.fillText(topic.difficulty.toUpperCase(), frontCanvas.width / 2, yOffset);
			yOffset += 45;
		}
		
		yOffset += 10;
		
		// Year (42px = 28 * 1.5)
		frontCtx.font = '42px Arial';
		frontCtx.fillStyle = '#aaaaaa';
		const yearText = topic.year < 0 ? `${Math.abs(topic.year)} BC` : `${topic.year} AD`;
		frontCtx.fillText(yearText, frontCanvas.width / 2, yOffset);
		yOffset += 65;
		
		// Category (36px = 24 * 1.5) - with text wrapping
		frontCtx.font = '36px Arial';
		frontCtx.fillStyle = borderColor;
		const categoryWords = topic.category.split(' ');
		let categoryLines = [];
		let categoryLine = categoryWords[0];
		
		for (let i = 1; i < categoryWords.length; i++) {
			const word = categoryWords[i];
			const width = frontCtx.measureText(categoryLine + ' ' + word).width;
			if (width < frontCanvas.width - 100) {
				categoryLine += ' ' + word;
			} else {
				categoryLines.push(categoryLine);
				categoryLine = word;
			}
		}
		categoryLines.push(categoryLine);
		
		categoryLines.forEach((line) => {
			frontCtx.fillText(line, frontCanvas.width / 2, yOffset);
			yOffset += 40;
		});
		
		yOffset += 20;
		
		// Type (30px = 20 * 1.5)
		frontCtx.font = '30px Arial';
		frontCtx.fillStyle = '#999999';
		frontCtx.fillText(topic.type, frontCanvas.width / 2, yOffset);
		yOffset += 50;
		
		// Contributors (on front as clickable list)
		if (topic.contributors && topic.contributors.length > 0) {
			frontCtx.fillStyle = '#cccccc';
			frontCtx.font = 'bold 26px Arial';
			frontCtx.textAlign = 'center';
			frontCtx.fillText('Contributors', frontCanvas.width / 2, yOffset);
			yOffset += 40;
			
			// Show contributor names (increased from 22px to 28px)
			frontCtx.font = '28px Arial';
			frontCtx.fillStyle = '#aaaaaa';
			frontCtx.textAlign = 'left';
			
			topic.contributors.slice(0, 8).forEach(id => {
				const person = people.find(p => p.id === id);
				const name = person ? person.name : id.charAt(0).toUpperCase() + id.slice(1);
				frontCtx.fillText(`• ${name}`, 60, yOffset);
				yOffset += 34;
			});
			
			if (topic.contributors.length > 8) {
				frontCtx.textAlign = 'center';
				frontCtx.fillStyle = '#999';
				frontCtx.fillText(`+${topic.contributors.length - 8} more`, frontCanvas.width / 2, yOffset);
				yOffset += 30;
			}
			
			frontCtx.textAlign = 'center';
			yOffset += 10;
		}
		
		// Leads To (on front, max 10)
		if (topic.leadsTo && topic.leadsTo.length > 0) {
			frontCtx.fillStyle = '#cccccc';
			frontCtx.font = 'bold 26px Arial';
			frontCtx.fillText('Leads To', frontCanvas.width / 2, yOffset);
			yOffset += 40;
			
			frontCtx.font = '26px Arial';  // Increased from 20px to 26px
			frontCtx.fillStyle = '#6366f1';
			frontCtx.textAlign = 'left';
			topic.leadsTo.slice(0, 10).forEach(targetId => {
				const targetTopic = topics.find(t => t.id === targetId);
				if (targetTopic) {
					const text = `➜ ${targetTopic.name}`;
					frontCtx.fillText(text, 60, yOffset);
					yOffset += 34;  // Increased from 30 to 34
				}
			});
			if (topic.leadsTo.length > 10) {
				frontCtx.textAlign = 'center';
				frontCtx.fillStyle = '#999';
				frontCtx.fillText(`+${topic.leadsTo.length - 10} more`, frontCanvas.width / 2, yOffset);
			}
		}
		
		const frontTexture = new THREE.CanvasTexture(frontCanvas);
		
		// ===== CREATE BACK TEXTURE (detailed info) =====
		const backCanvas = document.createElement('canvas');
		const backCtx = backCanvas.getContext('2d');
		backCanvas.width = 768;
		backCanvas.height = 1024;
		
		// Draw colored border
		backCtx.fillStyle = borderColor;
		backCtx.fillRect(0, 0, backCanvas.width, backCanvas.height);
		
		// Background (inner dark area)
		backCtx.fillStyle = '#1a1a2e';
		backCtx.fillRect(borderWidth, borderWidth, backCanvas.width - borderWidth * 2, backCanvas.height - borderWidth * 2);
		
		yOffset = 80;
		
		// Prerequisites (on back)
		if (topic.prerequisites && topic.prerequisites.length > 0) {
			backCtx.fillStyle = '#cccccc';
			backCtx.font = 'bold 22px Arial';
			backCtx.textAlign = 'center';
			backCtx.fillText('Prerequisites', backCanvas.width / 2, yOffset);
			yOffset += 35;
			
			backCtx.font = '24px Arial';  // Increased from 18px to 24px
			backCtx.fillStyle = '#aaaaaa';
			backCtx.textAlign = 'left';
			topic.prerequisites.forEach(prereq => {
				const prereqTopic = topics.find(t => t.id === prereq.id);
				if (prereqTopic) {
					const text = `• ${prereqTopic.name} (${prereq.strength}%)`;
					backCtx.fillText(text, 60, yOffset);
					yOffset += 32;  // Increased from 28 to 32
				}
			});
			backCtx.textAlign = 'center';
			yOffset += 20;
		}
		
		// Notes (on back)
		if (topic.notes) {
			backCtx.fillStyle = '#cccccc';
			backCtx.font = 'bold 22px Arial';
			backCtx.fillText('Notes', backCanvas.width / 2, yOffset);
			yOffset += 35;
			
			backCtx.font = '24px Arial';  // Increased from 18px to 24px
			backCtx.fillStyle = '#aaaaaa';
			backCtx.textAlign = 'left';
			
			// Word wrap notes
			const noteWords = topic.notes.split(' ');
			let noteLine = '';
			noteWords.forEach(word => {
				const testLine = noteLine + (noteLine ? ' ' : '') + word;
				const width = backCtx.measureText(testLine).width;
				if (width > backCanvas.width - 100 && noteLine) {
					backCtx.fillText(noteLine, 50, yOffset);
					yOffset += 32;  // Increased from 26 to 32
					noteLine = word;
				} else {
					noteLine = testLine;
				}
			});
			if (noteLine) {
				backCtx.fillText(noteLine, 50, yOffset);
			}
		}
		
		const backTexture = new THREE.CanvasTexture(backCanvas);
		
		// Create materials: different textures for front and back
		const frontMaterial = new THREE.MeshStandardMaterial({ 
			map: frontTexture,
			roughness: 0.7,
			metalness: 0.3
		});
		
		const backMaterial = new THREE.MeshStandardMaterial({ 
			map: backTexture,
			roughness: 0.7,
			metalness: 0.3
		});
		
		const edgeMaterial = new THREE.MeshStandardMaterial({
			color: borderColor,
			emissive: borderColor,
			emissiveIntensity: 0.0,
			roughness: 0.6,
			metalness: 0.4
		});
		
		// Materials array: [right, left, top, bottom, front, back]
		const materials = [
			edgeMaterial,  // right edge
			edgeMaterial,  // left edge
			edgeMaterial,  // top edge
			edgeMaterial,  // bottom edge
			frontMaterial, // front face
			backMaterial   // back face
		];
		
		const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, CARD_THICKNESS);
		const cardMesh = new THREE.Mesh(cardGeometry, materials);
		cardMesh.userData = { topic, type: 'cardMesh' };
		cardGroup.add(cardMesh);
		
		cardGroup.position.copy(position);
		return cardGroup;
	}
	
	// Create arrow between two cards (stops at card surfaces)
	function createArrow(fromPos, toPos, strength = 50) {
		const direction = new THREE.Vector3().subVectors(toPos, fromPos);
		const fullLength = direction.length();
		direction.normalize();
		
		// Arrow shaft thickness based on strength (50-100 -> 0.05-0.15)
		const thickness = 0.05 + ((strength - 50) / 50) * 0.1;
		
		// Arrow head dimensions
		const headHeight = thickness * 4;
		
		// Card half-width (cards are 5 units wide, so 2.5 from center to edge)
		const cardHalfWidth = 2.5;
		
		// Offset start position by card radius, end position by card radius + a tiny bit so tip touches
		const startOffset = cardHalfWidth;
		const endOffset = cardHalfWidth - headHeight * 0.5; // Arrow tip touches card surface
		
		const adjustedLength = fullLength - startOffset - endOffset;
		
		if (adjustedLength <= 0) return null; // Cards too close
		
		const arrowGroup = new THREE.Group();
		
		// Calculate start and end positions (offset from card centers)
		const startPos = fromPos.clone().add(direction.clone().multiplyScalar(startOffset));
		const endPos = toPos.clone().sub(direction.clone().multiplyScalar(endOffset));
		
		// Shaft
		const shaftGeometry = new THREE.CylinderGeometry(thickness, thickness, adjustedLength, 8);
		const shaftMaterial = new THREE.MeshStandardMaterial({
			color: 0x6366f1,
			emissive: 0x4f46e5,
			emissiveIntensity: 0.2,
			transparent: true,
			opacity: 0.6
		});
		const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
		
		// Position and rotate shaft (between adjusted positions)
		shaft.position.copy(startPos).add(direction.clone().multiplyScalar(adjustedLength / 2));
		shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
		
		arrowGroup.add(shaft);
		
		// Arrow head (cone points in +Y by default, we rotate it to point along direction)
		const headGeometry = new THREE.ConeGeometry(thickness * 2, headHeight, 8);
		const head = new THREE.Mesh(headGeometry, shaftMaterial);
		// Position the head so its base is at endPos and tip extends toward the card
		head.position.copy(endPos).add(direction.clone().multiplyScalar(headHeight * 0.5));
		head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
		arrowGroup.add(head);
		
		// Store original materials for reset
		arrowGroup.userData.originalMaterial = shaftMaterial.clone();
		arrowGroup.userData.isArrow = true;
		
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
		controls.maxDistance = 600; // Doubled for doubled spacing
		
		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambientLight);
		
		const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight1.position.set(10, 10, 10);
		scene.add(directionalLight1);
		
		const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
		directionalLight2.position.set(-10, -10, -10);
		scene.add(directionalLight2);
		
		// Add stars (expanded for doubled spacing)
		const starGeometry = new THREE.BufferGeometry();
		const starVertices = [];
		for (let i = 0; i < 1000; i++) {
			const x = (Math.random() - 0.5) * 1000;
			const y = (Math.random() - 0.5) * 1000;
			const z = (Math.random() - 0.5) * 1000;
			starVertices.push(x, y, z);
		}
		starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
		const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: STAR_SIZE });
		const stars = new THREE.Points(starGeometry, starMaterial);
		scene.add(stars);
		
		// Add timeline axis (horizontal line through the center)
		const timelineLength = CARD_SPACING_X + 20;
		const timelineGeometry = new THREE.CylinderGeometry(0.15, 0.15, timelineLength, 16);
		const timelineMaterial = new THREE.MeshStandardMaterial({
			color: 0x555555,
			emissive: 0x333333,
			emissiveIntensity: 0.3,
			metalness: 0.5,
			roughness: 0.5
		});
		const timeline = new THREE.Mesh(timelineGeometry, timelineMaterial);
		timeline.rotation.z = Math.PI / 2; // Rotate to horizontal
		timeline.position.set(0, 0, 0); // Center at origin
		scene.add(timeline);
		
		// Add labels for Pure Math and Applied Math
		const createLabel = (text, yPosition) => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = 512;
			canvas.height = 128;
			ctx.fillStyle = '#ffffff';
			ctx.font = 'bold 48px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(text, canvas.width / 2, canvas.height / 2);
			
			const texture = new THREE.CanvasTexture(canvas);
			const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
			const sprite = new THREE.Sprite(spriteMaterial);
			sprite.scale.set(15, 3.75, 1);
			sprite.position.set(-CARD_SPACING_X / 2 - 15, yPosition, 0);
			return sprite;
		};
		
		scene.add(createLabel('PURE MATH', -20));
		scene.add(createLabel('APPLIED MATH', 20));
		
		// Add TIME label above the timeline
		const timeLabel = createLabel('TIME', 0);
		timeLabel.position.set(-CARD_SPACING_X / 2 - 15, 0, 0);
		scene.add(timeLabel);
		
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
						if (arrow) {
							scene.add(arrow);
							arrowMeshes.push(arrow);
						}
					}
				});
			}
		});
		
		// Track user interaction
		let mouseDownPos = { x: 0, y: 0 };
		let mouseMoved = false;
		
		function onInteractionStart(event) {
			mouseMoved = false;
			mouseDownPos.x = event.clientX || (event.touches && event.touches[0].clientX) || 0;
			mouseDownPos.y = event.clientY || (event.touches && event.touches[0].clientY) || 0;
		}
		
		function onMouseMove(event) {
			if (mouseDownPos.x !== 0 || mouseDownPos.y !== 0) {
				const dx = (event.clientX || 0) - mouseDownPos.x;
				const dy = (event.clientY || 0) - mouseDownPos.y;
				// If mouse moved more than 5 pixels, it's a drag
				if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
					mouseMoved = true;
				}
			}
		}
		
		function onInteractionEnd() {
			// Reset after a short delay
			setTimeout(() => {
				mouseDownPos.x = 0;
				mouseDownPos.y = 0;
			}, 10);
		}
		
		renderer.domElement.addEventListener('mousedown', onInteractionStart);
		renderer.domElement.addEventListener('mousemove', onMouseMove);
		renderer.domElement.addEventListener('mouseup', onInteractionEnd);
		renderer.domElement.addEventListener('touchstart', onInteractionStart);
		renderer.domElement.addEventListener('touchend', onInteractionEnd);
		
		// Raycaster for clicking
		const raycaster = new THREE.Raycaster();
		raycaster.far = 1000; // Allow clicking on distant cards
		const mouse = new THREE.Vector2();
		
		function onMouseClick(event) {
			// Don't process clicks if user was dragging
			if (mouseMoved) {
				return;
			}
			
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			
			raycaster.setFromCamera(mouse, camera);
			
			// First check for arrow clicks
			const arrowIntersects = raycaster.intersectObjects(arrowMeshes, true);
			if (arrowIntersects.length > 0) {
				// Find clicked arrow - traverse up to find the arrow group
				let clickedArrow = null;
				for (let intersect of arrowIntersects) {
					let obj = intersect.object;
					while (obj) {
						if (obj.userData && obj.userData.isArrow) {
							clickedArrow = obj;
							break;
						}
						obj = obj.parent;
					}
					if (clickedArrow) break;
				}
				
				if (clickedArrow) {
					// Reset previous arrow if any
					if (selectedArrow && selectedArrow !== clickedArrow) {
						selectedArrow.children.forEach(child => {
							if (child.material) {
								child.material.color.set(0x6366f1);
								child.material.emissive.set(0x4f46e5);
								child.material.emissiveIntensity = 0.2;
								child.material.opacity = 0.6;
							}
						});
					}
					
					// Highlight the clicked arrow
					selectedArrow = clickedArrow;
					clickedArrow.children.forEach(child => {
						if (child.material) {
							child.material.color.set(0xffffff);
							child.material.emissive.set(0xcccccc);
							child.material.emissiveIntensity = 0.5;
							child.material.opacity = 1.0;
						}
					});
					return; // Don't check for card clicks
				}
			}
			
			// Then check for card clicks
			const intersects = raycaster.intersectObjects(cardMeshes, true);
			
			if (intersects.length > 0) {
				// Find clicked card - traverse up to find the card group
				let clickedCard = null;
				for (let intersect of intersects) {
					let obj = intersect.object;
					// Traverse up the hierarchy to find the card group
					while (obj) {
						if (obj.userData && obj.userData.type === 'card') {
							clickedCard = obj;
							break;
						}
						obj = obj.parent;
					}
					if (clickedCard) break;
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
		
		// Auto-select the earliest card on page load
		setTimeout(() => {
			const earliestTopic = [...topics].sort((a, b) => a.year - b.year)[0];
			if (earliestTopic) {
				const earliestCard = cardMeshes.find(m => m.userData.topic.id === earliestTopic.id);
				if (earliestCard) {
					selectedCard = earliestTopic;
					zoomToCard(earliestCard);
				}
			}
		}, 500); // Small delay to let scene fully initialize
	}
	
	function zoomToCard(cardMesh) {
		// Track previous card for back button
		if (selectedCard && selectedCard.id !== cardMesh.userData.topic.id) {
			previousCard = selectedCard;
		}
		
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
	
	function goToPreviousCard() {
		if (previousCard) {
			const prevCardMesh = cardMeshes.find(m => m.userData.topic.id === previousCard.id);
			if (prevCardMesh) {
				const temp = selectedCard;
				selectedCard = previousCard;
				previousCard = temp;
				zoomToCard(prevCardMesh);
				// Don't double-track - reset after navigation
				if (previousCard && selectedCard && previousCard.id === selectedCard.id) {
					previousCard = null;
				}
			}
		}
	}
	
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		
		// Highlight selected card (no rotation - cards stay fixed in 3D space)
		cardMeshes.forEach(cardGroup => {
			const isSelected = selectedCard && cardGroup.userData.topic.id === selectedCard.id;
			
			// Find the card mesh and update edge emissive intensity
			cardGroup.children.forEach(child => {
				if (child.userData && child.userData.type === 'cardMesh') {
					if (Array.isArray(child.material)) {
						// Update only the edge materials (first 4 in array: right, left, top, bottom)
						for (let i = 0; i < 4; i++) {
							if (child.material[i].emissive) {
								child.material[i].emissiveIntensity = isSelected ? 0.6 : 0.0;
							}
						}
					}
				}
			});
		});
		
		renderer.render(scene, camera);
	}
	
	function closeCardDetail() {
		selectedCard = null;
	}
	
	function toggleViewMode() {
		viewMode = viewMode === '3d' ? 'list' : '3d';
		if (viewMode === 'list') {
			searchVisible = false; // Close search when switching to list
		}
	}
	
	// Reactive statement to filter cards by difficulty
	$: if (cardMeshes.length > 0 && difficultyFilter) {
		cardMeshes.forEach(cardMesh => {
			const topic = cardMesh.userData.topic;
			if (difficultyFilter === 'All' || topic.difficulty === difficultyFilter) {
				cardMesh.visible = true;
			} else {
				cardMesh.visible = false;
			}
		});
		
		// Also hide/show corresponding arrows
		arrowMeshes.forEach(arrow => {
			arrow.visible = difficultyFilter === 'All';
		});
	}
	
	function getSortedTopics() {
		const sorted = [...topics];
		const difficultyOrder = { 'High School': 1, 'UGrad': 2, 'PGrad': 3, 'Research': 4 };
		switch (sortBy) {
			case 'year':
				return sorted.sort((a, b) => a.year - b.year);
			case 'name':
				return sorted.sort((a, b) => a.name.localeCompare(b.name));
			case 'category':
				return sorted.sort((a, b) => a.category.localeCompare(b.category) || a.year - b.year);
			case 'type':
				return sorted.sort((a, b) => a.type.localeCompare(b.type) || a.year - b.year);
			case 'difficulty':
				return sorted.sort((a, b) => {
					const orderA = difficultyOrder[a.difficulty] || 999;
					const orderB = difficultyOrder[b.difficulty] || 999;
					return orderA - orderB || a.year - b.year;
				});
			default:
				return sorted;
		}
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
						if (arrow) {
							arrow.children.forEach(child => {
								if (child.material) {
									child.material.opacity = 0.2;
								}
							});
							scene.add(arrow);
							arrowMeshes.push(arrow);
						}
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
				if (arrow) {
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

<div bind:this={container} class="scene-container" style="display: {viewMode === '3d' ? 'block' : 'none'}"></div>

<!-- List View -->
{#if viewMode === 'list'}
	<div class="list-view">
		<div class="list-header">
			<h1>Mathematical Topics</h1>
			<div class="sort-controls">
				<label for="sort-select">Sort by:</label>
				<select id="sort-select" bind:value={sortBy}>
					<option value="year">Year (Chronological)</option>
					<option value="name">Name (A-Z)</option>
					<option value="category">Category</option>
					<option value="type">Type (Pure/Applied)</option>
					<option value="difficulty">Difficulty</option>
				</select>
			</div>
		</div>
		
		<div class="list-cards">
			{#each getSortedTopics() as topic}
				<button 
					class="list-card"
					style="border-left: 4px solid {categoryColors[topic.category] || '#fff'}"
					on:click={() => {
						viewMode = '3d';
						setTimeout(() => {
							const card = cardMeshes.find(m => m.userData.topic.id === topic.id);
							if (card) {
								selectedCard = topic;
								zoomToCard(card);
							}
						}, 100);
					}}
				>
				<div class="list-card-header">
					<h3>{topic.name}</h3>
					<div class="header-right">
						{#if topic.difficulty}
							<span class="difficulty-badge" style="background: {difficultyColors[topic.difficulty]}">{topic.difficulty}</span>
						{/if}
						<span class="year">{topic.year < 0 ? `${Math.abs(topic.year)} BC` : `${topic.year} AD`}</span>
					</div>
				</div>
				{#if topic.aka && topic.aka.length > 0}
					<div class="list-card-aka">
						<strong>Also known as:</strong> {topic.aka.join(', ')}
					</div>
				{/if}
				{#if topic.notableYears && topic.notableYears.length > 0}
					<div class="list-card-notable">
						<strong>Notable Years:</strong> {topic.notableYears.map(y => y < 0 ? `${Math.abs(y)} BC` : `${y} AD`).join(', ')}
					</div>
				{/if}
				<div class="list-card-meta">
					<span class="badge" style="background: {categoryColors[topic.category]}">{topic.category}</span>
					<span class="type">{topic.type}</span>
				</div>
					{#if topic.contributors && topic.contributors.length > 0}
						{@const contribNames = topic.contributors.slice(0, 4).map(id => {
							const person = people.find(p => p.id === id);
							return person ? person.name : id.charAt(0).toUpperCase() + id.slice(1);
						}).join(', ')}
						<div class="list-card-contributors">
							<strong>Contributors:</strong>
							{contribNames}
							{#if topic.contributors.length > 4}
								<span class="more">+{topic.contributors.length - 4} more</span>
							{/if}
						</div>
					{/if}
					{#if topic.notes}
						<p class="list-card-notes">{topic.notes}</p>
					{/if}
					<div class="list-card-footer">
						Click to view in 3D →
					</div>
				</button>
			{/each}
		</div>
	</div>
{/if}

<!-- Back Button (top left) -->
{#if viewMode === '3d' && previousCard}
	<button
		class="back-button"
		on:click={goToPreviousCard}
		aria-label="Go to previous card"
	>
		← Back
	</button>
{/if}

<!-- View Mode Button -->
<button
	class="view-button"
	on:click={toggleViewMode}
	aria-label="Toggle view mode"
>
	{viewMode === '3d' ? '📋' : '🌌'}
</button>

<!-- Difficulty Filter Dropdown (only in 3D mode) -->
{#if viewMode === '3d'}
	<div class="difficulty-filter">
		<select bind:value={difficultyFilter} aria-label="Filter by difficulty">
			<option value="All">All Levels</option>
			<option value="High School">High School</option>
			<option value="UGrad">Undergraduate</option>
			<option value="PGrad">Postgraduate</option>
			<option value="Research">Research</option>
		</select>
	</div>
{/if}

<!-- Search Button -->
{#if viewMode === '3d'}
	<button
		class="search-button"
		on:click={toggleSearch}
		aria-label="Search paths"
	>
		🔍
	</button>
{/if}

<!-- Search Panel -->
{#if searchVisible}
	<div class="search-panel">
		<button class="close-search-button" on:click={toggleSearch}>✕</button>
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

<!-- Cards are directly clickable - no popup needed -->

<!-- Card Interaction Overlay when viewing a card -->
{#if selectedCard && viewMode === '3d'}
	<div class="card-overlay-panel">
		<button class="overlay-close-button" on:click={() => selectedCard = null}>✕</button>
		<h2>{selectedCard.name}</h2>
		
		<!-- Contributors Section -->
		{#if selectedCard.contributors && selectedCard.contributors.length > 0}
			<div class="overlay-section">
				<h3>👥 Contributors</h3>
				<div class="overlay-grid">
					{#each selectedCard.contributors as contributorId}
						{@const person = people.find(p => p.id === contributorId)}
						{#if person}
							<button 
								class="overlay-button"
								on:click={() => hoveredPerson = hoveredPerson?.id === person.id ? null : person}
							>
								{person.name}
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- Leads To Section -->
		{#if selectedCard.leadsTo && selectedCard.leadsTo.length > 0}
			<div class="overlay-section">
				<h3>➜ Leads To</h3>
				<div class="overlay-grid">
					{#each selectedCard.leadsTo as targetId}
						{@const targetTopic = topics.find(t => t.id === targetId)}
						{#if targetTopic}
						<button 
							class="overlay-button leads-button"
							on:click={() => {
								const targetCard = cardMeshes.find(m => m.userData.topic.id === targetId);
								if (targetCard) {
									previousCard = selectedCard;
									selectedCard = targetTopic;
									zoomToCard(targetCard);
								}
							}}
						>
								{targetTopic.name}
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- Prerequisites Section -->
		{#if selectedCard.prerequisites && selectedCard.prerequisites.length > 0}
			<div class="overlay-section">
				<h3>📚 Prerequisites</h3>
				<div class="overlay-grid">
					{#each selectedCard.prerequisites as prereq}
						{@const prereqTopic = topics.find(t => t.id === prereq.id)}
						{#if prereqTopic}
							<button 
								class="overlay-button prereq-button"
								on:click={() => {
									const targetCard = cardMeshes.find(m => m.userData.topic.id === prereq.id);
									if (targetCard) {
										previousCard = selectedCard;
										selectedCard = prereqTopic;
										zoomToCard(targetCard);
									}
								}}
							>
								{prereqTopic.name}
								<span class="strength-badge">{prereq.strength}%</span>
							</button>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}

<!-- Person Detail Card -->
{#if hoveredPerson}
	<div class="person-detail-card">
		<button class="close-person" on:click={() => hoveredPerson = null}>✕</button>
		{#if hoveredPerson.img}
			<img src={hoveredPerson.img} alt={hoveredPerson.name} />
		{:else}
			<div class="placeholder-img">{hoveredPerson.name.split(' ').map(n => n[0]).join('')}</div>
		{/if}
		<h3>{hoveredPerson.name}</h3>
		{#if hoveredPerson.born || hoveredPerson.died}
			<p class="dates">
				{#if hoveredPerson.born}
					Born: {hoveredPerson.born}
				{/if}
				{#if hoveredPerson.died}
					<br>Died: {hoveredPerson.died}
				{/if}
			</p>
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
	
	.back-button {
		position: fixed;
		top: 2rem;
		left: 2rem;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		background: rgba(99, 102, 241, 0.9);
		color: white;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		transition: all 0.2s;
		z-index: 100;
	}
	
	.back-button:hover {
		transform: translateX(-3px);
		background: rgba(99, 102, 241, 1);
	}
	
	.view-button {
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
	
	.view-button:hover {
		transform: scale(1.1);
	}
	
	.search-button {
		position: fixed;
		bottom: 2rem;
		right: 6.5rem;
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
	
	.difficulty-filter {
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 100;
	}
	
	.difficulty-filter select {
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		background: rgba(26, 26, 46, 0.95);
		color: #ffffff;
		border: 1px solid rgba(99, 102, 241, 0.5);
		font-size: 1rem;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		transition: all 0.2s;
	}
	
	.difficulty-filter select:hover {
		border-color: rgba(99, 102, 241, 0.8);
		background: rgba(99, 102, 241, 0.2);
	}
	
	.difficulty-filter select:focus {
		outline: none;
		border-color: rgba(99, 102, 241, 1);
		box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
	}
	
	.list-view {
		width: 100vw;
		height: 100vh;
		overflow-y: auto;
		background: var(--cosmos-bg);
		padding: 2rem;
	}
	
	.list-header {
		max-width: 1200px;
		margin: 0 auto 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 2px solid rgba(99, 102, 241, 0.5);
	}
	
	.list-header h1 {
		color: #eee;
		font-size: 2rem;
		margin: 0;
	}
	
	.sort-controls {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.sort-controls label {
		color: #aaa;
		font-size: 0.9rem;
	}
	
	.sort-controls select {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid rgba(99, 102, 241, 0.5);
		background: rgba(26, 26, 46, 0.8);
		color: #eee;
		font-size: 1rem;
		cursor: pointer;
	}
	
	.list-cards {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		gap: 1.5rem;
	}
	
	.list-card {
		background: rgba(26, 26, 46, 0.95);
		border-radius: 1rem;
		padding: 1.5rem;
		cursor: pointer;
		transition: all 0.3s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}
	
	.list-card:hover {
		transform: translateX(8px);
		box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
		background: rgba(26, 26, 46, 1);
	}
	
	.list-card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	
	.list-card-header h3 {
		color: #eee;
		margin: 0;
		font-size: 1.5rem;
	}
	
	.list-card-header .year {
		color: #aaa;
		font-size: 1rem;
		font-weight: 600;
	}
	
	.list-card-header .header-right {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}
	
	.difficulty-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		color: white;
		text-transform: uppercase;
	}
	
	.list-card-aka,
	.list-card-notable {
		color: #bbb;
		font-size: 0.9rem;
		margin-bottom: 0.75rem;
		font-style: italic;
	}
	
	.list-card-aka strong,
	.list-card-notable strong {
		color: #ddd;
		font-style: normal;
	}
	
	.list-card-meta {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-bottom: 1rem;
	}
	
	.badge {
		padding: 0.25rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: white;
	}
	
	.type {
		color: #999;
		font-size: 0.9rem;
	}
	
	.list-card-contributors {
		color: #aaa;
		font-size: 0.9rem;
		margin-bottom: 0.75rem;
	}
	
	.list-card-contributors strong {
		color: #ccc;
	}
	
	.list-card-contributors .more {
		color: #6366f1;
		font-weight: 600;
	}
	
	.list-card-notes {
		color: #bbb;
		font-size: 0.9rem;
		line-height: 1.5;
		margin: 0.75rem 0;
		font-style: italic;
	}
	
	.list-card-footer {
		color: #6366f1;
		font-size: 0.85rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(99, 102, 241, 0.3);
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
	
	.close-search-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: #aaa;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.25rem;
		line-height: 1;
		transition: color 0.2s;
	}
	
	.close-search-button:hover {
		color: #fff;
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
	
	.card-overlay-panel {
		position: fixed;
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
		background: rgba(26, 26, 46, 0.98);
		padding: 2rem;
		border-radius: 1rem;
		border: 2px solid rgba(99, 102, 241, 0.6);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
		z-index: 1000;
		max-width: 350px;
		max-height: 80vh;
		overflow-y: auto;
	}
	
	.overlay-close-button {
		position: absolute;
		top: 0.5rem;  /* Moved up from 1rem to 0.5rem */
		right: 0.5rem;  /* Moved right from 1rem to 0.5rem */
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: rgba(239, 68, 68, 0.3);
		color: white;
		border: 1px solid rgba(239, 68, 68, 0.5);
		font-size: 1.2rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		z-index: 10;
	}
	
	.overlay-close-button:hover {
		background: rgba(239, 68, 68, 0.6);
		transform: scale(1.1);
	}
	
	.card-overlay-panel h2 {
		margin: 0 0 1.5rem 0;
		color: #fff;
		font-size: 1.5rem;
		border-bottom: 2px solid rgba(99, 102, 241, 0.5);
		padding-bottom: 0.75rem;
	}
	
	.overlay-section {
		margin-bottom: 1.5rem;
	}
	
	.overlay-section h3 {
		margin: 0 0 0.75rem 0;
		color: #cccccc;
		font-size: 1.1rem;
		font-weight: 600;
	}
	
	.overlay-grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.overlay-button {
		background: rgba(99, 102, 241, 0.15);
		border: 1px solid rgba(99, 102, 241, 0.4);
		color: #aaaaaa;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 0.95rem;
		text-align: left;
		transition: all 0.2s;
		width: 100%;
	}
	
	.overlay-button:hover {
		background: rgba(99, 102, 241, 0.3);
		border-color: rgba(99, 102, 241, 0.7);
		color: #fff;
		transform: translateX(3px);
	}
	
	.leads-button {
		color: #6366f1;
	}
	
	.leads-button:hover {
		color: #818cf8;
	}
	
	.prereq-button {
		color: #f59e0b;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.prereq-button:hover {
		color: #fbbf24;
	}
	
	.strength-badge {
		background: rgba(245, 158, 11, 0.2);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.8rem;
		margin-left: 0.5rem;
	}
	
	.person-detail-card {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(26, 26, 46, 0.98);
		padding: 2rem;
		border-radius: 1rem;
		border: 2px solid rgba(99, 102, 241, 0.6);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
		z-index: 2000;
		min-width: 300px;
		max-width: 400px;
		text-align: center;
	}
	
	.person-detail-card img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
		border: 3px solid rgba(99, 102, 241, 0.5);
	}
	
	.placeholder-img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: rgba(99, 102, 241, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		font-weight: bold;
		color: #fff;
		margin: 0 auto 1rem;
		border: 3px solid rgba(99, 102, 241, 0.5);
	}
	
	.person-detail-card h3 {
		color: #fff;
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
	}
	
	.person-detail-card .dates {
		color: #aaa;
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
	}
	
	.close-person {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: #aaa;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.25rem;
		line-height: 1;
		transition: color 0.2s;
	}
	
	.close-person:hover {
		color: #fff;
	}
	
	@media (max-width: 768px) {
		.back-button {
			top: 1rem;
			left: 1rem;
			padding: 0.5rem 1rem;
			font-size: 0.9rem;
		}
		
		.card-overlay-panel {
			right: 1rem;
			left: 1rem;
			max-width: calc(100% - 2rem);
			max-height: 60vh;
			padding: 1.5rem;
		}
		
		.card-overlay-panel h2 {
			font-size: 1.25rem;
		}
		
		.person-detail-card {
			width: calc(100% - 2rem);
			max-width: 100%;
			padding: 1.5rem;
		}
		
		.search-panel {
			min-width: auto;
			width: calc(100% - 2rem);
		}
		
		.view-button {
			bottom: 1rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
			font-size: 1.25rem;
		}
		
		.search-button {
			bottom: 5rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
			font-size: 1.25rem;
		}
		
		.list-view {
			padding: 1rem;
		}
		
		.list-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
		
		.list-header h1 {
			font-size: 1.5rem;
		}
		
		.sort-controls {
			width: 100%;
		}
		
		.sort-controls select {
			flex: 1;
		}
		
		.list-card-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>

