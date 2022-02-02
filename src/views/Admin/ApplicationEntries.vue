<script>
import ExpandIcon from "../../assets/expand.svg?component";
import Top from "../../components/Top.vue";
import PreviewApplication from "../../components/PreviewApplication.vue";
import { notyf, calcAge } from "../../helpers";
import UpArrow from "../../assets/up.svg?component";
import DownArrow from "../../assets/down.svg?component";
import Polygon from "../../assets/polygon.svg?component";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

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
    UpArrow,
    DownArrow,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Polygon,
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
      return this.applications.filter((entry) => {
        return entry.batch_slug.toLowerCase() === this.batch.toLowerCase();
      });
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
    calcAge,
    sortByGpa(dir) {
      this.applications.sort((a, b) => {
        if (dir === "asc") {
          return parseFloat(a.gpa) - parseFloat(b.gpa);
        } else {
          return parseFloat(b.gpa) - parseFloat(a.gpa);
        }
      });
    },
    sortByDob(dir) {
      this.applications.sort((a, b) => {
        if (dir === "asc") {
          return new Date(b.dob) - new Date(a.dob);
        } else {
          return new Date(a.dob) - new Date(b.dob);
        }
      });
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
        <div v-show="batches">
          <Listbox v-model="batch">
            <ListboxButton
              ><p class="flex items-center">
                <span class="text-[44px] font-light">{{ batch }}</span>
                <Polygon class="ml-[5px]" />
              </p>
            </ListboxButton>
            <ListboxOptions
              class="absolute w-[150px] z-30 bg-white min-w-[50px] py-4 shadow"
            >
              <ListboxOption
                v-for="{ slug } in batches"
                :key="slug"
                :value="slug"
                class="text-2xl font-light hover:bg-primary/50 py-1 px-4 cursor-pointer"
              >
                {{ slug }}
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
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
                <div class="flex items-center gap-1">
                  <p>DOB - Age</p>
                  <div class="flex flex-col gap-[1px]">
                    <UpArrow @click="sortByDob('asc')" class="cursor-pointer" />
                    <DownArrow
                      @click="sortByDob('dsc')"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
              </th>
              <th scope="col" class="py-4 border-text-400">Address</th>
              <th scope="col" class="py-4 border-text-400">University</th>
              <th
                scope="col"
                class="flex items-center py-4 border-text-400 gap-2 px-5"
              >
                <div class="flex items-center gap-1">
                  <p>CGPA</p>
                  <div class="flex flex-col gap-[1px]">
                    <UpArrow @click="sortByGpa('asc')" class="cursor-pointer" />
                    <DownArrow
                      @click="sortByGpa('dsc')"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
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
              style="text-align: center"
            >
              <td
                class="py-6 px-5 rounded-lg border-l-8 border-l-transparent group-hover:border-l-primary transition"
              >
                {{ firstName + " " + lastName }}
              </td>
              <td class="py-5 px-3">{{ email }}</td>
              <td class="py-5 px-3">
                {{ dob.split("-").reverse().join("/") }} -
                <span class="font-medium">{{ calcAge(dob) }}</span>
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

/* .flex {
  text-align: left;
  align-items: baseline;
} */
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
