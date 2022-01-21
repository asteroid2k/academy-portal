<script>
import ExpandIcon from "../../assets/expand.svg?component";
import Top from "../../components/Top.vue";
import { applications } from "../../helpers.js";
import PreviewApplication from "../../components/PreviewApplication.vue";

export default {
  name: "ApplicationEntries",
  components: {
    Top,
    ExpandIcon,
    PreviewApplication,
  },
  data() {
    return {
      applications,
      isOpen: false,
      pId: 0,
      batch: "Batch 1",
    };
  },
  computed: {
    filteredEntries() {
      return this.applications.filter(
        (entry) => entry.batch.toLowerCase() === this.batch.toLowerCase()
      );
    },
  },

  methods: {
    previewApplication(index) {
      this.pId = index;
      this.setIsOpen(true);
    },
    setIsOpen(value) {
      this.isOpen = value;
    },
  },
};
</script>
<template>
  <section>
    <PreviewApplication
      :isOpen="isOpen"
      :setIsOpen="setIsOpen"
      :entry="applications[pId]"
    />
  </section>
  <section>
    <div class="flex flex-col mb-10">
      <div class="flex">
        <h1 class="font-light text-[44px]">Entries -&nbsp;</h1>
        <div>
          <select
            v-model="batch"
            name="batch"
            id=""
            class="appearance-none font-light text-[44px] leading-9 w-[230px] h-[80px] py-1 border-transparent focus:border-0 focus:outline-0 focus:ring-0"
          >
            <option class="font-light text-xl" value="Batch 2">Batch 2</option>
            <option class="font-light text-xl" value="Batch 1">Batch 1</option>
          </select>
        </div>
      </div>
      <p class="italic text-[13px] -mt-1">
        Comprises of all that applied for batch 2
      </p>
    </div>
    <div>
      <!-- table -->
      <table class="w-full table-auto border-separate">
        <thead class="bg-text-400 text-white text-sm">
          <tr class="text-center">
            <th scope="col" class="py-4 border-text-400">Name</th>
            <th scope="col" class="py-4 border-text-400">Email</th>
            <th
              scope="col"
              class="flex items-center justify-center py-4 border-text-400 gap-2"
            >
              <span>DOB - Age</span>
              <span><img src="../../assets/ascdesc.svg" alt="" /></span>
            </th>
            <th scope="col" class="py-4 border-text-400">Address</th>
            <th scope="col" class="py-4 border-text-400">University</th>
            <th
              scope="col"
              class="flex items-center py-4 border-text-400 gap-2 px-5"
            >
              <span>CGPA</span>
              <span><img src="../../assets/ascdesc.svg" alt="" /></span>
            </th>
            <th scope="col" class="relative px-1 py-3">
              <span class="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody class="text-[15px]">
          <tr>
            <td class="py-2"></td>
          </tr>
          <tr
            v-for="(
              {
                firstName,
                lastName,
                email,
                dob,
                age,
                university,
                gpa,
                address,
              },
              index
            ) in filteredEntries"
            :key="index"
            :data-entry="index"
            class="text-text-300 hover:shadow-md group transition"
          >
            <td
              class="py-6 px-5 rounded-lg border-l-8 border-l-transparent group-hover:border-l-primary transition"
            >
              {{ firstName + " " + lastName }}
            </td>
            <td class="py-5 px-3">{{ email }}</td>
            <td class="py-5 px-3">
              {{ dob.split("-").reverse().join("/") }} -
              <span class="font-medium">{{ age }}</span>
            </td>
            <td class="py-5 px-1">{{ address }}</td>
            <td class="py-5 px-1">
              {{ university }}
            </td>
            <td class="py-5 px-1 text-center rounded-lg">{{ gpa }}</td>
            <td
              class="px-1 group rounded-lg border-l border-l-transparent"
              @click="previewApplication(index)"
            >
              <ExpandIcon
                @click="previewApplication(index)"
                class="text-text-400 w-4 stroke-2 group-hover:text-primary cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style scoped>
table {
  border-spacing: 0;
}
</style>
