<script>
export default {
  data() {
    return {
      cards: [
        {
          heading: "Learn from the best",
          description:
            "Amet minim  non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.",
        },
        {
          heading: "100% online classes",
          description:
            "Amet minim mollit  deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.",
        },
        {
          heading: "Get paid while learning",
          description:
            "Amet minim mollit non  ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.",
        },
        {
          heading: "Work on real project",
          description:
            "Amet minim mollit non deserunt  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.",
        },
      ],
    };
  },
  methods: {
    next() {
      const first = this.cards.shift();
      this.cards = this.cards.concat(first);
    },
    previous() {
      const last = this.cards.pop();
      this.cards = [last].concat(this.cards);
    },
  },
};
</script>

<template>
  <div class="card-container">
    <transition-group class="carousel" tag="div">
      <div class="card" v-for="(card, x) in cards" :key="x">
        <p class="heading">{{ card.heading }}</p>
        <p class="body">{{ card.description }}</p>
      </div>
    </transition-group>
    <div class="carousel-controls">
      <button class="carousel-controls__button" @click="previous">&#60;</button>
      <button class="carousel-controls__button" @click="next">&#62;</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 292px;
  height: 202px;
  left: 136px;
  top: 902px;
  padding: 26px;
}

.card-container .carousel {
  display: flex;
  justify-content: space-between;
}

.card:nth-child(odd) {
  background: rgba(117, 87, 211, 0.1);
}

.card:nth-child(even) {
  background: var(--accent-color);
}

.heading {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 12px;
  letter-spacing: 0.01em;
  color: var(--text-color);
}

.body {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  letter-spacing: 0.01em;
}
.carousel-controls__button {
  display: none;
}

@media screen and (max-width: 992px) {
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .card {
    flex: 0 0 100%;
    justify-content: center;
    transition: all 0.3s;
  }

  .carousel-controls {
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
  .carousel-controls__button {
    cursor: pointer;
    display: block;
    background: var(--accent-color2);
    border: 0;
    color: #fff;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 18px;
  }
}
</style>