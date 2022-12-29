<template>
  <div class="content">
    <hello-world />

    <div>
      <RowColumn />
    </div>
    <OurTech />
  </div>
</template>

<!-- <template>
  <contactform />
</template> -->
<script>
// import contactform from "../src/components/Forms.vue";
import HelloWorld from "../components/HelloWorld";
import OurTech from "../components/OurTech.vue";
import RowColumn from "../components/RowColumn.vue";

export default {
  name: "newHome",

  components: {
    HelloWorld,
    OurTech,
    RowColumn,
  },
};
</script>
