<template>
  <div class="grid grid-cols-4 filter drop-shadow-lg pt-5">
    <div class="px-2 pb-4" v-for="product in productFilterList" :key="product.id"  @error="console.log('test')">
      <div class="bg-white col-span-1 p-3 sm:text-lg font-medium h-full rounded-md drop-shadow-xl relative" :class="{'cursor-pointer':showDetail}" @click="productInfo(product)">
        <div class="relative">
          <img :src="`${productUrl}/image/${product.productName}`"  class="md:rounded w-full" style="height: 25vw" @error="$event.target.src='https://cdn4.vectorstock.com/i/1000x1000/87/78/website-error-500-internal-server-error-artwork-vector-23988778.jpg'"/>

          <span class="md:absolute bottom-0 right-0 bg-cadet-dark text-white md:p-2 rounded">
            <div class="inline-flex px-1" >
              {{ new Date(product.manuDate).toISOString().slice(0, 10) }}
            </div>
          </span>
          <button class="absolute -top-2 -right-2 hover:opacity-50" @click="$emit('edit-data', product)" v-if="isEdit">
            <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.9479 7.84135L42.7778 16.3527C43.1076 16.7112 43.1076 17.2963 42.7778 17.6548L23.8194 38.2632L15.7639 39.2351C14.6875 39.3672 13.776 38.3764 13.8976 37.2063L14.7917 28.4497L33.75 7.84135C34.0799 7.48278 34.6181 7.48278 34.9479 7.84135ZM49.0104 5.6805L44.7743 1.07571C43.4549 -0.35857 41.3108 -0.35857 39.9826 1.07571L36.9097 4.41607C36.5799 4.77464 36.5799 5.35967 36.9097 5.71824L44.7396 14.2296C45.0694 14.5881 45.6076 14.5881 45.9375 14.2296L49.0104 10.8892C50.3299 9.44548 50.3299 7.11478 49.0104 5.6805ZM33.3333 32.6581V42.264H5.55556V12.0687H25.5035C25.7812 12.0687 26.0417 11.946 26.2413 11.7384L29.7135 7.96402C30.3733 7.24688 29.9045 6.02963 28.9757 6.02963H4.16667C1.86632 6.02963 0 8.05838 0 10.5589V43.7738C0 46.2744 1.86632 48.3031 4.16667 48.3031H34.7222C37.0226 48.3031 38.8889 46.2744 38.8889 43.7738V28.8837C38.8889 27.8741 37.7691 27.374 37.1094 28.0817L33.6371 31.8561C33.4462 32.0731 33.3333 32.3562 33.3333 32.6581Z" fill="#6CCFF6"/>
            </svg>
          </button>
        </div>
        <div class="flex flex-wrap md:pt-1">
          <p class="text-left lg:w-2/3">{{ product.productName }}</p>
          <p class="text-right lg:w-1/3">{{ product.price }}???</p>
        </div>
        <p class="text-gray-500 text-sm break-all des-text shortDes">
          &emsp;&emsp;{{ product.descript }}
        </p>
        <div class='flex justify-end mt-2 hover:opacity-50'>
          <button class="" @click="deleteData(product)" v-if="isEdit">
            <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6923 18.2073C26.1609 18.2073 28.5283 19.1707 30.2738 20.8855C32.0194 22.6003 33 24.9261 33 27.3512C33 29.7763 32.0194 32.1021 30.2738 33.8169C28.5283 35.5317 26.1609 36.4951 23.6923 36.4951C21.2238 36.4951 18.8563 35.5317 17.1108 33.8169C15.3652 32.1021 14.3846 29.7763 14.3846 27.3512C14.3846 24.9261 15.3652 22.6003 17.1108 20.8855C18.8563 19.1707 21.2238 18.2073 23.6923 18.2073ZM16.0769 0.750732C17.6478 0.750732 19.1544 1.36379 20.2652 2.45503C21.376 3.54628 22 5.02633 22 6.56959H30.4615C30.9104 6.56959 31.3408 6.74474 31.6582 7.05653C31.9756 7.36831 32.1538 7.79118 32.1538 8.23211C32.1538 8.67305 31.9756 9.09592 31.6582 9.4077C31.3408 9.71949 30.9104 9.89464 30.4615 9.89464H29.0315L28.2683 17.5207C25.9401 16.473 23.3128 16.2561 20.8393 16.9075C18.3658 17.5589 16.2011 19.0377 14.7185 21.0889C13.2359 23.1402 12.5282 25.6353 12.7175 28.1442C12.9068 30.6531 13.9811 33.0185 15.7554 34.8326H9.83569C8.68044 34.8327 7.56643 34.4107 6.71034 33.6486C5.85425 32.8866 5.31727 31.839 5.20385 30.7095L3.12231 9.89464H1.69231C1.24348 9.89464 0.813035 9.71949 0.495665 9.4077C0.178296 9.09592 0 8.67305 0 8.23211C0 7.79118 0.178296 7.36831 0.495665 7.05653C0.813035 6.74474 1.24348 6.56959 1.69231 6.56959H10.1538C10.1538 5.02633 10.7779 3.54628 11.8887 2.45503C12.9995 1.36379 14.506 0.750732 16.0769 0.750732ZM18.9809 22.5116L18.8625 22.6063L18.766 22.7227C18.6685 22.8615 18.6163 23.0262 18.6163 23.1949C18.6163 23.3635 18.6685 23.5282 18.766 23.667L18.8625 23.7834L22.4958 27.3512L18.8625 30.919L18.766 31.0354C18.6685 31.1742 18.6163 31.3389 18.6163 31.5075C18.6163 31.6762 18.6685 31.8409 18.766 31.9797L18.8625 32.0961L18.9809 32.1908C19.1222 32.2866 19.2899 32.3379 19.4615 32.3379C19.6332 32.3379 19.8009 32.2866 19.9422 32.1908L20.0606 32.0961L23.6923 28.5266L27.324 32.0961L27.4425 32.1908C27.5838 32.2866 27.7514 32.3379 27.9231 32.3379C28.0948 32.3379 28.2624 32.2866 28.4037 32.1908L28.5222 32.0961L28.6186 31.9797C28.7161 31.8409 28.7684 31.6762 28.7684 31.5075C28.7684 31.3389 28.7161 31.1742 28.6186 31.0354L28.5222 30.919L24.8888 27.3512L28.5222 23.7834L28.6186 23.667C28.7161 23.5282 28.7684 23.3635 28.7684 23.1949C28.7684 23.0262 28.7161 22.8615 28.6186 22.7227L28.5222 22.6063L28.4037 22.5116C28.2624 22.4158 28.0948 22.3645 27.9231 22.3645C27.7514 22.3645 27.5838 22.4158 27.4425 22.5116L27.324 22.6063L23.6923 26.1758L20.0606 22.6063L19.9422 22.5116C19.8217 22.4296 19.6816 22.3798 19.5357 22.3669C19.3897 22.3541 19.2429 22.3788 19.1095 22.4384L18.9809 22.5116ZM16.0769 4.07579C15.4037 4.07579 14.758 4.33853 14.282 4.80621C13.8059 5.27388 13.5385 5.90819 13.5385 6.56959H18.6154C18.6154 5.90819 18.3479 5.27388 17.8719 4.80621C17.3958 4.33853 16.7502 4.07579 16.0769 4.07579Z" fill="#FB3640"/>
            </svg>
          </button>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: "productList",
  emits: ["edit-data", "delete-data","show-detail","error-type"],
  inject: ["productUrl"],
  props: {
    isEdit: Boolean,
    brandId: null,
    showDetail: Boolean
  },
  data(){
    return {
      productList:[]
    }
  },
  methods: {
    productInfo(product){
      if(!this.showDetail){
        return;
      }
      this.$emit("show-detail",product)
    },
    async reload(){
      this.productList = await this.getProductList();
    },
    async getProductList() {
      try {
        const res = await fetch(this.productUrl);
        const data = res.json();
        return data;
      } catch (error) {
        this.$emit("error-type",error)
      }
    },
    async deleteData(product){
     try {
        await fetch(`${this.productUrl}/${product.productId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
      this.reload()
    }
  },
  computed: {
    productFilterList() {
      if(this.brandId == null) return this.productList;
        return this.productList.filter(list => {
        return list.brand.brandId == this.brandId
      })
    }
  },
    async created() {
      this.productList = await this.getProductList();
    }
  }
</script>

<style scoped>
.shortDes {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>