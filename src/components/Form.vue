<template>
  <div id="form" class="md:p-5">
    <form
      @submit.prevent="submitform"
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
            v-model="Menuname"
          />
        </div>
        <!-- <div class="md:w-1/2 flex flex-col">
          <label for="Mdate">Manufacturer Date</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="lg:w-1/3"
            type="Date"
            id="MDate"
            name="date"
            v-model="date"
          />
        </div> -->
      </div>

      <div class="md:w-full flex flex-col">
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
      <div class="md:w-1/2 flex flex-col">
        <label for="cost">Cost</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="w-11/12"
          type="number"
          name="Costl"
          v-model="Costl"
        />
      </div>
      <div class="md:w-1/2 flex flex-col">
        <label for="price">Price</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="md:w-11/12"
          type="number"
          name="price"
          v-model="price"
        />
      </div>
      <div class="md:w-1/2">
        <img id="output" width="200" />
        <input
          type="file"
          name="img"
          accept="image/*"
          id="file"
          @change="onFileChange($event)"
        />
      </div>
      <div class="md:w-1/2">
        <div class="md:w-1/2 flex flex-col">
          <label for="category">Category</label>
          <div class="md:p-3 md:text-lg">
            <select id="category" class="" name="category" v-model="category">
              <option disabled value="">Please select one</option>
              <option
                :value="category"
                v-for="category in CategoryList"
                :key="category.id"
              >
                {{ category.cateName }}
              </option>
            </select>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col">
          <div v-for="size in SizeList" :key="size.id">
            <label class="checkbox-inline">
              <input
                type="checkbox"
                :id="size.id"
                name="size"
                :value="size"
                v-model="choosesize"
              />
              {{ size.size }}
            </label>
          </div>
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
  inject: ["categoryurl", "sizeurl"],
  data() {
    return {
      Menuname: "",
      date: "",
      Descript: "",
      Costl: 0,
      Image_Path: "",
      mysize: [],
      CategoryList: [],
      SizeList: [],
      category: null,
      price: 0,
      choosesize: [],
    };
  },
  methods: {
    submitform() {
      this.addNewMenu();
    },
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
    },
    async addNewMenu() {
      let Menu = JSON.stringify({
        menuName: this.Menuname,
        price: this.price,
        // date : this.date,
        descript: this.Descript,
        cost: this.Costl,
        imagePath: this.Image_Path,
        category: this.category,
        mysize: this.choosesize,
      });
      let data = new FormData();
      data.append("menu", Menu);
      try {
        await fetch("http://localhost:8080/menu", {
          method: "POST",
          body: data,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onFileChange(event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
    },
  },

  async created() {
    this.CategoryList = await this.getCategoryResult();
    this.SizeList = await this.getSizeResult();
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
