<script>
import ExpandIcon from "../../assets/expand.svg?component";
import Top from "../../components/Top.vue";
import PreviewApplication from "../../components/PreviewApplication.vue";
import { notyf } from "../../helpers";

export default {
  name: "ApplicationEntries",
  async mounted() {
    await this.fetchApplications();
  },
  props: { instance: Function },
  components: {
    Top,
    ExpandIcon,
    PreviewApplication,
  },
  data() {
    return {
      applications: [],
      batches: [],
      isOpen: false,
      pId: 0,
      batch: "",
    };
  },
  computed: {
    filteredEntries() {
      return this.applications.filter(
        (entry) => entry.batch_slug.toLowerCase() === this.batch.toLowerCase()
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
    async updateStatus(payload) {
      try {
        let response = await this.instance.post(
          "/applications/status",
          payload
        );
        if (response.data) {
          const { message } = response.data;
          notyf.open({ type: "purp", message });
        }
      } catch (error) {
        if (error.response) {
          const { status, statusText } = error.response;
          const { errors, message } = error.response.data;
          if (status == 401 || status == 403) {
            notyf.open({ type: "info", message: message || statusText });
            this.$router.push({ name: "AdminSignin" });
            return;
          }
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        } else {
          notyf.error("An error occured");
        }
      }
    },
    async fetchApplications() {
      try {
        let response = await this.instance.get("/applications");
        if (response.data) {
          const { batches, applications, count } = response.data;
          if (count < 1) {
            notyf.open({ type: "purp", message: "No applications yet" });
          }
          this.applications = applications;
          this.batches = batches;
          if (batches.length) {
            this.batch = batches[0].slug;
          }
        }
      } catch (error) {
        if (error.response) {
          const { status, statusText } = error.response;
          const { errors, message } = error.response.data;
          if (status == 401 || status == 403) {
            notyf.open({ type: "info", message: message || statusText });
            this.$router.push({ name: "AdminSignin" });
            return;
          }
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        } else {
          notyf.error("An error occured");
        }
      }
    },
  },
};
</script>
<template>
  <section>
    <PreviewApplication
      :isOpen="isOpen"
      :setIsOpen="setIsOpen"
      :entry="filteredEntries[pId]"
      :updateStatus="updateStatus"
    />
  </section>
  <section class="relative">
    <div id="" class="flex flex-col mb-10">
      <div class="flex">
        <h1 class="font-light text-[44px]">Entries -&nbsp;</h1>
        <div>
          <select
            v-show="batches.length"
            v-model="batch"
            name="batch"
            id=""
            class="appearance-none font-light text-[40px] leading-9 w-[260px] h-[80px] py-1 border-transparent focus:border-0 focus:outline-0 focus:ring-0"
          >
            <option
              v-for="{ slug } in batches"
              class="font-light text-xl"
              :value="slug"
            >
              {{ slug }}
            </option>
          </select>
        </div>
      </div>
      <p class="italic text-[13px] -mt-1">
        Comprises of all that applied for {{ batch }}
      </p>
    </div>
    <div>
      <!-- table -->
      <div class="wrapper">
        <table class="w-full table-auto border-separate">
          <thead id="sticky-head" class="bg-text-400 text-white text-sm">
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
              class="text-text-300 light-shadow group transition"
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
                  class="text-text-400 w-5 stroke-2 group-hover:text-primary cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<style scoped>
table {
  border-spacing: 0;
}

#sticky-head {
  position: sticky;
  top: 0px;
}

.flex {
  text-align: left;
  align-items: baseline;
}
@media screen and (max-width: 992px) {
  .wrapper {
    overflow: auto;
  }
  .flex {
    flex-direction: column;
  }
  select {
    padding: 0;
  }
}
</style>
