<template>
  <div id="form" class="md:p-5">
    <form
      @submit.prevent="submitform()"
      class="bg-helio-light md:p-7 flex flex-wrap md:rounded-md md:space-y-2"
    >
      <div class="md:w-full flex">
        <div class="md:w-1/2 flex flex-col">
          <label for="name">Product Name</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="md:w-11/12"
            type="text"
            id="Productname"
            name="Productname"
            v-model="Productname"
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
          name="cost"
          v-model="cost"
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
          v-if="!Edit"
          type="submit"
          class="bg-green-500 md:text-3xl font-bold md:py-5 md:px-8 hover:bg-green-light md:rounded-lg"
        >
          Add
        </button>
        <button
          v-if="Edit"
          type="submit"
          class="bg-green-500 md:text-3xl font-bold md:py-5 md:px-8 hover:bg-green-light md:rounded-lg"
        >
          Save Edit
        </button>
        <button
          v-if="Edit"
          class="bg-red md:text-3xl font-bold md:py-5 md:px-8 hover:bg-red-salsa md:rounded-lg"
          @click="cancel;$emit('cancel-form')"
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
    isEdit: Boolean,
    foodToEdit: null,
  },
  emits: ['cancel-form','reload-data'],
  inject: ["categoryUrl", "sizeUrl"],
  data() {
    return {
      Productname: "",
      Descript: "",
      Image_Path: "",
      mysize: [],
      CategoryList: [],
      SizeList: [],
      category: null,
      price: 0,
      choosesize: [],
      file: null,
      Edit: this.isEdit,
    };
  },
  methods: {
    submitform() {
      if (this.Edit) {
        this.editProduct();
      } else {
        this.addNewProduct();
      }
    },
    async getCategoryResult() {
      try {
        const res = await fetch(this.categoryUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    async getSizeResult() {
      try {
        const res = await fetch(this.sizeUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    async addNewProduct() {
      let Product = JSON.stringify({
        ProductName: this.Productname,
        price: this.price,
        descript: this.Descript,
        imagePath: this.Image_Path,
        category: this.category,
        sizeList: this.choosesize,
      });
      let data = new FormData();
      data.append("Product", Product);
      data.append("multipartFile", this.file);
      try {
        await fetch("http://localhost:8080/Product", {
          method: "POST",
          body: data,
        });
      } catch (error) {
        console.log(error);
      }
      this.cancel();
    },
    async editProduct() {
      let Product = JSON.stringify({
        ProductName: this.Productname,
        price: this.price,
        descript: this.Descript,
        imagePath: this.Image_Path,
        category: this.category,
        sizeList: this.choosesize,
      });
      let data = new FormData();
      let editImg = new FormData();
      data.append("Product", Product);
      if(this.file!==null){
      editImg.append("multipartFile", this.file);
       try {
        await fetch(`http://localhost:8080/Product/image/${this.foodToEdit.ProductId}`, {
          method: "PUT",
          body: editImg,
        });
      } catch (error) {
        console.log(error);
      }
      }
      try {
        await fetch(`http://localhost:8080/Product/${this.foodToEdit.ProductId}`, {
          method: "PUT",
          body: data,
        });
      } catch (error) {
        console.log(error);
      }
      this.$emit("reload-data")
      this.cancel();
    },
    onFileChange(event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      this.file = event.target.files[0];
      this.imagePath = this.file.name;
    },
    cancel() {
      this.Productname = "";
      this.Descript = "";
      this.cost = 0;
      this.price = 0;
      var image = document.getElementById("output");
      image.src = "";
      this.file= null
      this.category = null;
      this.choosesize = [];
    },
  },
  async created() {
    this.CategoryList = await this.getCategoryResult();
    this.SizeList = await this.getSizeResult();
    if (this.Edit) {
      this.Productname = this.foodToEdit.ProductName;
      this.Descript = this.foodToEdit.descript;
      this.cost = this.foodToEdit.cost;
      this.price = this.foodToEdit.price;
      var image = document.getElementById("output");
      image.src = `http://localhost:8080/Product/get/${this.foodToEdit.ProductName}`;
      this.image_Path = this.foodToEdit.imagePath;
      this.category = this.foodToEdit.category;
      this.choosesize = this.foodToEdit.sizeList;
    }
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
  padding: 1vw;
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
