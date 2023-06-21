<template>
    <div class="particles-container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {
        this.initializeParticles();
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        initializeParticles() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const particleCount = 80;

            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.size = Math.random() * 5 + 1;
                    this.speedX = Math.random() * 3 - 1.5;
                    this.speedY = Math.random() * 3 - 1.5;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.size > 0.2) this.size -= 0.1;
                }

                draw() {
                    ctx.fillStyle = "white";
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                }
            }

            function createParticles() {
                for (let i = 0; i < particleCount; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    particles.push(new Particle(x, y));
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((particle, index) => {
                    particle.update();
                    particle.draw();
                    if (particle.size <= 0.2) {
                        particles.splice(index, 1);
                    }
                });
                requestAnimationFrame(animateParticles);
            }

            createParticles();
            animateParticles();
        },
        handleResize() {
            const canvas = this.$refs.canvas;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.initializeParticles();
        },
    },
};
</script>

<style scoped>
.particles-container {
    background-color: #1abc9c;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
