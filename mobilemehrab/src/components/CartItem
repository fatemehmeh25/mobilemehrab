<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="item-image" />

    <div class="item-details">
      <h2 class="item-name">{{ item.name }}</h2>
      <p class="item-price">\${{ item.price.toFixed(2) }}</p>

      <div class="item-controls">
        <label>
          Qty:
          <input
            type="number"
            min="1"
            v-model.number="localQuantity"
            @change="updateQuantity"
            class="qty-input"
          />
        </label>

        <button @click="$emit('remove', item.id)" class="remove-btn">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localQuantity: this.item.quantity,
    }
  },
  methods: {
    updateQuantity() {
      this.$emit('update', {
        id: this.item.id,
        quantity: this.localQuantity,
      })
    },
  },
}
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}

.item-details {
  flex: 1;
}

.item-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.item-price {
  color: #555;
  margin-bottom: 0.75rem;
}

.item-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.qty-input {
  width: 60px;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.remove-btn {
  background: none;
  border: none;
  color: #c00;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .item-controls {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
