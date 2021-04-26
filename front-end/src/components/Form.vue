<template>
  <div>
    <form>
      <label for="name">Product Name</label>
      <input type="text" id="name" name="name" />
      <label for="Mdate">Manufacturer Date</label>
      <input type="Date" id="MDate" name="date" />
      <label for="Des">Product Description</label>
      <input type="text" id="Des" name="Des" />
      <label for="price">price</label>
      <input type="number" name="price" />
      <label for="Brand">Brand</label>
      <div class="">
        <select id="Brand" class="" name="brand">
          <option>Indiana</option>
          <option>Michigan</option>
          <option>Ohio</option>
        </select>
      </div>
      <img alt="Image here" />
      <input type="file" name="img" />
      <!-- <div v-for="color in colors" :key="colorId">
        <input type="checkbox" id="vehicle1" name="color.name + 'color.id'" value="Bike" />
        <label for="color.name+'color.id'"> {{color.name}}</label><br />
      </div> -->
      <button>Add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Form",
  props:{
      colors:null
  },
  data(){
      return {

      }
  }
};
</script>
