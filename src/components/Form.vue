<template>
  <div id="form" class="p-5">
    <form
      action="http://localhost:8080/menu/add"
      class="bg-helio-light p-7 flex flex-wrap rounded-md space-y-2"
    >
      <div class="w-full flex">
        <div class="w-1/2 flex flex-col">
          <label for="name">Product Name</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="w-11/12"
            type="text"
            id="Menuname"
            name="Menuname"
            v-model="Menuname"
          />
        </div>
        <div class="w-1/2 flex flex-col">
          <label for="Mdate">Manufacturer Date</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="w-1/3"
            type="Date"
            id="MDate"
            name="date"
            v-model="date"
          />
        </div>
      </div>

      <div class="w-full flex flex-col">
        <label for="Des">Product Description</label>
        <textarea
          type="text"
          id="Descript"
          name="Descript"
          placeholder="Please insert description..."
          v-model="Descript"
        >
        </textarea>
      </div>
      <div class="w-1/2 flex flex-col">
        <label for="cost">Cost</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="w-11/12"
          type="number"
          name="Costl"
          v-model="Costl"
        />
      </div>
      <div class="w-1/2 flex flex-col">
        <label for="price">Price</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="w-11/12"
          type="number"
          name="price"
          v-model="price"
        />
      </div>
      <div class="w-1/2">
        <img alt="Image here" />
        <input type="file" name="img" />
        <!-- <div v-for="color in colors" :key="colorId">
        <input type="checkbox" id="vehicle1" name="color.name + 'color.id'" value="Bike" />
        <label for="color.name+'color.id'"> {{color.name}}</label><br />
      </div> -->
      </div>
      <div class="w-1/2">
        <div class="w-1/2 flex flex-col">
          <label for="category">Category</label>
          <div class="">
            <select id="category" class="" name="category" v-model="category">
              <option disabled value="">Please select one</option>
              <option :value="category" v-for="category in CategoryList" :key="category.id">{{category.cateName}}</option>
            </select>
          </div>
        </div>
        <div class="w-1/2 flex flex-col">
        <div v-for="size in SizeList" :key="size.id">
          <input type="checkbox" :id="size.id" name="size" :value="size" v-model="mysize">
          <label :for="size.id">{{size.size}}</label>
        </div>
        </div>
      </div>
      <div class="flex justify-end w-full space-x-5">
        <button
          class="bg-green-500 text-3xl font-bold py-5 px-8 hover:bg-green-light rounded-lg"
        >
          Add
        </button>
        <button
          class="bg-red text-3xl font-bold py-5 px-8 hover:bg-red-salsa rounded-lg"
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
  inject:["categoryurl","sizeurl"],
  data() {
    return {
      Menuname:'',
      date:'',
      Descript:'',
      Costl:0,
      Image_Path:'',
      category_cateid: 1,
      mysize:[],
      CategoryList:[],
      SizeList:[]
    };
  },
  methods:{
    async getCategoryResult() {
      try {
        const res = await fetch(this.categoryurl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    async getSizeResult() {
      try {
        const res = await fetch(this.sizeurl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    }
  },

  async created(){
    this.CategoryList= await this.getCategoryResult()
    this.SizeList = await this.getSizeResult()
  }
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
</style>
