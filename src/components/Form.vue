<template>
  <div id="form" class="md:p-5">
    <form
      @submit.prevent="submitForm"
      class="bg-helio-light md:p-7 flex flex-wrap md:rounded-md md:space-y-2"
    >
      <div class="md:w-full flex">
        <div class="md:w-1/2 flex flex-col">
          <label for="name">Product Name</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="md:w-11/12"
            type="text"
            id="Menuname"
            name="Menuname"
          />
        </div>
        <div class="md:w-1/2 flex flex-col">
          <label for="Mdate">Manufacturer Date</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="lg:w-1/3"
            type="Date"
            id="MDate"
            name="date"
          />
        </div>
      </div>

      <div class="md:w-full flex flex-col">
        <label for="Des">Product Description</label>
        <textarea
          type="text"
          id="Descript"
          name="Descript"
          placeholder="Please insert description..."
        >
        </textarea>
      </div>
      <div class="md:w-1/2 flex flex-col">
        <label for="cost">Cost</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="w-11/12"
          type="number"
          name="cost"
        />
      </div>
      <div class="md:w-1/2 flex flex-col">
        <label for="price">Price</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="md:w-11/12"
          type="number"
          name="price"
        />
      </div>
      <div class="md:w-1/2">
        <img alt="Image here" />
        <input type="file" name="img" />
        <!-- <div v-for="color in colors" :key="colorId">
        <input type="checkbox" id="vehicle1" name="color.name + 'color.id'" value="Bike" />
        <label for="color.name+'color.id'"> {{color.name}}</label><br />
      </div> -->
      </div>
      <div class="md:w-1/2">
        <div class="md:w-1/2 flex flex-col">
          <label for="category">Category</label>
          <div class="md:p-3 md:text-lg">
            <select id="category" class="" name="category">
              <option value="1">Main Course</option>
              <option value="2">Beverage</option>
              <option value="3">Dessert</option>
            </select>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col">
          <h3 class="checkbox-inline">
            <input class="md:mr-1" type="checkbox" id="size1" name="size" value="{1,'xl'}"/>Extra Large (XL)
          </h3>
          <h3 class="checkbox-inline">
            <input class="mr-1" type="checkbox" id="size1" name="size" value="{2,'l'}"/>Large (L)
          </h3>
          <h3 class="checkbox-inline">
            <input class="md:mr-1" type="checkbox" id="size1" name="size" value="{3,'m'}"/>Medium (M)
          </h3>
          <h3 class="checkbox-inline">
            <input class="md:mr-1" type="checkbox" id="size1" name="size" value="{4,'s'}"/>Small (S)
          </h3>
        </div>
      </div>
      <div class="flex justify-end md:w-full md:space-x-5">
        <button
          class="bg-green-500 md:text-3xl font-bold md:py-5 md:px-8 hover:bg-green-light md:rounded-lg"
        >
          Add
        </button>
        <button
          class="bg-red md:text-3xl font-bold md:py-5 md:px-8 hover:bg-red-salsa md:rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    colors: null,
  },
  data() {
    return {
      Menuname: "",
      date: "",
      Descript: "",
      Costl: 0,
      Image_Path: "",
      category_cateid: 1,
      mysize: {},
    };
  },
};
</script>

<style scoped>
label {
  font-size: xx-large;
  font-weight: 600;
}
input {
  border: black;
  padding: 1%;
}
textarea {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2%;
}
button {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
option {
  padding: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
h3 {
  font-size: large;
  font-weight: 600;
}
</style>
