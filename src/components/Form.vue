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
            placeholder="Please insert Product name..."
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="md:w-11/12"
            type="text"
            id="productName"
            name="productName"
            v-model="productName"
            @blur="checkName"
          />
          <p class="text-red" v-if="!validateName">
            product name cannot be empty!
          </p>
        </div>
        <div class="md:w-1/2 flex flex-col">
          <label for="date">Manufacturer Date</label>
          <input
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="lg:w-1/3"
            type="Date"
            id="date"
            name="date"
            v-model="date"
            @blur="checkDate"
          />
          <p class="text-red" v-if="!validateDate">
            product manufacturer date cannot be empty!
          </p>
        </div>
      </div>
      <div class="md:w-full flex flex-col">
        <label for="Des">Product Description</label>
        <textarea
          type="text"
          id="descript"
          name="descript"
          placeholder="Please insert Description..."
          v-model="descript"
          @blur="checkDescript"
        ></textarea>
        <p class="text-red" v-if="!validateDescript">
          product description cannot be empty!
        </p>
      </div>
      <div class="md:w-1/2 flex flex-col">
        <label for="price">Price</label>
        <input
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="md:w-11/12"
          type="number"
          name="price"
          v-model="price"
          @blur="checkPrice"
        />
        <p class="text-red" v-if="!validatePrice">
          product price cannot be empty!
        </p>
      </div>
      <div class="md:w-1/2 md:pt-10">
        <img id="output" width="200" />
        <input
          type="file"
          name="img"
          accept="image/*"
          id="file"
          @change="onFileChange($event)"
        />
        <p class="text-red" v-if="!validateFile">File cannot be empty!</p>
      </div>
      <div class="md:w-full">
        <div class="md:w-1/2 flex flex-col">
          <label for="brand">Brand</label>
          <div class="md:p-3 md:text-lg">
            <select
              id="brand"
              class=""
              name="brand"
              v-model="brand"
              @blur="checkBrand"
            >
              <option disabled value="">Please select one</option>
              <option :value="brand" v-for="brand in brandList" :key="brand.id">
                {{ brand.brandName }}
              </option>
            </select>
          </div>
          <p class="text-red" v-if="!validateBrand">Brand cannot be empty!</p>
        </div>
        <div class="flex flex-wrap">
          <label class="checkbox-inline w-full">Size</label>
          <div
            class="md:text-xl md:p-3 w-1/4  my-5 "
            v-for="size in sizeList"
            :key="size.id"
          >
            <div class="w-full">
              <input
                type="checkbox"
                :id="size.sizeId"
                name="size"
                :value="size"
                v-model="chooseSize"
                @blur="checkSize"
                class="hidden"
              />
              <label
                :for="size.sizeId"
                class=" bg-white cursor-pointer rounded-sm md:p-5 text-center border-2 border-gray-400 w-36"
                @click="focus($event)"
                @mouseover="hover($event)"
                @mouseleave="hover($event)"
                >{{ size.size }}</label
              >
            </div>
          </div>
          <p class="text-red" v-if="!validateSize">
            size is required at least 1 size
          </p>
        </div>


      </div>
      <div class="flex justify-end md:w-full md:space-x-5">
        <button
          v-if="!edit"
          type="submit"
          class="bg-green-500 md:text-3xl font-bold md:py-5 md:px-8 hover:bg-green-light md:rounded-lg"
        >
          Add
        </button>
        <button
          v-if="edit"
          type="submit"
          class="bg-green-500 md:text-3xl font-bold md:py-5 md:px-8 hover:bg-green-light md:rounded-lg"
        >
          Save Edit
        </button>
        <button
          v-if="edit"
          class="bg-red md:text-3xl font-bold md:py-5 md:px-8 hover:bg-red-salsa md:rounded-lg"
          @click="
            cancel;
            $emit('cancel-form');
          "
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
    isEdit: Boolean,
    productToEdit: null,
  },
  emits: ["cancel-form", "reload-data"],
  inject: ["brandUrl", "sizeUrl", "productUrl"],
  data() {
    return {
      productName: "",
      descript: "",
      imagePath: "",
      date: "",
      mySize: [],
      brandList: [],
      sizeList: [],
      brand: null,
      price: 0,
      chooseSize: [],
      file: null,
      edit: this.isEdit,
      productList: [],
      validateName: true,
      validateDate: true,
      validateDescript: true,
      validatePrice: true,
      validateBrand: true,
      validateSize: true,
      validateFile: true,
    };
  },
  methods: {
    hover(e) {
      if (e.target.style.backgroundColor == "yellow") {
        e.target.style.backgroundColor = "white";
        e.target.style.borderColor = "white";
      } else {
        e.target.style.backgroundColor = "yellow";
        e.target.style.borderColor = "black";
      }
    },
    focus(e) {
      if (e.target.style.backgroundColor == "yellow") {
        e.target.style.backgroundColor = "white";
        e.target.style.borderColor = "white";
      } else {
        e.target.style.backgroundColor = "yellow";
        e.target.style.borderColor = "black";
      }
    },
    submitform() {
      this.checkName();
      this.checkDate();
      this.checkDescript();
      this.checkPrice();
      this.checkBrand();
      this.checkSize();
      this.checkFIle();
      if (
        this.validateName &&
        this.validateDate &&
        this.validateDescript &&
        this.validatePrice &&
        this.validateBrand &&
        this.validateSize
      ) {
        if (this.edit) {
          this.editProduct();
        } else {
          this.addNewProduct();
        }
      } else {
        return;
      }
    },
    checkName() {
      if (this.productName == "") {
        this.validateName = false;
      } else {
        this.validateName = true;
      }
    },
    checkDate() {
      if (this.date == "") {
        this.validateDate = false;
      } else {
        this.validateDate = true;
      }
    },
    checkDescript() {
      if (this.descript == "") {
        this.validateDescript = false;
      } else {
        this.validateDescript = true;
      }
    },
    checkPrice() {
      if (this.price == "") {
        this.validatePrice = false;
      } else {
        this.validatePrice = true;
      }
    },
    checkBrand() {
      if (this.brand == null) {
        this.validateBrand = false;
      } else {
        this.validateBrand = true;
      }
    },
    checkSize() {
      if (this.chooseSize.length == 0) {
        this.validateSize = false;
      } else {
        this.validateSize = true;
      }
    },
    checkFIle() {
      if (this.file == null) {
        this.validateFile = false;
      } else {
        this.validateFile = true;
      }
    },
    async getBrandResult() {
      try {
        const res = await fetch(this.brandUrl);
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
    async getProductList() {
      try {
        const res = await fetch(this.productUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    async addNewProduct() {
      let product = JSON.stringify({
        productName: this.productName,
        manuDate: this.date,
        price: this.price,
        descript: this.descript,
        imagePath: this.imagePath,
        brand: this.brand,
        sizeList: this.chooseSize,
      });
      console.log(this.date);
      let data = new FormData();
      data.append("product", product);
      data.append("multipartFile", this.file);
      try {
        await fetch(this.productUrl, {
          method: "POST",
          body: data,
        });
      } catch (error) {
        console.log(error);
      }
      this.cancel();
    },
    async editProduct() {
      let product = JSON.stringify({
        productName: this.productName,
        manuDate: this.date,
        price: this.price,
        descript: this.descript,
        imagePath: this.imagePath,
        brand: this.brand,
        sizeList: this.chooseSize,
      });
      let data = new FormData();
      let editImg = new FormData();
      data.append("product", product);
      if (this.file !== null) {
        editImg.append("multipartFile", this.file);
        try {
          await fetch(
            `${this.productUrl}/image/${this.productToEdit.productId}`,
            {
              method: "PUT",
              body: editImg,
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
      try {
        await fetch(
          `${this.productUrl}/${this.productToEdit.productId}`,
          {
            method: "PUT",
            body: data,
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("reload-data");
      this.cancel();
    },
    onFileChange(event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      this.file = event.target.files[0];
      this.imagePath = this.file.name;
    },
    cancel() {
      this.productName = "";
      this.date = "";
      this.descript = "";
      this.price = 0;
      var image = document.getElementById("output");
      image.src = "";
      this.file = null;
      this.brand = null;
      this.chooseSize = [];
    },
  },
  async created() {
    this.brandList = await this.getBrandResult();
    this.sizeList = await this.getSizeResult();
    this.productList = await this.getProductList();
    if (this.edit) {
      this.productName = this.productToEdit.productName;
      this.date = new Date(this.productToEdit.manuDate)
        .toISOString()
        .slice(0, 10);
      this.descript = this.productToEdit.descript;
      this.price = this.productToEdit.price;
      var image = document.getElementById("output");
      image.src = `${this.productUrl}/image/${this.productToEdit.productName}`;
      this.image_Path = this.productToEdit.imagePath;
      this.brand = this.productToEdit.brand;
      this.chooseSize = this.productToEdit.sizeList;
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
p {
  color: red;
  font-weight: 600;
}
</style>
