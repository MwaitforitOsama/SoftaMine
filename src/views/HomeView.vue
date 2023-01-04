<template>
  <div class="content">
    <hello-world />
    <NewTech />

    <div>
      <RowColumn />
    </div>

    <ImageBox />
  </div>
</template>

<!-- <template>
  <contactform />
</template> -->
<script>
// import contactform from "../src/components/Forms.vue";
import HelloWorld from "../components/HelloWorld";

import RowColumn from "../components/RowColumn.vue";
import ImageBox from "../components/ImageBox.vue";
import NewTech from "../components/NewTech.vue";

export default {
  name: "newHome",

  components: {
    HelloWorld,

    RowColumn,
    ImageBox,
    NewTech,
  },
};
</script>
