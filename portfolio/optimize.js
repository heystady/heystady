const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    -Math.random() * 500
  );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ color: 0x00ffe0, size: 0.5 });
const stars = new THREE.Points(geometry, material);
scene.add(stars);
document.querySelector('a[href="#contact"]').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
